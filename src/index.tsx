import { createRoot } from 'react-dom/client'
import { DivContainer } from './style/styledComponents'
import Component from './components/Component';

export interface FilmsInterface {
    name: string;
    link: string;
    key?: any;
}
const films: FilmsInterface[] = [
    {
        name: "Harry Potter",
        link: "https://assetsio.reedpopcdn.com/Potter_Ekranizacja_Headline.jpg?width=690&quality=75&format=jpg&auto=webp"
    },
    {
        name: "Terminator",
        link: "http://kulturacja.pl/wp-content/uploads/2019/11/terminator-800x445.jpg"
    },
    {
        name: "Silence of the lambs",
        link: "https://savethecat.com/wp-content/uploads/2017/05/silence-of-the-lambs-logo-768x480.jpg"
    }
]





const App = () => {
    return (
        <DivContainer>
           {films.map((film : FilmsInterface) =>{
           return (
            <Component key={film.name} {...film} />
           )})} 
        </DivContainer>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)