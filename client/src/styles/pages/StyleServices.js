import styled from 'styled-components'


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
    min-height:95vh;
    ${props=>`
        background: url(${props.bg}) no-repeat center;
        background-size: cover;
    `}
`

const Container = styled.div`
    min-height:95vh;
`

export {Container , PlaceHolder}