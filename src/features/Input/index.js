import {useState} from "react";
import {useDispatch} from "react-redux";
import {Form, InputBox} from "./styled";
import {Button} from "../Button";
import {addPerson} from "../game/gameSlice";

export const Input = ({disabled}) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const answer = "answer";

    const onChange = ({target}) => {
        setName(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addPerson(name))
    }

    return (<>
        <Form onSubmit={onSubmit} hidden={disabled}>
            <InputBox
                value={name}
                onChange={({target}) => onChange({target})}
                placeholder={"Enter your nickname here..."}
            />
            <Button state={answer}/>
        </Form>
    </>)
}