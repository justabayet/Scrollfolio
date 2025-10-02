import { useRef, useState } from "react"

interface VideoProps {
    src: string
    blur?: number
}

const keyframes = `
@keyframes spin {
    0% { transform:  translate(-50%, -50%) rotate(0deg);}
    100% { transform:  translate(-50%, -50%) rotate(360deg);}
}
`;

function Video({ src, blur = 15 }: VideoProps) {
    const frontVideoRef = useRef<HTMLVideoElement>(null)
    let posterSrc = src.slice(0, -3) + 'webp'
    posterSrc = posterSrc.replace("/videos/", "/thumbnails/")

    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    const handleLoadedData = () => {
        setIsVideoLoaded(true)
        frontVideoRef.current?.play()
    }

    return (
        <div style={{
            position: 'relative', height: '100%', width: '100%',
            overflow: 'hidden'
        }}>
            <style>{keyframes}</style>
            {!isVideoLoaded &&
                <div style={{
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    zIndex: 11,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxSizing: 'border-box',
                    borderRadius: '50%',
                    animation: '1.2s cubic-bezier(0.35, 0.01, 0.67, 0.98) 0s infinite normal none running spin',
                    borderColor: 'rgb(153, 153, 153) rgb(236, 236, 236) rgb(236, 236, 236)',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                }}>
                </div>
            }
            {/* Front Video */}
            <video
                ref={frontVideoRef}
                muted
                loop
                playsInline
                onLoadedData={handleLoadedData}
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