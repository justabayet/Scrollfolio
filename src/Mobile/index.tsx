import { useRef } from 'react'
import Panel from './Panel'

import "@fontsource/lexend-deca/100.css"

import Video from './Video'
import HomePage from './HomePage'
import Resume from './Resume'
import { projects } from '../projects'

function MobileApp() {
    const firstElementRef = useRef<HTMLDivElement>(null)

    return (
        <div style={{
            scrollSnapType: "both mandatory",
            scrollSnapStop: "always",
            overflow: "scroll",
            height: "100dvh",
            scrollbarWidth: "none"
        }}>
            <Panel uiButtonsDelay={1.4} useEmail>
                <HomePage nextElement={firstElementRef} />
            </Panel>


            {projects.map((project, index) => {
                return (
                    <Panel title={project.title} url={project.url} description={project.description} key={project.title}>
                        {index === 0 && <div ref={firstElementRef} />}
                        <Video src={project.video} srcBackground={project.background} alt={project.alt} />
                    </Panel>
                )
            })}


            <Panel useEmail>
                <Resume />
            </Panel>
        </div>
    )
}

export default MobileApp
