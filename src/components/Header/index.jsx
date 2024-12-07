import { FaRegCircleUser } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import { Container } from './styles';


export function Header() {

  return (
    <Container >
      <div>
        <img src={logo} alt="Relógio logo" />
        <h1>overclock</h1>
        <FaRegCircleUser  size={40} />
      </div>
    </Container>
  )
}