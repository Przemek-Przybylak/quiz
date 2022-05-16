import {Wrapper} from "./styled";

export const Title = ({contentTitle, small, finish, score}) => {

    return (
        <>
            {
                finish ? (
                        <Wrapper finish={true}>
                            {contentTitle}
                        </Wrapper>
                    ) :
                    small ? (
                            <Wrapper small={true}>
                                {contentTitle}
                            </Wrapper>
                        ) :
                        score ? (

                            <Wrapper score={true}>
                                {contentTitle !== 1 ? `${contentTitle} points` : `${contentTitle} point`}
                            </Wrapper>
                        ) : (
                            <Wrapper>
                                {contentTitle}
                            </Wrapper>
                        )
            }
        </>
    )
};