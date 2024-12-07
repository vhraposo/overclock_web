import { FaArrowDown, FaArrowUp, FaClock } from 'react-icons/fa';
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <div>
                <Card
                    title="Total Hora/Ano"
                    number="105"
                    icon={FaArrowUp}
                    backgroundColor="#0055a4"
                    iconColor="#00cc44"
                />
                <Card
                    title="Total Tasks"
                    number="104"
                    icon={FaArrowDown}
                    backgroundColor="#0055a4"
                    iconColor="#ff4444"
                />
                <Card
                    title="Horas restantes"
                    number="85"
                    icon={FaClock}
                    backgroundColor="#008060"
                    iconColor=""
                />
            </div>
        </Container>   
    )
}