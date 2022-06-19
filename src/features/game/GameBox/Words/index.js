import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Word, WordsWrapper} from "../styled";
import {addClickedWord, addPoint, selectClickedWords, selectStatus} from "../../gameSlice";

export const Words = ({currentWord, words}) => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const clickedWords = useSelector(selectClickedWords);
    const [answerStatus, setAnswerStatus] = useState();
    const goodWords = words.good_words;

    const onClick = () => {
        dispatch(addClickedWord(currentWord))
        if (goodWords.includes(currentWord)) {
            setAnswerStatus(true);
            dispatch(addPoint());
        } else setAnswerStatus(false)
    };

    return (
        <WordsWrapper onClick={onClick}>
            {
                status === "checkAnswers" && answerStatus === false ? (<>
                            <Word bad>Bad</Word>
                            <Word disabled bad>{currentWord}</Word>
                        </>
                    ) :
                    status === "checkAnswers" && answerStatus === true ? (<>
                            <Word good>Good</Word>
                            <Word disabled good>{currentWord}</Word>
                        </>
                    ) : (
                        clickedWords.includes(currentWord) ?
                            <>
                            <Word></Word>
                            <Word disabled>{currentWord}</Word>
                            </>
                            :
                            <>
                                <Word></Word>
                                <Word>{currentWord}</Word>
                            </>
                    )
            }
        </WordsWrapper>
    )
}