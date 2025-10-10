import { useLayoutEffect, useRef, useState, type PropsWithChildren } from 'react'
import linkedinLogo from './assets/linkedin-svg.svg'
import githubSVGLogo from './assets/github-mark.svg'
import redirectLogo from './assets/external-link-svg.svg'
import mailLogo from './assets/email-svg.svg'
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from './const'
import ButtonUI from './ButtonUI'

interface PanelProps extends PropsWithChildren {
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
    const [isOverflow, setIsOverflow] = useState(true)

    const toggleCollapse = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isOverflow) return
        if (!collapsedDescription && descriptionContainerRef.current != null) {
            descriptionContainerRef.current.scrollTo({ top: 0 })
        }
        event.stopPropagation()
        setCollapsedDescription(!collapsedDescription)
    }

    useLayoutEffect(() => {
        if (descriptionContainerRef.current == null) return

        setIsOverflow(descriptionContainerRef.current.scrollHeight > descriptionContainerRef.current.offsetHeight)
    }, [title])

    return (
        <div style={{
            width: '100vw',
            height: '100dvh',
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            position: 'relative',
            fontFamily: 'system-ui',
            color: 'var(--color-accent)'
        }} onClick={() => {
            descriptionContainerRef.current?.scrollTo({ top: 0 })
            setCollapsedDescription(true)
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
                        ? 'linear-gradient(transparent, #050e1515, 2em, #050e1582, 100%, #050e15ff)'
                        : 'linear-gradient(transparent, #050e1566, 1em, #050e15ff)',

                    maxHeight: collapsedDescription ? '4em' : '10em',
                    overflowY: collapsedDescription ? 'hidden' : 'auto',
                }}>
                {title != null &&
                    <div>{collapsedDescription ? '▼' : '▲'} <strong>{title}</strong></div>}
                {description != null &&
                    <div
                        style={{
                            maxWidth: '70vw',
                            cursor: 'pointer',
                            whiteSpace: 'pre-line',
                            color: 'var(--color-accent)'
                        }}
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
                {url && <ButtonUI src={redirectLogo} url={url} description='Open project?' alt='Redirect icon' ariaLabel='Open project in new tab' />}

                <ButtonUI src={mailLogo} url={`mailto:${EMAIL_ADDRESS}`} description='Open email application?' alt='Email icon' ariaLabel='Open email app' />
                <ButtonUI src={linkedinLogo} url={LINKEDIN_URL} description='Open LinkedIn?' alt='LinkedIn icon' ariaLabel='Open LinkedIn profile' />
                <ButtonUI src={githubSVGLogo} url={GITHUB_URL} description='Open Github?' alt='Github icon' ariaLabel='Open Github profile' />
            </div>
        </div>
    )
}

export default Panel