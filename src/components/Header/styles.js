import styled from 'styled-components'


export const Container = styled.header`
  width: 100vw;

  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: green;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    margin-bottom: 5rem;
    
    >img{
        width: 7rem;
        height: auto;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
    }
    >svg{
      cursor: pointer;
    }
  }
`
