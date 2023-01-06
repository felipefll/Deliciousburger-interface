import styled from 'styled-components'

export const Container = styled.div`
background: #ffff;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow {
    background: #FBAF30;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.rec.rec-arrow:hover {
    border: 2px solid #FBAF30;
    background-color: #efefef;
    color: #FBAF30;
}

.rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
}

.rec.rec-dot {
        box-sizing: border-box;
    padding: 0;
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
    border: none;
    margin: 5px;
    background-color: transparent;
    font-size: 1.3em;
    height: 10px;
    width: 10px;
    box-shadow: 0 0 1px 2px rgb(0 0 0 / 50%);
    border-radius: 50%;
    outline: none;
}
.rec.rec-dot_active {
    box-sizing: border-box;
    padding: 0;
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
    border: none;
    margin: 5px;
    background-color: #FBAF30;
    font-size: 1.3em;
    height: 10px;
    width: 10px;
    box-shadow: 0 0 1px 3px #000;
    border-radius: 50%;
    outline: none;
}
`

export const CategoryImg = styled.img`
margin-top: 10px;
width: 30%;
`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;

p{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 120%;
color: #424242;
}
`

export const Image = styled.img`
width: 200px;
border-radius: 10px;
margin-bottom: 16px;
`

export const Button = styled.button`
background: #FBAF30;
margin-top: 16px;
border-radius: 10px;
border: none;
height: 50px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 100%;
text-align: center;
color: #000000;
cursor: pointer;
&:hover{
    opacity: 0.7;
}
`
