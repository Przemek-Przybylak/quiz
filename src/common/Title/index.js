import {Wrapper} from "./styled";

export const Title = ({contentTitle, small, finish, score}) => {

    return (
        <>
            <Wrapper finish={finish} small={small} score={score}>
                {score ?
                    contentTitle !== 1 ? `${contentTitle} points` : `${contentTitle} point`
                    : contentTitle}
            </Wrapper>
        </>
    )
};