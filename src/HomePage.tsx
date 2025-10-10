
import arrowDown from './assets/down-chevron-svg.svg'
import { EMAIL_ADDRESS } from './const'

const keyframes = `
@keyframes bounce {
    0% { padding-top: 12px; }
    50% { padding-top: 0px; }
    100% { padding-top: 12px; }
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
                background: 'linear-gradient( #0f293eff, #141414ff )',
                color: 'var(--color-accent)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Lexend Deca'
            }}>
                <div>
                    <h1>Anthony Bayet</h1>
                    <h2>Creative Developer</h2>
                    <p>Belgium 🇧🇪 {EMAIL_ADDRESS}</p>
                </div>
                <div style={{ height: '30%' }}></div>
            </div>

            <div
                onClick={() => {
                    if (nextElement.current == null) return
                    nextElement.current.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    width: '48px',
                    height: '48px',
                    transform: 'translate(-50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 11,
                    cursor: 'pointer'
                }}>

                <style>{keyframes}</style>
                <img style={{
                    paddingTop: 3,
                    animation: '1.2s cubic-bezier(0.35, 0.01, 0.67, 0.98) 0s infinite normal none running bounce',
                }} src={arrowDown} width={56} height={56} alt='Down Arrow' />
            </div>
        </>
    )
}

export default HomePage