import {useSelector} from "react-redux";
import {Wrapper} from "./styled";
import {selectPerson} from "../game/gameSlice";

export const Title = ({contentTitle}) => {
    const person = useSelector(selectPerson);

    return (
        <Wrapper>
            {contentTitle}
        </Wrapper>
    )
}