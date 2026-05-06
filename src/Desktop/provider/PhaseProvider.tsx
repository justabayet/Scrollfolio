import { createContext, type Dispatch, type SetStateAction, useContext, useMemo, useState, type PropsWithChildren } from 'react'

export type Phase = 'Loading' | 'Hovering' | 'GrabbingDown' | 'GrabbingUp' | 'Showing'

export type PhaseData = {
    phase: Phase
    setPhase: Dispatch<SetStateAction<Phase>>
}

const PhaseContext = createContext<PhaseData | undefined>(undefined)

export { PhaseContext }

export const PhaseProvider = ({ children }: PropsWithChildren) => {
    const [phase, setPhase] = useState<Phase>('Hovering')

    const data: PhaseData = useMemo(() => {
        return {
            phase, setPhase
        }
    }, [phase, setPhase])

    return (
        <PhaseContext.Provider value={data}>
            {children}
        </PhaseContext.Provider>
    )
}

export const usePhaseData = () => {
    const data = useContext(PhaseContext)
    if (!data) {
        throw new Error('usePhaseData must be used within a PhaseProvider')
    }
    return data
}
