import {Wrapper} from "./styled";
import {useSelector} from "react-redux";
import {selectPerson} from "../../common/person/personSlice";

export const Title = ({contentTitle}) => {
const person = useSelector(selectPerson);

    return (
        <Wrapper>
            {contentTitle}
        </Wrapper>
    )
}