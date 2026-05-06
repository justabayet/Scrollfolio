import { Canvas } from '@react-three/fiber'
import { Loader, Stats } from '@react-three/drei'

import { Experience } from './Experience'

import './App.css'
import Navigator from './Navigator'
import useOnWheel from './hooks/useOnWheel'
import Title from './Title'
import usePointerTracking from './hooks/usePointerTracking'
import Counter from './Counter'
import { usePhaseData } from './provider/PhaseProvider'
import QRButton from './QRButton'

export default function App() {
    const onWheel = useOnWheel()
    const onPointerMove = usePointerTracking()
    const { phase } = usePhaseData()

    const isInitPhase = phase == 'Loading' || phase == 'Hovering'

    return (
        <div onPointerMove={onPointerMove} onWheel={(!isInitPhase) ? onWheel : undefined} style={{ width: '100vw', height: '100dvh', background: '#000' }}>
            {(phase == 'Showing') &&
                <>
                    <Title />
                    <Counter />
                    <Navigator />
                    <QRButton />
                </>
            }

            <Canvas camera={{ fov: 70, position: [0, 0, 5] }} gl={{ powerPreference: 'high-performance' }}>
                <Stats />

                <color args={['#1d1a24']} attach="background" />

                <Experience />
            </Canvas>
            <Loader />
        </div >
    )
}