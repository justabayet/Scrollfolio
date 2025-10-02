interface ButtonUIProps {
    url: string,
    src?: string
}

const ButtonUI = ({ url, src }: ButtonUIProps) => {
    return (
        <button
            onClick={() => { window.open(url, '_blank') }}
            className='ui-button'
        >
            {src && <img src={src} width={28} height={28} />}
        </button>
    )

}

export default ButtonUI