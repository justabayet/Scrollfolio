import { useState, type PropsWithChildren, type RefObject } from 'react'
import linkedinLogo from './assets/linkedin_no_bg.webp'
import githubLogo from './assets/github_no_bg.webp'
import redirectLogo from './assets/redirect_no_bg.webp'

interface PanelProps extends PropsWithChildren {
    topAnchorRef?: RefObject<HTMLDivElement | null>
    resumeAnchorRef?: RefObject<HTMLDivElement | null>
    isResume?: boolean
    description?: string
    title?: string
    url?: string
}

function Panel({
    title,
    description,
    children,
    url }: PanelProps) {

    const [collapsedDescription, setCollapsedDescription] = useState(true)
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            scrollSnapAlign: "center",
            position: 'relative'
        }}>
            {children}
            {/* Description */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 10,
                width: '100vw',
                textAlign: 'left',
                padding: '1em',
                background: collapsedDescription
                    ? 'linear-gradient(transparent, #22222215, 2em, #22222282, 100%, #222222ff)'
                    : 'linear-gradient(transparent, #2222222f, 4em, #222222ff)',
                color: '#fff',
                maxHeight: collapsedDescription ? '4em' : '10em',
                overflowY: 'auto'
            }}>
                {title != null &&
                    <div><strong>{title}</strong></div>}
                {description != null &&
                    <div style={{ maxWidth: '70vw', cursor: 'pointer' }} onClick={() => {
                        setCollapsedDescription(v => !v)
                    }}>
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
                    }} style={{ display: 'flex' }}>
                        <img src={redirectLogo} width={32} height={32} />
                    </button>}
                <button onClick={() => {
                    window.open('https://www.linkedin.com/in/anthony-bayet', '_blank')
                }} style={{ display: 'flex' }}>
                    <img src={linkedinLogo} width={32} height={32} />
                </button>
                <button onClick={() => {
                    window.open('https://github.com/justabayet/', '_blank')
                }} style={{ display: 'flex' }}>
                    <img src={githubLogo} width={32} height={32} />
                </button>
            </div>
        </div>
    )
}

export default Panel