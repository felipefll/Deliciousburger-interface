import styled from 'styled-components'

import Background from '../../../src/assets/background.png'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    justify-content: flex-start;
    background:  #FBAF30;
    background: #FFFFFF url('${Background}') no-repeat right top fixed;
`
export const ContainerItems = styled.div`
    padding: 20px;

`
