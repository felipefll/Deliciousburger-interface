import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    background: #CC850A;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    width: 300px;
    top: 0;
    left: 0;
    hr {
      margin: 50px 15px;   
    }
`
export const ItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background: ${props => (props.isActive ? '#FBAF30' : 'none')};
    border-radius: 10px;
    margin: 8px;
    padding-left: 20px;
`

export const ListLink = styled(Link)`
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 19px;
   color: black;
   text-decoration: none;
   margin-left: 10px;
`
