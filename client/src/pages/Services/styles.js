import styled from 'styled-components'
import {Link} from '@reach/router'
///setting the height
const windowWidth = window.innerWidth

var defaultVh = 684
if (windowWidth > 350 && windowWidth < 1701) {
    defaultVh = 784
} else if (windowWidth > 1700) {
    defaultVh = window.innerHeight
}

var vh = defaultVh * 0.01
///

const PlaceHolder = styled.div`
    height:95vh;
    ${props=>`
        background: url(${props.bg}) no-repeat center;
        background-size: cover;
    `}
`

const Container = styled.div`
    height:${95*vh}px;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    @media only screen and (min-width: 993px) {
        flex-direction:row;
            min-height:95vh;

    }

    @media only screen and (min-width: 1701px) {
        flex-direction:column;
            min-height:95vh;

    }
`
const OptionBox = styled(Link)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:${28.5*vh}px;
    background: ${props=>`url(${props.bg}) no-repeat center`};
    background-size:cover;
    border: 3px solid rgba(0,0,0,1);
    transition: .5s all ease;
    padding:${1*vh}px;
    border-radius: 5px;
    &:hover{
        border-color: rgba(255,255,255,1);
        transform: scale(1.05); 
        cursor:pointer;
        text-decoration:none;
    }
    @media only screen and (min-width: 993px) {
        width:30%;
        height:70%;
    }
    @media only screen and (min-width: 1701px) {

        width:100%;
        height:30%;
    }
`
const Title = styled.div`
    font-size:${4*vh}px;
    margin-bottom:${1*vh}px;
    font-weight:bold;
    padding:0 2%;
    border-radius: 5px;
    ${props=>`
        color: ${props.color};
        background: ${props.bgcolor}; 
    `}
`
const SubTitle = styled.div`
    font-weight:400;
    font-size:${2 * vh}px;
    text-align:center;
    padding:0 2%;
    border-radius: 5px;

    ${props => `
        color: ${props.color};
        background: ${props.bgcolor}; 
    `}

`

export { Container, PlaceHolder, OptionBox, Title, SubTitle}