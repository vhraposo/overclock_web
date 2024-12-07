import { Container, IconWrapper, InfoContainer, Number, Title } from './styles.js';

export function Card({ title, number, icon: Icon, backgroundColor, iconColor }) {
  return (
    <Container backgroundColor={backgroundColor}>
      {title && <Title>{title}</Title>}
      <InfoContainer>
        {number && <Number>{number}</Number>}
        {Icon && (
          <IconWrapper iconColor={iconColor}>
            <Icon />
          </IconWrapper>
        )}
      </InfoContainer>
    </Container>
  );
}
