import {useDispatch} from "react-redux";
import {Toggler, TogglerWrapper} from "./styled";
import {setApplicationStatus} from "../../features/game/gameSlice";
import {UseSettingCurrentState} from "../UseSettingCurrentState";

export const Button = ({title, click}) => {
    const dispatch = useDispatch();
    const newStatus = UseSettingCurrentState();
    const onClick = () => {
        dispatch(setApplicationStatus(newStatus))
    }

    return (
        <TogglerWrapper>
            {
                click === true ?
                    <Toggler onClick={onClick}>
                        {title}
                    </Toggler> :
                    <Toggler>
                        {title}
                    </Toggler>
            }
        </TogglerWrapper>
    )
};