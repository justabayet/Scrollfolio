import { useRef } from "react"

interface VideoProps {
    src: string
    blur?: number
}

function Video({ src, blur = 15 }: VideoProps) {
    const frontVideoRef = useRef<HTMLVideoElement>(null)
    let posterSrc = src.slice(0, -3) + 'webp'
    posterSrc = posterSrc.replace("/videos/", "/thumbnails/")

    return (
        <div style={{
            position: 'relative', height: '100%', width: '100%',
            overflow: 'hidden'
        }}>
            {/* Front Video */}
            <video
                ref={frontVideoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={posterSrc}
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

            {/* Shadow Panel */}
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

            {/* Background */}
            <img
                src={posterSrc}
                style={{
                    height: `calc(100% + ${4 * blur}px)`,
                    width: `calc(100% + ${4 * blur}px)`,
                    objectFit: 'cover',
                    filter: `blur(${blur}px)`,
                    position: 'absolute',
                    top: `-${2 * blur}px`,
                    left: `-${2 * blur}px`,
                }}>

            </img>
        </div>
    )
}

export default Video