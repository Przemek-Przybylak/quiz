import {useSelector} from "react-redux";
import {selectStatus} from "../gameSlice";
import {Input} from "../../Input";

export const Game = () => {
    const status = useSelector(selectStatus);

    return (
        <>
            <>
                {status}
                {
                    status == "answer" ? (
                            <Input disabled={true} >
                            </Input>
                        ) :
                        status == "initial" ? (
                                <Input />
                        ) :
                            (
                                <div> error</div>
                            )
                }
            </>
        </>
    )
}