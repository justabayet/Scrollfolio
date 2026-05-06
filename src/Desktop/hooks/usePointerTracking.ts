import { useCallback } from "react"
import { Vector2 } from "three"

export const pointer = new Vector2()

export default function usePointerTracking() {
    const onPointerMove = useCallback((e: React.PointerEvent) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
    }, [])

    return onPointerMove
}