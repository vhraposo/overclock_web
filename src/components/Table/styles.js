import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: hidden;
  border-radius: 3px; 
  background-color: #bdbdbd; 
  margin-top: 2rem;
  padding: 1px;
    
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #0371a1;
  color: #f1f1f1;
  font-weight: bold;
  padding: 2rem;
  text-align: left;
  border-bottom: 1px solid #292929;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #e5e7eb;
  }
  &:nth-child(even) {
    background-color: #d1d5db;
  }
  color: #000;
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  width: ${props => props.progress}%;
  height: 20px;
  background-color: #4caf50;
`;

