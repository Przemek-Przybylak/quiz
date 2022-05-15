import {useDispatch, useSelector} from "react-redux";
import {Toggler, TogglerWrapper} from "./styled";
import {selectStatus, setApplicationStatus} from "../../features/game/gameSlice";
import {UseSettingCurrentState} from "../UseSettingCurrentState";

export const Button = ({click}) => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus)
    const newStatus = UseSettingCurrentState();
    const onClick = () => {
        dispatch(setApplicationStatus(newStatus))
    }

    return (
        <TogglerWrapper>
            {
                click == true ?
                    <Toggler onClick={onClick}>
                        {
                            status == "initial" ? (
                                    "play"
                                ) :
                                status == "answer" ? (
                                        "check answer"
                                    ) :
                                    (
                                        "finish game"
                                    )
                        }
                    </Toggler> :
                    <Toggler>
                        {
                            status == "initial" ? (
                                    "play"
                                ) :
                                status == "answer" ? (
                                        "check answer"
                                    ) :
                                    (
                                        "finish game"
                                    )
                        }
                    </Toggler>
            }
        </TogglerWrapper>
    )
}