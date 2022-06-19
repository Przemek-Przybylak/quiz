import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Word, WordsWrapper} from "../styled";
import {addClickedWord, addPoint, selectClickedWords, selectStatus} from "../../gameSlice";

export const Words = ({currentWord, words}) => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const clickedWords = useSelector(selectClickedWords);
    const [result, setResult] = useState();
    const goodWords = words.good_words;

    const onClick = () => {
        dispatch(addClickedWord(currentWord))
        if (goodWords.includes(currentWord)) {
            setResult(true);
            dispatch(addPoint());
        } else setResult(false)
    };

    return (
        <WordsWrapper onClick={onClick}>
            {
                status === "checkAnswers" && result === false ? (<>
                            <Word bad>Bad</Word>
                            <Word disabled bad>{currentWord}</Word>
                        </>
                    ) :
                    status === "checkAnswers" && result === true ? (<>
                                <Word good>Good</Word>
                                <Word disabled good>{currentWord}</Word>
                            </>
                        ) :
                        status === "checkAnswers" ? (
                                <Word disabled>{currentWord}</Word>
                            ) :
                            (
                                clickedWords.includes(currentWord) ?
                                    <Word disabled>{currentWord}</Word>
                                    :
                                    <Word>{currentWord}</Word>
                            )
            }
        </WordsWrapper>
    )
};