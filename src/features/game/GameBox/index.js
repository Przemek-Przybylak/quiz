import {Title} from "../../Title";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchWords,
    selectRandomWords
} from "../gameSlice";
import {useEffect} from "react";
import {Wrapper} from "./styled";
import {Words} from "./Words";


export const GameBox = () => {
    const dispatch = useDispatch();
    const words = useSelector(selectRandomWords);

    useEffect(() => {
        dispatch(fetchWords());
    }, []);
    return (
        <>
            {words !== undefined &&
                <>
                    <Title contentTitle={words.question}/>
                    <Wrapper>
                        {
                            words.all_words &&
                            (words.all_words).map((currentWord) => (
                                <Words currentWord={currentWord}
                                       words={words}
                                >
                                </Words>
                            ))
                        }
                    </Wrapper>
                </>
            }
        </>
    )
};