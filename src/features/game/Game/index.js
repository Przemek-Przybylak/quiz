import {useSelector} from "react-redux";
import {selectStatus} from "../gameSlice";
import {Input} from "../../Input";
import {Button} from "../../../common/Button";
import {GameBox} from "../GameBox";

export const Game = () => {
    const status = useSelector(selectStatus);

    return (
        <>
            {
                status == "initial" ? (
                        <Input/>
                    ) :
                    status == "answer" ? (<>
                                <Input disabled={true}>
                                </Input>
                                <GameBox/>
                                <Button click={true}/>
                            </>
                        ) :
                        status == "checkAnswers" ? (<>
                                <Input disabled={true}>
                                </Input>
                                <GameBox/>
                                <Button click={true}/>
                            </>
                        ) : (
                            <div> error</div>
                        )
            }
        </>
    )
}