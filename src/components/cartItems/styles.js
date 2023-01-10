import styled from 'styled-components'

export const Container = styled.div`
background-color: #ffffff;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
border-radius: 20px;
padding: 10px;
width: max-content;
margin-left: 30px
`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
border-bottom: 1px solid #FBAF30;
p {
    font-size: 16px;
    color: #FBAF30;
    font-weight: bold;
    
}
`

export const Body = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
width: max-content;
grid-gap: 10px 15px;

img {
    border-radius: 10px;
    width: 130px;
}

p {
    font-size: 16px;
    color: #000000;
    font-weight: bold;
}
.quantity-container{
    display: flex;
    gap: 20px;
    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
p{
    margin-top: 5px;
    
}

}
`

export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
color: #FBAF30;
font-weight: bold;
`
