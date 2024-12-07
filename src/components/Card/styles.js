import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.backgroundColor || '#0055a4'};
  color: #ffffff;
  border-radius: 5px;
  width: 30rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  position: relative;
`;

export const Title = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Number = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
`;

export const IconWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.iconColor || '#00cc44'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10%, 15%);
`;
