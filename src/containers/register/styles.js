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
height: 85%;
`

export const ContainerItens = styled.div`
background: #312C30;
border-radius: 0 10px 10px 0;
height: 85%;
padding: 25px 35px;
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
    font-size: 25px;
    line-height: 19px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 5px;
    
}

img {
    width: 100px;
    height: 100px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
       
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 6px;
color: #FFFFFF;
margin-top: ${props => (props.error ? '12px' : '28px')};
margin-bottom: 5px;
`

export const Input = styled.input`
width: 340px;
height: 30px;
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
