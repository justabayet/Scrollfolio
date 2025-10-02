import { useState } from "react";
import { createPortal } from "react-dom";

interface ButtonUIProps {
    url: string
    src?: string
    description: string
}

const ButtonUI = ({ url, src, description }: ButtonUIProps) => {
    const [showDialog, setShowDialog] = useState(false);

    const openUrl = () => { window.open(url, '_blank') }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (description) {
            setShowDialog(true);
        } else {
            openUrl()
        }
    };

    const closeDialog = async () => {
        setShowDialog(false);
    }

    return (
        <>
            <button
                onClick={handleButtonClick}
                className='ui-button'
            >
                {src && <img src={src} width={28} height={28} />}
            </button>

            {
                createPortal(<>{showDialog && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'system-ui',
                        color: 'var(--color-accent)',
                        zIndex: 1000,
                    }} onClick={closeDialog}>
                        <div style={{
                            background: 'var(--color-primary)',
                            padding: '0.1rem 2rem 1.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            minWidth: '300px',
                            maxWidth: '80%',
                            wordWrap: 'break-word'
                        }} onClick={(event) => {
                            event.stopPropagation();
                        }}>
                            <h3>{description}</h3>

                            <div style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "end",
                                gap: "16px"
                            }}>
                                <button style={{
                                    background: "var(--color-primary)",
                                    color: "var(--color-accent)",
                                    border: "2px solid var(--color-accent)"
                                }} onClick={closeDialog}>
                                    Cancel
                                </button>

                                <button style={{
                                    background: "var(--color-accent)",
                                    color: "var(--color-primary)",
                                }} onClick={openUrl}>
                                    Open
                                </button>
                            </div>
                        </div>
                    </div>
                )}</>, document.body)
            }
        </>
    )

}

export default ButtonUI