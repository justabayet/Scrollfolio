import MobileApp from './Mobile'
import DesktopApp from './Desktop'

const welcomeMessage = `
  ▲  ANTHONY BAYET
  ▼  Creative Developer | Belgium
  
  Stack: React • WebGL • Three.js
`;

console.log(
    `%c${welcomeMessage}`,
    "color: #14002d; font-weight: bold; font-family: monospace;"
);

function App() {
    const isMobile = true

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
