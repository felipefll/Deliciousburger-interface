import styled from 'styled-components'

import Background from '../../assets/background.png'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${Background}');
display: flex;
justify-content: center;
align-items: center;
`

export const RegisterImage = styled.img`
height: 70%;
`

export const ContainerItens = styled.div`
background: #312C30;
border-radius: 0 10px 10px 0;
height: 70%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

form {
    display: flex;
    flex-direction: column;
}


h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 5px;
}

img {
    height: 30%;
    width: 75%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 25px;
    align-items: center;
    margin: 0  auto;
    
    
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 25px;
color: #FFFFFF;
margin-top: ${props => (props.error ? '12px' : '28px')};
margin-bottom: 5px;
`

export const Input = styled.input`
width: 391.42px;
height: 40px;
background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
border: ${props => (props.error ? '2px solid #FBAF30' : 'none')};
padding-left: 10px;
font-size: 20px;
`
export const SignInLink = styled.p`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 16px;
color: #FFFFFF;

a{
    cursor: pointer;
    text-decoration: underline;
}
`

export const ErrorMessage = styled.p`
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 16px;
color: #FBAF30;
margin-top: 10px;
`
