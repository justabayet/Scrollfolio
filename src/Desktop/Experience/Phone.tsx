import { Group, Object3D } from "three"
import ScreenLight from './ScreenLight'
import PhoneScreen from './PhoneScreen'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { createPortal } from "@react-three/fiber"
import Hand from "./Hand"
import useUpdateIntersection from "./useUpdateIntersection"
import { useProgress } from "@react-three/drei"
gsap.registerPlugin(useGSAP)

interface PhoneProps {
    scene: Group
}

export default function Phone({ scene }: PhoneProps) {
    const groupRef = useRef<Object3D>(null)
    const phoneContainerRef = useRef<Object3D>(null!)

    const { progress } = useProgress()

    useGSAP(() => {
        if (!groupRef.current || progress < 100) return

        gsap.to(groupRef.current.position, {
            z: 0,
            duration: 3,
            ease: 'back.out(0.1)',
            delay: 2.2
        })
    }, [])

    const phoneNode = scene.getObjectByName('Phone')


    useUpdateIntersection(phoneContainerRef)

    return (
        <group ref={groupRef} position-z={-4}>
            <Hand scene={scene} />

            {phoneNode && createPortal(
                <ScreenLight />,
                phoneNode
            )}

            {(phoneNode) && createPortal(
                <PhoneScreen />,
                phoneNode
            )}

            <object3D ref={phoneContainerRef} rotation-x={Math.PI / 2} position-z={2.1} />
        </group>
    )
}