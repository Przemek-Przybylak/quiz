import {Container} from "./features/Container";
import {Title} from "./features/Title";
import {GlobalStyles} from "./GlobalStyles";
import {Game} from "./features/game/Game";

function App() {
    const answer = "answer"
    return (
        <div className="App">
            <GlobalStyles/>
            <Container>
                <Title contentTitle={"Wordcloud game"}/>
                <Game />
            </Container>
        </div>
    );
}

export default App;
