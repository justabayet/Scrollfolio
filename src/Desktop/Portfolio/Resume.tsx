import { useRef, type PropsWithChildren } from "react"

function Resume() {
    const scrollAreaRef = useRef<HTMLDivElement>(null!)

    return (
        <div ref={scrollAreaRef} style={{
            width: '100%',
            height: '100%',
            background: 'var(--color-accent)',
            color: 'var(--color-primary)',
            overflowX: "scroll",
            overflowY: "hidden",
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            scrollbarWidth: 'none',
            textAlign: 'center'
        }}>
            <ResumePage >
                <MidSection>
                    <div>
                        <h1 style={{ padding: '20px' }}>What's next...</h1>
                    </div>
                </MidSection>
            </ResumePage>
        </div>
    )
}

interface ResumePageProps extends PropsWithChildren {
    isInversed?: boolean
}

function ResumePage({ children, isInversed = false }: ResumePageProps) {
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
            textAlign: 'center'
        }}>
            {children}
        </div>
    )
}

function MidSection({ children }: PropsWithChildren) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
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