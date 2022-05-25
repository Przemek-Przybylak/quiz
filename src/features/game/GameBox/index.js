import {Title} from "../../../common/Title";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchWords,
    selectRandomWords
} from "../gameSlice";
import {Wrapper} from "./styled";
import {Words} from "./Words";


export const GameBox = () => {
    const dispatch = useDispatch();
    const words = useSelector(selectRandomWords);

    useEffect(() => {
        dispatch(fetchWords());
    }, [dispatch]);
    return (
        <>
            {words !== undefined &&
                <>
                    <Title contentTitle={words.question} small={true}/>
                    <Wrapper>
                        {
                            words.all_words &&
                            (words.all_words).map((currentWord) => (
                                <Words key={currentWord} currentWord={currentWord}
                                       words={words}
                                >
                                </Words>
                            ))
                        }
                    </Wrapper>
                </>
            };
        </>
    )
};