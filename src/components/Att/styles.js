import styled from 'styled-components'

export const ModalEdit = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  border-radius: 10px;
  z-index: 100;

  

  button {
    background-color: #025f84;
    padding: 8px 12px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    border: none;
    cursor: pointer;
    margin: 10px 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #014960;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  form {
    margin: 0px 50px;
    display: flex;
    flex-direction: column;  
    gap: 15px;  
  }

  label {
    font-size: 12px;
    font-weight: bold;
    color: #444;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 12px;
    color: #333;
    outline: none;
    transition: border-color 0.3s ease;
    width: 100%;
  }

  input:focus {
    border-color: #025f84;
  }
`;
