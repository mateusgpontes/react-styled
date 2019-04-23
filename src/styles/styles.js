    import Styled from 'styled-components'

    export const Title = Styled.h1`
        color: #2225b7;
        font-family: ${props => `${props.fontFamily}, sans-serif`};
        font-size: ${props => `${props.fontSize}px`};

        span{
            font-size:20px;
        }
    `;

    export const Text = Styled.p`
        color:#000;
        font-family: 'times new roman'
    `;