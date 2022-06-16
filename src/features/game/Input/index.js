import {useDispatch, useSelector} from "react-redux";
import {Form} from "./styled";
import {Button} from "../../../common/Button";
import {setApplicationStatus} from "../gameSlice";
import {UseSettingCurrentState} from "../../../common/UseSettingCurrentState";
import {Title} from "../../../common/Title";
import {InputBox} from "./InputBox";

export const Input = ({disabled}) => {
    const dispatch = useDispatch();
    const newStatus = UseSettingCurrentState();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(setApplicationStatus(newStatus));
    };

    return (
        <Form onSubmit={onSubmit} hidden={disabled}>
            <Title contentTitle={"Wordcloud game"}/>
            <InputBox/>
            <Button title={"play"}/>
        </Form>
    )
};