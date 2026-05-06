import { type PropsWithChildren } from 'react'
interface PanelProps extends PropsWithChildren {
    description?: string
    title?: string
    url?: string
    uiButtonsDelay?: number
    useEmail?: boolean
    useGithub?: boolean
}


function Panel({
    children,
}: PanelProps) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            position: 'relative',
            fontFamily: 'system-ui',
            color: 'white',
            overflow: 'hidden',
            userSelect: 'none'
        }}>
            {children}
        </div >
    )
}

export default Panel