import {Wrapper} from "./styled";

export const Container = ({children}) => {

    const onResize = () => {
        let innerWindowHeight = window.innerHeight;
        document.documentElement.style.setProperty('--innerWindowHeight', `${innerWindowHeight}px`);
    };

    onResize();

    return (
        <Wrapper onResize={onResize}>
            {children}
        </Wrapper>
    )
};
