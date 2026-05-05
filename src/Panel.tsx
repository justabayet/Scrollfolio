import { useLayoutEffect, useRef, useState, type PropsWithChildren } from 'react'
import linkedinLogo from './assets/linkedin-svg.svg'
import githubSVGLogo from './assets/github-mark.svg'
import redirectLogo from './assets/external-link-svg.svg'
import mailLogo from './assets/email-svg.svg'
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from './const'
import ButtonUI from './ButtonUI'
import { motion } from "framer-motion"

interface PanelProps extends PropsWithChildren {
    description?: string
    title?: string
    url?: string
    uiButtonsDelay?: number
    useEmail?: boolean
    useGithub?: boolean
}

const RANDOM_DELAY_BASE = -0.1

const RANDOM_DELAY = {
    'redirect': RANDOM_DELAY_BASE * 4,
    'mail': RANDOM_DELAY_BASE * 3,
    'linkedin': RANDOM_DELAY_BASE * 2,
    'github': RANDOM_DELAY_BASE * 1,
}

const USE_GITHUB = false
const USE_EMAIL = false

function Panel({
    title,
    description,
    children,
    url,
    uiButtonsDelay = 0.5,
    useGithub = USE_GITHUB,
    useEmail = USE_EMAIL
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
    }, [])

    return (
        <div style={{
            width: '100vw',
            height: '100dvh',
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            position: 'relative',
            fontFamily: 'system-ui',
            color: 'white',
            overflow: 'hidden',
            userSelect: 'none'
        }} onClick={() => {
            descriptionContainerRef.current?.scrollTo({ top: 0 })
            setCollapsedDescription(true)
        }}>
            {children}
            {/* Description */}

            <div
                onClick={toggleCollapse}


                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    zIndex: 10,
                    opacity: (title == null && description == null) ? 0 : 1,
                    width: 'calc(100vw - 2em)',
                    textAlign: 'left',
                    padding: '1em',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    pointerEvents: 'none',
                    background: 'linear-gradient(transparent, #050e1528, 10em, #050e1573, 18em, rgba(5, 14, 21, 0.53))',
                    height: '16em'
                }}>
                <div
                    onClick={toggleCollapse}
                    style={{
                        pointerEvents: 'auto'
                    }}>
                    {title != null &&
                        <div onClick={toggleCollapse} style={{
                            display: 'flex',
                            gap: '0.3em'
                        }}>
                            {isOverflow &&
                                <motion.div style={{
                                    transform: 'rotate(180deg)',
                                    width: 'fit-content',
                                    height: 'fit-content',
                                }}
                                    initial={{ rotate: 180 }}
                                    animate={collapsedDescription ? { rotate: 180 } : { rotate: 0 }}
                                    transition={{ duration: 0.1, ease: "easeIn" }}>
                                    ▼
                                </motion.div>}

                            <div>
                                <strong>{title}</strong>
                            </div>
                        </div>}
                    {description != null &&
                        <motion.div
                            ref={descriptionContainerRef}

                            initial={{ maxHeight: '4em' }}
                            animate={collapsedDescription
                                ? { maxHeight: '4em' }
                                : { maxHeight: '10em' }}
                            onClick={toggleCollapse}
                            style={{
                                overflowY: collapsedDescription ? 'hidden' : 'auto',
                                scrollbarWidth: "none"
                            }}
                        >
                            <div

                                style={{
                                    maxWidth: '70vw',
                                    cursor: isOverflow ? 'pointer' : 'auto',
                                    whiteSpace: 'pre-line',
                                }}>
                                {description}
                            </div>
                        </motion.div>}
                </div>
            </div >
            {/* Buttons */}
            < div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                padding: '1em',
                gap: 12,
                pointerEvents: 'none'
            }
            }>
                {url && <ButtonUI src={redirectLogo} url={url} description='Open project?' alt='Redirect icon' ariaLabel='Open project in new tab' delay={uiButtonsDelay + RANDOM_DELAY.redirect} />}

                {useEmail && <ButtonUI src={mailLogo} url={`mailto:${EMAIL_ADDRESS}`} description='Open email application?' alt='Email icon' ariaLabel='Open email app' delay={uiButtonsDelay + RANDOM_DELAY.mail} />}
                <ButtonUI src={linkedinLogo} url={LINKEDIN_URL} description='Open LinkedIn?' alt='LinkedIn icon' ariaLabel='Open LinkedIn profile' delay={uiButtonsDelay + RANDOM_DELAY.linkedin} />
                {useGithub && <ButtonUI src={githubSVGLogo} url={GITHUB_URL} description='Open Github?' alt='Github icon' ariaLabel='Open Github profile' delay={uiButtonsDelay + RANDOM_DELAY.github} />}
            </div >
        </div >
    )
}

export default Panel