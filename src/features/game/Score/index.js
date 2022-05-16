import {Title} from "../../../common/Title";
import {useSelector} from "react-redux";
import {selectPerson, selectPoints} from "../gameSlice";

export const Score = () => {
    const name = useSelector(selectPerson)
    const points = useSelector(selectPoints)

    return(<>
        <Title contentTitle={`Congratulations, ${name}!`} finish={true}/>
        <Title contentTitle={"Your score:"} finish={true}/>
            <Title contentTitle={points} score={true}/>
        </>
    )
};