import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { NB_PAGES } from "./const"
import { usePageNumberData } from "./provider/PageNumberProvider"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)

export default function Counter() {
    const { pageNumber } = usePageNumberData()
    const numRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = numRef.current
        if (!el) return

        gsap.fromTo(el,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
        )
    }, [pageNumber])

    useGSAP(() => {
        gsap.from('#counter-container', {
            opacity: 0,
            y: 50,
            ease: "ease",
            delay: 0,
            duration: 0.5,
        })
    }, [])

    return (
        <div className="overlay-container" style={{ right: 16, bottom: 16, top: 'unset' }} id="counter-container">
            <div className="overlay-text">
                <span ref={numRef} style={{ display: "inline-block" }}>{pageNumber + 1}</span>/{NB_PAGES + 1}
            </div>
        </div>
    )
}