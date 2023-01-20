import styled from 'styled-components'

import Background from '../../../src/assets/background.png'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    justify-content: space-around;
    background:  #FBAF30;
    background: #FFFFFF url('${Background}') no-repeat right top fixed;

`
