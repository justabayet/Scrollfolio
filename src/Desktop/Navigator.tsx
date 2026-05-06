import { useCallback } from "react"
import { MathUtils } from "three"
import Button from "./Button"
import { PHONE_HEIGHT } from "./const"
import { useScrollData } from "./provider/ScrollProvider"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
gsap.registerPlugin(useGSAP)

export default function Navigator() {
    useGSAP(() => {
        gsap.from('#nav-container', {
            opacity: 0,
            x: 50,
            ease: "ease",
            delay: 0,
            duration: 0.5,
        })
    }, [])

    const { scrollState } = useScrollData()

    const handleNext = useCallback(() => {
        const pageIndex = Math.round((scrollState.current.target + PHONE_HEIGHT) / PHONE_HEIGHT)
        scrollState.current.target = MathUtils.clamp(
            pageIndex * PHONE_HEIGHT,
            0,
            scrollState.current.max
        )
    }, [scrollState])

    const handlePrev = useCallback(() => {
        const pageIndex = Math.round((scrollState.current.target - PHONE_HEIGHT) / PHONE_HEIGHT)
        scrollState.current.target = MathUtils.clamp(
            pageIndex * PHONE_HEIGHT,
            0,
            scrollState.current.max
        )
    }, [scrollState])

    return (
        <div className="overlay-container" id="nav-container" style={{
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)'
        }}>
            <Button onClick={handlePrev}>⬆</Button>
            <Button onClick={handleNext}>⬇</Button>
        </div>
    )
}