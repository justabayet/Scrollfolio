import { useEffect, useRef } from "react"

interface VideoProps {
    src: string
    blur?: number
}

function Video({ src, blur = 15 }: VideoProps) {
    const frontVideoRef = useRef<HTMLVideoElement>(null)
    const backVideoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (frontVideoRef.current == null || backVideoRef.current == null) return

        frontVideoRef.current.addEventListener('timeupdate', () => {
            if (frontVideoRef.current == null || backVideoRef.current == null) return
            // Adjust back video's currentTime if it drifts significantly
            if (Math.abs(frontVideoRef.current.currentTime - backVideoRef.current.currentTime) > 0.1) {
                backVideoRef.current.currentTime = frontVideoRef.current.currentTime;
            }
        });
    })
    return (
        <div style={{
            position: 'relative', height: '100%', width: '100%',
            overflow: 'hidden'
        }}>
            <video
                ref={frontVideoRef}
                autoPlay
                muted
                loop
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'scale-down',
                    position: 'absolute',
                    zIndex: 10,
                    left: '50%',
                    transform: 'translate(-50%)',
                }} >
                <source src={src} type="video/mp4" />
            </video>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 5,
                    left: '50%',
                    transform: 'translate(-50%)',
                    background: '#33333342'
                }} />

            <video
                ref={backVideoRef}
                autoPlay
                muted
                loop
                style={{
                    height: `calc(100% + ${4 * blur}px)`,
                    width: `calc(100% + ${4 * blur}px)`,
                    objectFit: 'cover',
                    filter: `blur(${blur}px)`,
                    position: 'absolute',
                    top: `-${2 * blur}px`,
                    left: `-${2 * blur}px`,
                }} >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video