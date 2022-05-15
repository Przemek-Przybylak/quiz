import {Container} from "./features/Container";
import {GlobalStyles} from "./GlobalStyles";
import {Game} from "./features/game/Game";

function App() {

    return (
        <div className="App">
            <GlobalStyles/>
            <Container>
                <Game/>
            </Container>
        </div>
    );
};

export default App;
