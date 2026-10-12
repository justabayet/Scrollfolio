import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { usePageNumberData } from "./provider/PageNumberProvider"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)

const descriptions = [
    { title: 'Arveye', tags: ['web', 'sensors'] },
    { title: 'Sagama', tags: ['web', 'art'] },
    { title: 'Haquenne T. Gallery', tags: ['web', '3D', 'shader'] },
    { title: 'Christmas Card', tags: ['web', 'sensors'] },
    { title: 'Mosaic', tags: ['android', 'wallpaper', 'generative'] },
    { title: 'Aweye', tags: ['web', 'sensors'] },
    { title: 'Solrece', tags: ['web', 'sensors'] },
    { title: 'Shaders', tags: ['web', 'glsl', 'generative'] },
    { title: 'Solrece (wallpaper)', tags: ['android', 'wallpaper', 'sensors'] },
]

export default function Description() {
    const { pageNumber } = usePageNumberData()
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = textRef.current
        if (!el) return

        gsap.fromTo(el,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        )
    }, [pageNumber])

    useGSAP(() => {
        gsap.from('#description-container', {
            opacity: 0,
            y: -50,
            ease: "ease",
            delay: 0,
            duration: 0.5,
        })
    }, [])

    const description = descriptions.at(pageNumber)

    if (description == null) return null

    return (
        <div className="overlay-container" style={{ right: 16, top: 16, bottom: 'unset' }} id="description-container">
            <div className="overlay-text" ref={textRef}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '1em',
                    alignItems: 'flex-end'
                }}>
                    <div>
                        {description.title.toLocaleUpperCase()}
                    </div>

                    <div style={{
                        marginTop: '0.5em',
                        marginBottom: '0.5em'
                    }}>
                        {description.tags.map(t => {
                            return (
                                <span style={{
                                    border: '1px solid white',
                                    padding: '0.125em 0.5em',
                                    marginLeft: '0.5em',
                                    borderRadius: '1em',
                                }}>{t}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}