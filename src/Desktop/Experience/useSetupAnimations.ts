import { useAnimations } from "@react-three/drei"
import { useEffect } from "react"
import { LoopOnce } from "three"

type Action = 'GrabUp' | 'GrabDown' | 'PhoneAction' | 'Hover'

export default function useSetupAnimations(gltf: any, animation: Action, settings: {
    once: Action[],
    onFinished: Partial<Record<Action, () => void>>
}) {
    const { scene, animations } = gltf
    const { actions, mixer } = useAnimations(animations, scene)

    useEffect(() => {
        settings.once.forEach((action: Action) => {
            const animation = actions[action]
            if (animation == null) throw new Error(`${action} animation missing`)

            animation.clampWhenFinished = true
            animation.setLoop(LoopOnce, 1)
        })
    }, [actions, animation, settings.once])

    useEffect(() => {
        const onFinished = () => {
            if (settings.onFinished[animation] != null) {
                settings.onFinished[animation]()
            }
        }
        mixer.addEventListener('finished', onFinished)

        return () => {
            mixer.removeEventListener('finished', onFinished)
        }
    }, [actions, animation, settings.onFinished, mixer])



    useEffect(() => {
        if (animation == 'GrabUp') actions['PhoneAction']?.play()

        const ANIMATION_FADE = 0.1

        actions[animation]?.reset().fadeIn(ANIMATION_FADE).play()

        return () => { actions[animation]?.fadeOut(ANIMATION_FADE) }
    }, [animation, actions])
}