import { useGLTF, useTexture } from "@react-three/drei"
import { useQRData } from "../provider/QRProvider"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { Group } from "three"
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)

useTexture.preload('/qr.png')
useGLTF.preload('qr.glb')

const POSITION = {
    shown: {
        x: -1.7,
        y: -0.75,
        z: 3
    },
    hide: {
        x: -4,
        y: -2,
        z: 4.5
    }
}

export default function QR() {
    const qr = useGLTF('qr.glb')
    const qrTexture = useTexture('/qr.png')

    const { shown } = useQRData()

    const groupRef = useRef<Group>(null)


    useGSAP(() => {
        if (!groupRef.current) return

        gsap.to(groupRef.current.position, {
            x: shown ? POSITION.shown.x : POSITION.hide.x,
            y: shown ? POSITION.shown.y : POSITION.hide.y,
            z: shown ? POSITION.shown.z : POSITION.hide.z,
            duration: 1.5,
            ease: 'elastic.out(1, 0.75)'
        })
    }, [shown])

    return (
        <group ref={groupRef} position={[POSITION.hide.x, POSITION.hide.y, POSITION.hide.z]}>
            <primitive object={qr.scene} scale={10} />

            <mesh position={[0, 1, -0.05]}>
                <planeGeometry args={[1.2, 1.2]} />
                <meshBasicMaterial map={qrTexture} />
            </mesh>
        </group>

    )
}