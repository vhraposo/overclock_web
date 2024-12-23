import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    gap: 4rem;
  }  
`
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0371a1;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  right: 10px;
  top: 10px;
  margin-top:50px;
  margin-bottom:10px;

  &:hover {
    background-color: #025f84;
    transform: scale(1.1);
  }

  &:active {
    background-color: #014f6c;
  }

  &:focus {
    outline: none;
  }
`
export const Modal = styled.div`
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  color: black;

  button{
    background-color: #025f84;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
  }

  h2{
   text-align: center;
  }
`
export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`
;


