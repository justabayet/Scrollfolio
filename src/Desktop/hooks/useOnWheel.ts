import { useCallback } from "react"
import { MathUtils } from "three"
import { PHONE_HEIGHT } from "../const"
import { useScrollData } from "../provider/ScrollProvider"

let timeoutId: number | undefined

export default function useOnWheel() {

    const { scrollState } = useScrollData()

    const onWheel = useCallback((e: React.WheelEvent) => {
        scrollState.current.target = MathUtils.clamp(
            scrollState.current.target + e.deltaY,
            0,
            scrollState.current.max
        )

        if (timeoutId != null) clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            const pageIndex = Math.round((scrollState.current.target) / PHONE_HEIGHT)
            scrollState.current.target = MathUtils.clamp(
                pageIndex * PHONE_HEIGHT,
                0,
                scrollState.current.max
            )
        }, 150)
    }, [])

    return onWheel
}