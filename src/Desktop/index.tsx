import { ScrollProvider } from './provider/ScrollProvider'
import { PageNumberProvider } from './provider/PageNumberProvider'
import { PhaseProvider } from './provider/PhaseProvider'
import { QRProvider } from './provider/QRProvider'
import App from './App'

function DesktopApp() {
    return (
        <PhaseProvider>
            <PageNumberProvider>
                <ScrollProvider>
                    <QRProvider>
                        <App />
                    </QRProvider>
                </ScrollProvider>
            </PageNumberProvider>
        </PhaseProvider>
    )
}

export default DesktopApp