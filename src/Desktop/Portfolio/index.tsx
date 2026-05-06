import Panel from './Panel'

import "@fontsource/lexend-deca/100.css"

import Video from './Video'
import Resume from './Resume'
import { projects } from '../../projects'

function PortfolioWeb() {
    return (
        <>
            {projects.map((project) => {
                return (
                    <Panel key={project.title}>
                        <Video src={project.video} srcBackground={project.background} alt={project.alt} />
                    </Panel>
                )
            })}

            <Panel useEmail>
                <Resume />
            </Panel>
        </>
    )
}

export default PortfolioWeb
