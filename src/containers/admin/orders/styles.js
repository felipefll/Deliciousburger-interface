import ReactSelect from 'react-select'
import styled from 'styled-components'

import Background from '../../../assets/background.png'

export const Container = styled.div`
    background: #efefef;
    min-height: 100vh;
    background: #FFFFFF url('${Background}') no-repeat right top fixed;
    padding: 20px;
`
export const ProductImg = styled.img`
    width: 60px;
    border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;

.css-13cymwt-control{
    cursor: pointer;
.css-1xc3v61-indicatorContainer{
    background-color: #FBAF30;
    color: black;
}    
}
`
export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
    background-color: #efefef;
    height: 35px;
    border-radius: 3px;
    
`
export const LinkMenu = styled.a`
margin-top: 4px;
cursor: pointer;
font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
border-bottom: ${props => (props.isActiveStatus ? '3px solid #FBAF30' : 'none')};
margin-bottom: 6px;
`
