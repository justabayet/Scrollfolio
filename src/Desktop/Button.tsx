import { type ButtonHTMLAttributes, type DetailedHTMLProps, type PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClick?: () => void
}
export default function Button({ onClick, children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            style={{
                height: '64px',
                width: '64px',
                borderRadius: '50%',
                boxShadow: "0 0 0 3px #1a1a1a, 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
                border: "none",
                padding: 0,
                fontSize: '22px',
                cursor: 'pointer',
                ...props.style
            }}
            onClick={onClick}>
            {children}
        </button>
    )
}