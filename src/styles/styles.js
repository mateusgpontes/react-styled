    import Styled from 'styled-components'

    export const Title = Styled.h1`
        color: ${props => `${props.color}`};
        font-family: ${props => `${props.fontFamily}, sans-serif`};
        font-size: ${props => `${props.fontSize}px`};

        span{
            font-size: ${props => `${props.fontSize}px`};
        }
    `;

    export const Text = Styled(Title)`
        color: #d10000;
    `;