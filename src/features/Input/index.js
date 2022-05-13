import {useState} from "react";
import {Form, InputBox} from "./styled";
import {Button} from "../Button";
import {useDispatch} from "react-redux";
import {addPerson} from "../../common/person/personSlice";

export const Input = () => {
    const [name, setName] = useState("");
    const dispatch =useDispatch();

    const onChange = ({target}) => {
        setName(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addPerson(name))

    }

    return (
        <Form onSubmit={onSubmit}>
            <InputBox
                value={name}
                onChange={({target}) => onChange({target})}
                placeholder={"Enter your nickname here..."}
            />
            <Button/>
        </Form>
    )
}