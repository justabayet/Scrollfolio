import { Environment, Float, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

import { Color, Group } from 'three'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { CustomEase } from 'gsap/all'
gsap.registerPlugin(useGSAP, CustomEase)

import useSetupAnimations from './useSetupAnimations'
import Hovering from './Hovering'
import Phone from './Phone'
import { usePhaseData } from '../provider/PhaseProvider'
import { useFrame } from '@react-three/fiber'
import QR from './QR'

const MAX_TILT = .02


useGLTF.preload('hand.glb')

export default function Experience() {
    const { phase, setPhase } = usePhaseData()

    const getAnimation = () => {
        if (phase == 'Hovering') return 'Hover'

        if (phase == 'GrabbingDown') return 'GrabDown'

        if (phase == 'GrabbingUp') return 'GrabUp'
        return 'GrabUp'
    }

    const animation = getAnimation()

    const hand = useGLTF('hand.glb')

    useSetupAnimations(hand, animation, {
        once: ['GrabUp', 'GrabDown', 'PhoneAction'],
        onFinished: {
            'GrabDown': () => { setPhase('GrabbingUp') },
            'GrabUp': () => { setPhase('Showing') }
        }
    })

    const backgroundColorRef = useRef<Color>(null)

    useGSAP(() => {
        if (backgroundColorRef.current == null) return

        const isHold = animation == 'GrabUp'
        gsap.to(backgroundColorRef.current, {
            r: isHold ? 0.0113 : 0,
            g: isHold ? 0.01019 : 0,
            b: isHold ? 0.01411 : 0,
            duration: 1,
            ease: 'linear',
        })
    }, [animation])


    const groupRef = useRef<Group>(null)
    const mouse = useRef({ x: 0, y: 0 })

    useFrame((_, delta) => {
        if (!groupRef.current) return
        const speed = 1 - Math.pow(0.01, delta)
        groupRef.current.rotation.y +=
            (mouse.current.x * MAX_TILT - groupRef.current.rotation.y) * speed
        groupRef.current.rotation.x +=
            (-mouse.current.y * MAX_TILT - groupRef.current.rotation.x) * speed
    })

    return (
        <>
            <Environment preset='city' environmentIntensity={0.2} />
            <fog attach="fog" args={['#000000', 3, 9.0]} />

            <Hovering />

            <mesh
                onPointerMove={(e) => {
                    mouse.current.x = Math.max(-1, Math.min(1, e.point.x / 8))
                    mouse.current.y = Math.max(-1, Math.min(1, e.point.y / 8))
                }}
            >
                <planeGeometry args={[30, 30]} />
                <meshBasicMaterial transparent opacity={0} depthWrite={false} />
            </mesh>

            <group ref={groupRef}>
                <Float floatIntensity={1} rotationIntensity={0.1}>

                    <Phone scene={hand.scene} />
                </Float>
            </group>
            <ambientLight intensity={0.4} />

            <QR />
        </>
    )
}