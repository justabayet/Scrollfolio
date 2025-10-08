import { useRef, type PropsWithChildren } from "react"
import vistaprintLogo from './assets/vistaprint_logo.jpeg'
import usaskLogo from './assets/university_of_saskatchewan_logo.jpeg'
import unamurLogo from './assets/universite_de_namur_logo.jpeg'

const NB_PAGES = 4
const LOGO_SIZE = 80

function Resume() {
    const page1 = useRef<HTMLDivElement | null>(null)
    const page2 = useRef<HTMLDivElement | null>(null)
    const page3 = useRef<HTMLDivElement | null>(null)
    const page4 = useRef<HTMLDivElement | null>(null)

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'var(--color-accent)',
            color: 'var(--color-primary)',
            scrollSnapType: "both mandatory",
            scrollSnapStop: "always",
            overflowX: "scroll",
            overflowY: "hidden",
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap'
        }}>
            <ResumePage onClick={() => {
                if (page2.current == null) return
                page2.current.scrollIntoView({ behavior: 'smooth' })
            }}>
                <div ref={page1}></div>

                <TopSection>
                    Now
                </TopSection>

                <MidSection>
                    <div>
                        <h1>Creative Developer</h1>
                        <h1>Freelance</h1>
                    </div>
                </MidSection>

                <Navigator index={0} />
            </ResumePage>
            <ResumePage onClick={() => {
                if (page3.current == null) return
                page3.current.scrollIntoView({ behavior: 'smooth' })
            }} isInversed>
                <div ref={page2}></div>

                <TopSection>
                    2.7 Years
                </TopSection>

                <MidSection>
                    <h1>Vistaprint</h1>

                    <img src={vistaprintLogo} width={LOGO_SIZE} height={LOGO_SIZE} />

                    <h2>Software Engineer</h2>
                </MidSection>

                <Navigator index={1} isInversed />
            </ResumePage>
            <ResumePage onClick={() => {
                if (page4.current == null) return
                page4.current.scrollIntoView({ behavior: 'smooth' })
            }}>
                <div ref={page3}></div>

                <TopSection>
                    6 Months
                </TopSection>

                <MidSection>
                    <h1>University of Saskatchewan</h1>

                    <img src={usaskLogo} width={LOGO_SIZE} height={LOGO_SIZE} />

                    <h2>Research Trainee</h2>
                </MidSection>

                <Navigator index={2} />
            </ResumePage>
            <ResumePage onClick={() => {
                if (page1.current == null) return
                page1.current.scrollIntoView({ behavior: 'smooth' })
            }} isInversed>
                <div ref={page4}></div>

                <MidSection>
                    <h1>University of Namur</h1>

                    <img src={unamurLogo} width={LOGO_SIZE} height={LOGO_SIZE} />

                    <h2>Bachelor + Master's Degree</h2>
                </MidSection>

                <Navigator index={3} isInversed />
            </ResumePage>
        </div>
    )
}

interface ResumePageProps extends PropsWithChildren {
    isInversed?: boolean
    onClick: () => void
}

function ResumePage({ children, isInversed = false, onClick }: ResumePageProps) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            minWidth: '100%',
            fontFamily: 'Lexend Deca',
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            position: 'relative',
            background: isInversed ? 'var(--color-primary)' : 'var(--color-accent)',
            color: isInversed ? 'var(--color-accent)' : 'var(--color-primary)',
        }}
            onClick={onClick}>
            {children}
        </div>
    )
}

interface NavigatorProps {
    index: number
    isInversed?: boolean
}

function Navigator({ index: indexActive, isInversed }: NavigatorProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: '50%',
            bottom: '2em',
            transform: 'translateX(-50%)',
            gap: '0.25em'
        }}>
            {(Array.from({ length: NB_PAGES })).map((_, index) => {
                return (
                    <Ball key={index} isFull={indexActive === index} isInversed={isInversed} />
                )
            })}
        </div>
    )
}

interface BallProps {
    isFull?: boolean
    isInversed?: boolean
}

function Ball({ isFull = false, isInversed = false }: BallProps) {
    const color = isInversed ? 'var(--color-accent)' : 'var(--color-primary)'

    return (
        <div style={{
            width: '0.5em',
            height: '0.5em',
            borderRadius: '50%',
            border: `0.1em solid ${color}`,
            backgroundColor: isFull ? `${color}` : 'transparent'
        }} />
    )
}

function TopSection({ children }: PropsWithChildren) {
    return (

        <h2 style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
        }}>
            {children}
        </h2>
    )
}

function MidSection({ children }: PropsWithChildren) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            minWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            {children}
        </div>
    )
}

export default Resume