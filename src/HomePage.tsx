
import arrowDown from './assets/down-chevron-svg.svg'
import BlurIn from './BlurIn';
import { motion, type AnimationGeneratorType } from 'framer-motion'

const keyframes = `
@keyframes bounce {
    0% { padding-top: 12px; }
    100% { padding-top: 0px; }
}`;

interface HomePageProps {
    nextElement: React.RefObject<HTMLDivElement | null>
}

function HomePage({ nextElement }: HomePageProps) {
    return (
        <>
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-accent)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Lexend Deca',
            }}>
                <div style={{
                    maxWidth: '500px',
                    padding: '12px',
                    color: 'white'
                }}>
                    <BlurIn><h1>Anthony Bayet</h1></BlurIn>
                    <BlurIn><h2 >Creative Developer 🇧🇪</h2></BlurIn>

                    <motion.div
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, delay: 1.3, type: 'spring' as AnimationGeneratorType }}
                    >
                        <p style={{
                            padding: '24px 16px 0px 16px',
                            textAlign: 'left',
                            fontFamily: 'system-ui',
                            fontWeight: 200
                        }}>
                            I build web experiences to bring life to your creative vision.
                            <br /><br />
                            {'<'}React{'>'} {'<'}Three.js{'>'} {'<'}WebGL{'>'} {'<'}Node.js{'>'}
                        </p>
                    </motion.div>
                </div>
                <div style={{ height: '10%' }}></div>
            </div>

            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                onClick={() => {
                    if (nextElement.current == null) return
                    nextElement.current.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: '16px',
                    left: '0',
                    width: '100%',
                    height: '48px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 11,
                    cursor: 'pointer'
                }}>

                <style>{keyframes}</style>
                <img style={{
                    paddingTop: 3,
                    animation: '.5s cubic-bezier(0.04, 0.74, 0.61, 0.9) 1.3s infinite alternate none running bounce',
                }} src={arrowDown} width={56} height={56} alt='Down Arrow' />
            </motion.div>
        </>
    )
}

export default HomePage