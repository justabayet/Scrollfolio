import { useEffect, useRef, useState } from "react"
import { SpotLight, useCursor } from '@react-three/drei'
import { useGSAP } from "@gsap/react"
import { Object3D, SpotLight as SpotLightImpl } from "three"

import gsap from 'gsap'
import { usePhaseData } from "../provider/PhaseProvider"
gsap.registerPlugin(useGSAP)

interface HoveringProps {
}

export default function Hovering({ }: HoveringProps) {
    const [hovered, setHover] = useState(false)
    const [hasWaited, setHasWaited] = useState(false)
    const { phase, setPhase } = usePhaseData()

    const handlePointerOver = () => { setHover(true) }
    const handlePointerOut = () => { setHover(false) }
    const handleOnClick = () => {
        setPhase('GrabbingDown')
        setHover(false)
        setTimeout(() => { setHasWaited(true) }, 300)
    }

    useCursor(hovered)

    const spotlightRef = useRef<SpotLightImpl | null>(null)
    const [target] = useState(() => new Object3D())

    const [spotlightOn, setSpotlightOn] = useState(false)

    useGSAP(() => {
        if (!spotlightRef.current) return

        gsap.to(spotlightRef.current, {
            intensity: spotlightOn ? 50 : 0,
            duration: 0.15,
            ease: 'ease'
        })
    }, [spotlightOn])


    useEffect(() => {
        setSpotlightOn(hovered && phase == 'Hovering')
    }, [hovered, phase])

    if (phase != 'Hovering' && hasWaited) {
        return null
    }

    return (
        <>
            {phase == 'Hovering' &&
                <mesh position-z={2}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    onClick={handleOnClick}>
                    <planeGeometry args={[2, 4]} />
                    <meshBasicMaterial transparent opacity={0} />
                </mesh>}

            <SpotLight
                ref={spotlightRef}
                intensity={5}
                position={[0, -1.5, -2.5]}
                angle={1.5}
                volumetric={false}
                target={target} >
                <primitive object={target} position={[0, -10, -2.5]} />
            </SpotLight>
        </>
    )
}