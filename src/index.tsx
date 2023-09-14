import { createRoot } from 'react-dom/client'
import { DivContainer } from './style/styledComponents'

function App () {
    return (
        <DivContainer>
            
        </DivContainer>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)