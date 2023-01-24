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

export const LoginImage = styled.img`
height: 85%;
`

export const ContainerItens = styled.div`
background: #312C30;
border-radius: 0 10px 10px 0;
height: 85%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

img{
    width: 200px;
    margin-left: 100px;
    margin-top: 0px;
    
}

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
    margin-top: 8px;
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 14px;
color: #FFFFFF;
margin-top: 28px;
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
