import { Html } from "@react-three/drei"
import { useRef } from "react"
import { MathUtils } from "three"
import { PHONE_HEIGHT, PHONE_WIDTH } from "../const"
import PortfolioWeb from "../Portfolio"
import { useScrollData } from "../provider/ScrollProvider"
import { useFrame } from "@react-three/fiber"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { usePageNumberData } from "../provider/PageNumberProvider"
import { usePhaseData } from "../provider/PhaseProvider"
gsap.registerPlugin(useGSAP)


export default function PhoneScreen() {
    const scrollableDivRef = useRef<HTMLDivElement>(null)
    const interactableRef = useRef<HTMLDivElement>(null)

    const { scrollState } = useScrollData()
    const { setPageNumber } = usePageNumberData()
    const { phase } = usePhaseData()

    useFrame((_, delta) => {
        if (!scrollableDivRef.current || !interactableRef.current) return

        scrollState.current.current = MathUtils.damp(
            scrollState.current.current,
            scrollState.current.target,
            4,
            delta
        )

        setPageNumber(Math.round(scrollState.current.current / PHONE_HEIGHT))

        scrollableDivRef.current.scrollTop = scrollState.current.current

        interactableRef.current.style.cursor = scrollState.current.isDragging ? 'grabbing' : 'grab'
    })

    const clickState = useRef({
        downTime: 0,
        startX: 0,
        startY: 0
    })

    const onClick = () => { }

    const onPointerDown = (e: React.PointerEvent) => {
        scrollState.current.isDragging = true
        scrollState.current.startY = e.clientY
        scrollState.current.startScroll = scrollState.current.target
            // Capture pointer to keep dragging even if mouse leaves div
            ; (e.target as HTMLElement).setPointerCapture(e.pointerId)

        clickState.current.downTime = Date.now()
        clickState.current.startX = e.clientX
        clickState.current.startY = e.clientY
    }

    const onPointerMove = (e: React.PointerEvent) => {
        if (!scrollState.current.isDragging) return
        const deltaY = (scrollState.current.startY - e.clientY) * 1.5 // Multiplier for drag speed
        scrollState.current.target = MathUtils.clamp(
            scrollState.current.startScroll + deltaY,
            0,
            scrollState.current.max
        )
    }

    const onStopDragging = () => {
        if (scrollState.current.isDragging) {
            const pageIndex = Math.round(scrollState.current.target / PHONE_HEIGHT)
            scrollState.current.target = MathUtils.clamp(
                pageIndex * PHONE_HEIGHT,
                0,
                scrollState.current.max
            )
        }
        scrollState.current.isDragging = false
    }

    const isClickValid = (e: React.PointerEvent) => {
        const timeThreshold = 500
        const timeDelta = Date.now() - clickState.current.downTime
        const isTimeShort = timeDelta < timeThreshold

        const movementThreshold = 100
        const movementX = Math.abs(clickState.current.startX - e.clientX)
        const movementY = Math.abs(clickState.current.startY - e.clientY)
        const hasMoved = movementX + movementY > movementThreshold

        return isTimeShort && !hasMoved
    }

    const onPointerUp = (e: React.PointerEvent) => {
        onStopDragging()


        if (isClickValid(e)) onClick()
    }

    const onPointerOut = onStopDragging

    const isVisible = phase != 'Loading' && phase != 'Hovering'

    useGSAP(() => {
        if (!interactableRef.current) return

        gsap.to(interactableRef.current.style, {
            opacity: isVisible ? 1 : 0,
            duration: 1,
            delay: 0.5
        })
    }, [isVisible])

    return (
        <Html
            occlude="blending"
            position-y={-0.09}
            rotation-x={Math.PI / 2}
            transform
            distanceFactor={2.5}
            scale-y={0.97}>
            <div
                ref={interactableRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerOut={onPointerOut}
                style={{
                    overflow: 'hidden',
                    touchAction: 'none',
                    scrollbarWidth: 'none',
                    height: `${PHONE_HEIGHT}px`,
                    width: `${PHONE_WIDTH}px`,
                    borderRadius: '20px',
                    cursor: 'grab',
                    pointerEvents: isVisible ? 'auto' : 'none',
                    opacity: 0
                }}>

                <div ref={scrollableDivRef}
                    style={{
                        overflow: "scroll",
                        height: "100%",
                        width: '100%',
                        scrollbarWidth: "none",
                        backgroundColor: 'red',
                        pointerEvents: 'none'
                    }}>
                    <PortfolioWeb />
                </div>
            </div>
        </Html>
    )
}