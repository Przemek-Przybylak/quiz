import {InputField} from "./styled";
import {addPerson} from "../gameSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";


export const Input = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const onChange = ({target}) => {
        setName(target.value);
        dispatch(addPerson(name));
    };

    return (
        <InputField
            value={name}
            onChange={({target}) => onChange({target})}
            placeholder={"Enter your nickname here..."}
        />
    )
};