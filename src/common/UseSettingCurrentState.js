import {useSelector} from "react-redux";
import {selectStatus} from "../features/game/gameSlice";

const stateNames = ["answer", "checkAnswers", "finishGame"]

export const UseSettingCurrentState = () => {
    const currentStatus = useSelector(selectStatus)

    switch (currentStatus) {
        case "initial":
            return stateNames[0]

        case "answer":
            return stateNames[1]

        case "checkAnswers":
            return stateNames[2]
    }
};