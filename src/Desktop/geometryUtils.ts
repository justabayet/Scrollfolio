import { Vector2 } from "three";


export function isInsideOrClosest(point: Vector2, vs: Vector2[]): {
    inside: true;
    closestPoint: null;
} | {
    inside: false;
    closestPoint: Vector2;
} {
    // --- Point-in-polygon (ray casting) ---
    const x = point.x, y = point.y
    let inside = false
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        const xi = vs[i].x, yi = vs[i].y
        const xj = vs[j].x, yj = vs[j].y
        const intersect = ((yi > y) !== (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
        if (intersect) inside = !inside
    }

    if (inside) return { inside: true, closestPoint: null }

    // --- Closest point on polygon boundary ---
    let minDist = Infinity
    let closestPoint = new Vector2()

    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        const a = vs[j]  // segment start
        const b = vs[i]  // segment end

        const ab = new Vector2().subVectors(b, a)
        const ap = new Vector2().subVectors(point, a)

        // Project point onto segment, clamped to [0, 1]
        const t = Math.max(0, Math.min(1, ap.dot(ab) / ab.dot(ab)))

        const projection = new Vector2(
            a.x + t * ab.x,
            a.y + t * ab.y
        )

        const dist = point.distanceTo(projection)
        if (dist < minDist) {
            minDist = dist
            closestPoint = projection
        }
    }

    return { inside: false, closestPoint }
}