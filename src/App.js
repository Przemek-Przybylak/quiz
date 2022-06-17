import {Container} from "./features/Container";
import {GlobalStyles} from "./GlobalStyles";
import {Input} from "./features/game/Input";

function App() {

    return (
        <div className="App">
            <GlobalStyles/>
            <Container>
            <Input />
            </Container>
        </div>
    );
}

export default App;
