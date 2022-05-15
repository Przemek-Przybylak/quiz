import {Title} from "../../Title";
import {useDispatch, useSelector} from "react-redux";
import {fetchWords, selectRandomWords} from "../gameSlice";
import {useEffect} from "react";
import {Wrapper} from "./styled";


export const GameBox = () => {
    const words = useSelector(selectRandomWords);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWords());
    }, []);
    return (
        <>
            <Title contentTitle={"Select something"}/>
            {words !== undefined &&
                <Wrapper>
                    <div>
                        {words.question}
                    </div>
                    <div>
                        {words.all_words}
                    </div>
                    <div>
                        {words.qood_words}
                    </div>
                </Wrapper>}
            gamebox
        </>
    )
};