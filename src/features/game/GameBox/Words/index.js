import {useState} from "react";
import {useSelector} from "react-redux";
import {Word, WordsWrapper} from "../styled";
import {selectStatus} from "../../gameSlice";

export const Words = ({currentWord, words}) => {
    const status = useSelector(selectStatus);
    const [answerStatus, setAnswerStatus] = useState();
    const goodWords = words.good_words;

    const onClick = () => {
        if (goodWords.includes(currentWord)) {
            setAnswerStatus(true);
        } else setAnswerStatus(false)
    }

    return (
        <WordsWrapper onClick={onClick}>
            {
                status == "checkAnswers" && answerStatus == false ? (<Word bad>bad</Word>
                    ) :
                    status == "checkAnswers" && answerStatus == true ? (<Word good>good</Word>
                    ) : (
                        <Word></Word>
                    )
            }
            <Word>{currentWord}</Word>
        </WordsWrapper>
    )
};