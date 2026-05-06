import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useCallback } from "react"
gsap.registerPlugin(useGSAP)

export default function Title() {

    const openLinkedin = useCallback(() => {
        window.open("https://www.linkedin.com/in/anthony-bayet", "_blank")
    }, [])


    useGSAP(() => {
        gsap.from('#name', {
            opacity: 0,
            y: -50,
            ease: "ease",
            delay: 0,
            duration: 0.5,
        })
    }, [])

    return (
        <div className="overlay-container" onClick={openLinkedin} style={{ cursor: 'pointer', left: 16, top: 16 }}>
            <div className={`overlay-text`} id="name">ANTHONY BAYET</div>
        </div>
    )
}