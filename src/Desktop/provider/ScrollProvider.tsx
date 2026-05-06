import { createContext, type RefObject, useContext, useMemo, useRef, type PropsWithChildren } from 'react'
import { NB_PAGES, PHONE_HEIGHT } from '../const'

interface ScrollState {
    current: number
    target: number
    max: number
    isDragging: boolean
    startY: number
    startScroll: number
}

export type ScrollData = {
    scrollState: RefObject<ScrollState>
}

const ScrollContext = createContext<ScrollData | undefined>(undefined)

export { ScrollContext }

export const ScrollProvider = ({ children }: PropsWithChildren) => {
    const scrollState = useRef({
        current: 0,
        target: 0,
        max: PHONE_HEIGHT * NB_PAGES,
        isDragging: false,
        startY: 0,
        startScroll: 0
    })


    const data: ScrollData = useMemo(() => {
        return {
            scrollState
        }
    }, [scrollState])

    return (
        <ScrollContext.Provider value={data}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScrollData = () => {
    const data = useContext(ScrollContext)
    if (!data) {
        throw new Error('useScrollData must be used within a ScrollProvider')
    }
    return data
}
