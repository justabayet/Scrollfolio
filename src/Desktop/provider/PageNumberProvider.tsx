import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState, type PropsWithChildren } from 'react'

export type PageNumberData = {
    pageNumber: number
    setPageNumber: Dispatch<SetStateAction<number>>
}

const PageNumberContext = createContext<PageNumberData | undefined>(undefined)

export { PageNumberContext }

export const PageNumberProvider = ({ children }: PropsWithChildren) => {
    const [pageNumber, setPageNumber] = useState(0)


    const data: PageNumberData = useMemo(() => {
        return {
            pageNumber, setPageNumber
        }
    }, [pageNumber, setPageNumber])

    return (
        <PageNumberContext.Provider value={data}>
            {children}
        </PageNumberContext.Provider>
    )
}

export const usePageNumberData = () => {
    const data = useContext(PageNumberContext)
    if (!data) {
        throw new Error('usePageNumberData must be used within a PageNumberProvider')
    }
    return data
}
