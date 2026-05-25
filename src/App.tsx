import { lazy } from 'react'
import useWindowSize from './useWindowSize'

const MobileApp = lazy(() => import('./Mobile'))
const DesktopApp = lazy(() => import('./Desktop'))

const welcomeMessage = `
  ▲  ANTHONY BAYET
  ▼  Creative Developer | Belgium
  
  Stack: React • WebGL • Three.js
`

console.log(
    `%c${welcomeMessage}`,
    "color: #14002d; font-weight: bold; font-family: monospace;"
)

function App() {
    const size = useWindowSize()
    const isMobile = size.width < 768

    if (isMobile) {
        return (
            <MobileApp />
        )
    } else {
        return (
            <DesktopApp />
        )
    }

}

export default App
