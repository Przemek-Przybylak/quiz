import {useState} from "react";
import {Form, InputBox} from "./styled";
import {Button} from "../Button";

export const Input = () => {
    const [name, setName] = useState("");

    const onChange = ({target}) => {
        setName(target.value)
    }

    return (
        <Form>
            <InputBox
                value={name}
                onChange={({target}) => onChange({target})}
                placeholder={"Enter your nickname here..."}
            />
            <Button/>
        </Form>
    )
}