import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState, type PropsWithChildren } from 'react'

export type QRData = {
    shown: boolean
    setShown: Dispatch<SetStateAction<boolean>>
}

const QRContext = createContext<QRData | undefined>(undefined)

export { QRContext }

export const QRProvider = ({ children }: PropsWithChildren) => {
    const [shown, setShown] = useState(false)


    const data: QRData = useMemo(() => {
        return {
            shown, setShown
        }
    }, [shown, setShown])

    return (
        <QRContext.Provider value={data}>
            {children}
        </QRContext.Provider>
    )
}

export const useQRData = () => {
    const data = useContext(QRContext)
    if (!data) {
        throw new Error('useQRData must be used within a QRProvider')
    }
    return data
}
