import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Word, WordsWrapper} from "../styled";
import {addPoint, selectStatus} from "../../gameSlice";

export const Words = ({currentWord, words}) => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const [answerStatus, setAnswerStatus] = useState();
    const goodWords = words.good_words;

    const onClick = () => {
        if (goodWords.includes(currentWord)) {
            setAnswerStatus(true);
            dispatch(addPoint());
        } else setAnswerStatus(false)
    };

    return (
        <WordsWrapper onClick={onClick}>
            {
                status === "checkAnswers" && answerStatus === false ? (<Word bad>Bad</Word>
                    ) :
                    status === "checkAnswers" && answerStatus === true ? (<Word good>Good</Word>
                    ) : (
                        <Word></Word>
                    )
            }
            {
                status === "checkAnswers" && answerStatus === false ? (<Word bad>{currentWord}</Word>
                    ) :
                    status === "checkAnswers" && answerStatus === true ? (<Word good>{currentWord}</Word>
                    ) : (
                        <Word>{currentWord}</Word>
                    )
            }
        </WordsWrapper>
    )
};