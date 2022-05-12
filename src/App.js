import {Container} from "./features/Container";
import {Title} from "./features/Title";
import {GlobalStyles} from "./GlobalStyles";
import {Input} from "./features/Input";

function App() {
    return (
        <div className="App">
            <GlobalStyles/>
            <Container>
                <Title contentTitle={"Wordcloud game"}/>
                <Input/>
                <div>appp</div>
            </Container>
        </div>
    );
}

export default App;
