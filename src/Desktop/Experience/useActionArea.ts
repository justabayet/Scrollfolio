import { useMemo } from "react"
import { Shape } from "three"

export default function useActionArea() {
    const { points } = useMemo(() => {
        const s = new Shape()

        s.moveTo(1.3, 0)

        s.bezierCurveTo(1.3, 1, 1, 1, 0.7, 1)

        s.bezierCurveTo(0.7, 1, 0.1, 1, 0.1, 0)
        s.bezierCurveTo(0.1, 0, 0.1, -1, 0.7, -1)

        s.bezierCurveTo(0.7, -1, 1.3, -1, 1.3, 0)

        return {
            shape: s,
            points: s.getPoints(50)
        }
    }, [])

    return points
}