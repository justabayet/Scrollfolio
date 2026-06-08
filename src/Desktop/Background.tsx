import { useEffect, useRef } from "react"

const HUE_EFFECT = 30

export function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: -1000, y: -1000 })
    const posRef = useRef({ x: -1000, y: -1000 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")!
        let animFrameId: number

        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
        resize()
        window.addEventListener("resize", resize)
        window.addEventListener("mousemove", (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } })

        // Static grain texture
        const grain = document.createElement("canvas")
        grain.width = grain.height = 256
        const gCtx = grain.getContext("2d")!
        const img = gCtx.createImageData(256, 256)
        for (let i = 0; i < img.data.length; i += 4) {
            const v = Math.random() * 255
            img.data[i] = img.data[i + 1] = img.data[i + 2] = v
            img.data[i + 3] = Math.random() * 20
        }
        gCtx.putImageData(img, 0, 0)

        const trail: { x: number; y: number }[] = []

        const draw = () => {
            const p = posRef.current
            const m = mouseRef.current
            const mouseGittered = {
                x: m.x + (Math.random() - 0.5) * 50,
                y: m.y + (Math.random() - 0.5) * 50
            }
            p.x += (mouseGittered.x - p.x) * 0.08
            p.y += (mouseGittered.y - p.y) * 0.08

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            trail.push({ x: p.x, y: p.y })
            if (trail.length > 16) trail.shift()

            trail.forEach((pt, i) => {
                const t = i / trail.length
                const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 40 + t * 80)
                g.addColorStop(0, `rgba(${HUE_EFFECT},${HUE_EFFECT},${HUE_EFFECT},${t * 12})`)
                g.addColorStop(1, `rgba(${HUE_EFFECT},${HUE_EFFECT},${HUE_EFFECT},0)`)
                ctx.beginPath()
                ctx.arc(pt.x, pt.y, 40 + t * 80, 0, Math.PI * 2)
                ctx.fillStyle = g
                ctx.fill()
            })

            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 120)
            g.addColorStop(0, `rgba(${HUE_EFFECT}, ${HUE_EFFECT}, ${HUE_EFFECT}, 0.01)`)
            g.addColorStop(1, `rgba(${HUE_EFFECT},${HUE_EFFECT},${HUE_EFFECT},0)`)
            ctx.beginPath()
            ctx.arc(p.x, p.y, 120, 0, Math.PI * 2)
            ctx.fillStyle = g
            ctx.fill()

            ctx.fillStyle = ctx.createPattern(grain, "repeat")!
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            animFrameId = requestAnimationFrame(draw)
        }

        animFrameId = requestAnimationFrame(draw)
        return () => { cancelAnimationFrame(animFrameId); window.removeEventListener("resize", resize) }
    }, [])

    return <canvas ref={canvasRef} style={{ position: "absolute", width: "100vw", height: "100vh", display: "block" }} />
}