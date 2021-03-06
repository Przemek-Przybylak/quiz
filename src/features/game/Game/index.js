import {useDispatch, useSelector} from "react-redux";
import {Form} from "./styled";
import {Button} from "../../../common/Button";
import {selectStatus, setApplicationStatus} from "../gameSlice";
import {UseSettingCurrentState} from "../../../common/UseSettingCurrentState";
import {Title} from "../../../common/Title";
import {Input} from "../Input";
import {GameBox} from "../GameBox";
import {Score} from "../Score";

export const Game = () => {
    const dispatch = useDispatch();
    const newStatus = UseSettingCurrentState();
    const status = useSelector(selectStatus)

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(setApplicationStatus(newStatus));
    };

    return (
        <>
            {
                status === "initial" ? (
                        <Form onSubmit={onSubmit}>
                            <Title contentTitle={"Wordcloud game"}/>
                            <Input/>
                            <Button title={"play"}/>
                        </Form>
                    ) :
                    status === "answer" ? (<>
                                <GameBox/>
                                <Button title={"check answer"} click={true}/>
                            </>
                        ) :
                        status === "checkAnswers" ? (<>
                                    <GameBox/>
                                    <Button title={"finish game"} click={true}/>
                                </>
                            ) :
                            status === "finishGame" ? (
                                <Score/>
                            ) : (
                                <div>error</div>
                            )
            }
        </>
    )
};