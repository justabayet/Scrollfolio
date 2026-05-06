import { useQRData } from "./provider/QRProvider"
import qrPng from "/qr.png"


import { useGSAP } from "@gsap/react"
import gsap from "gsap"
gsap.registerPlugin(useGSAP)

export default function QRButton() {
    const { setShown, shown } = useQRData()


    useGSAP(() => {
        gsap.from('#qr-container', {
            opacity: 0,
            y: 50,
            ease: "ease",
            delay: 0,
            duration: 0.5,
        })
    }, [])

    return (
        <div className="overlay-container" id="qr-container" style={{
            left: 16,
            bottom: 32,
            top: 'unset',
        }}>
            <button
                onClick={() => setShown(v => !v)}
                style={{
                    zIndex: 100,
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: shown ? "zoom-out" : "zoom-in",
                    padding: 0,
                    overflow: "hidden",
                    position: "relative",
                    background: shown ? "#ffffff" : "#ffffff",
                    boxShadow: shown
                        ? "0 0 0 3px #1a1a1a, 0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.18)"
                        : "0 0 0 3px #1a1a1a, 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
                    transform: shown ? "scale(1) rotate(-8deg)" : "scale(1) rotate(0deg)",
                    transition: "all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
            >
                <img
                    src={qrPng}
                    alt="QR code"
                    style={{
                        width: "80%",
                        height: "80%",
                        objectFit: "contain",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        opacity: shown ? 0.25 : 1,
                        transition: "opacity 0.22s ease",
                    }}
                />
                {shown && (
                    <span style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "22px",
                        lineHeight: 1,
                        userSelect: "none",
                    }}>
                        ✕
                    </span>
                )}
            </button>
        </div>
    )
}