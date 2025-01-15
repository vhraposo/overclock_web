import styled from 'styled-components';

export const ObservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 90%; 
  }

  svg {
    cursor: pointer;
  }
    
  svg:hover {
  transform: scale(1.2);
  }
`;

export const ObservationHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  font-size: 20px;
`;

export const CloseButton = styled.button`
  background-color: #025f84;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: inline-block;
  margin: 0 10px;

  &:hover {
    background-color: #014960;
    transform: scale(1.1);
  }
`;

export const ObservationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  max-height: 400px; 
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ObservationTableHead = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const ObservationRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const ObservationCellHeader = styled.td`
  text-align: center;
  font-size: 20px;
  padding: 15px 0px;
  background-color: #025f84;
  color: white;

  &:nth-child(1) {
    font-weight: bold;
  }
`;

export const ObservationCell = styled.td`
  padding: 10px;
  text-align: left;
  font-size: 16px;

  &:nth-child(1) {
    font-weight: bold;
  }
`;

export const ObservationCellText = styled.td`
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border-color: #025f84;
      box-shadow: 0 0 5px rgba(2, 95, 132, 0.5);
    }

    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
      
  }
`;
