import {useState} from "react";
import {useDispatch} from "react-redux";
import {Form, InputBox} from "./styled";
import {Button} from "../../../common/Button";
import {addPerson, setApplicationStatus} from "../gameSlice";
import {UseSettingCurrentState} from "../../../common/UseSettingCurrentState";
import {Title} from "../../../common/Title";

export const Input = ({disabled}) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const newStatus = UseSettingCurrentState();

    const onChange = ({target}) => {
        setName(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addPerson(name));
        dispatch(setApplicationStatus(newStatus));
    };

    return (<>
        <Form onSubmit={onSubmit} hidden={disabled}>
            <Title contentTitle={"Wordcloud game"}/>
            <InputBox
                value={name}
                onChange={({target}) => onChange({target})}
                placeholder={"Enter your nickname here..."}
            />
            <Button title={"play"}/>
        </Form>
    </>)
};