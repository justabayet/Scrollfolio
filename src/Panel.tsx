import { useRef, useState, type PropsWithChildren, type RefObject } from 'react'
import linkedinLogo from './assets/linkedin_no_bg.webp'
import githubLogo from './assets/github_no_bg.webp'
import redirectLogo from './assets/redirect_no_bg.webp'
import mailLogo from './assets/mail.png'
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from './const'

interface PanelProps extends PropsWithChildren {
    topAnchorRef?: RefObject<HTMLDivElement | null>
    resumeAnchorRef?: RefObject<HTMLDivElement | null>
    description?: string
    title?: string
    url?: string
}

function Panel({
    title,
    description,
    children,
    url
}: PanelProps) {
    const descriptionContainerRef = useRef<HTMLDivElement>(null)
    const [collapsedDescription, setCollapsedDescription] = useState(true)

    const toggleCollapse = () => {
        if (!collapsedDescription && descriptionContainerRef.current != null) {
            descriptionContainerRef.current.scrollTo({ top: 0 })
        }
        setCollapsedDescription(!collapsedDescription)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100dvh',
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            position: 'relative',
            fontFamily: 'system-ui'
        }}>
            {children}
            {/* Description */}
            <div
                onClick={toggleCollapse}
                ref={descriptionContainerRef}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    zIndex: 10,
                    opacity: (title == null && description == null) ? 0 : 1,
                    width: 'calc(100vw - 2em)',
                    textAlign: 'left',
                    padding: '1em',
                    background: collapsedDescription
                        ? 'linear-gradient(transparent, #22222215, 2em, #22222282, 100%, #222222ff)'
                        : 'linear-gradient(transparent, #2222222f, 1em, #222222b1)',
                    color: '#fff',
                    maxHeight: collapsedDescription ? '4em' : '10em',
                    overflowY: collapsedDescription ? 'hidden' : 'auto',
                }}>
                {title != null &&
                    <div><strong>{title}</strong></div>}
                {description != null &&
                    <div
                        style={{ maxWidth: '70vw', cursor: 'pointer', whiteSpace: 'pre-line' }}
                    >
                        {description}
                    </div>}
            </div>
            {/* Buttons */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                padding: '1em',
                gap: 12
            }}>

                {/* <button onClick={() => {
                    if (topAnchorRef == null) return
                    topAnchorRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }} style={{ display: 'flex' }}>
                    <img src={arrowUp} width={32} height={32} />
                </button> */}
                {url &&
                    <button onClick={() => {
                        window.open(url, '_blank')
                    }} style={{ display: 'flex', backgroundColor: "#fff" }}>
                        <img src={redirectLogo} width={32} height={32} />
                    </button>}

                <button onClick={() => {
                    window.open(`mailto:${EMAIL_ADDRESS}`, '_blank')
                }} style={{ display: 'flex', backgroundColor: "#fff" }}>
                    <img src={mailLogo} width={32} height={32} />
                </button>

                <button onClick={() => {
                    window.open(LINKEDIN_URL, '_blank')
                }} style={{ display: 'flex', backgroundColor: "#fff" }}>
                    <img src={linkedinLogo} width={32} height={32} />
                </button>

                <button onClick={() => {
                    window.open(GITHUB_URL, '_blank')
                }} style={{ display: 'flex', backgroundColor: "#fff" }}>
                    <img src={githubLogo} width={32} height={32} />
                </button>
            </div>
        </div>
    )
}

export default Panel