import { FaArrowDown, FaArrowUp, FaClock } from "react-icons/fa";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { NewTask } from "../../components/Modal";
import { Edit } from "../../components/Att";
import { Container, Button, Overlay } from "./styles";
import { useState } from "react";

export function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      ticketDevops: "DEV-001",
      title: "Implement user authentication",
      totalRecords: 150,
      start: "2023-06-01",
      estimatedDelivery: "2023-06-15",
      estimatedSpentTime:"30/40",
      progress: 80,
      status: "In Progress",
    },
  ]);

  const openModal = () => {
    setTaskToEdit(null);
    setIsNewTaskModalOpen(true);
    setIsOverlayOpen(true);
  };

  const openModalEdit = () => {
    setIsEditModalOpen(true);
    setIsOverlayOpen(true);
  };

  const closeModal = () => {
    setIsNewTaskModalOpen(false);
    setIsEditModalOpen(false);
    setIsOverlayOpen(false);
    setTaskToEdit(null);
  };

  // Função para adicionar uma nova tarefa
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleSaveTask = (taskData) => {
    if (taskToEdit) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskData.id ? { ...task, ...taskData } : task
        )
      );
    } else {
      // Adicionar nova tarefa
      setTasks((prevTasks) => [...prevTasks, taskData]);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    openModalEdit(); // Abre o modal de edição
  };

  const handleDelete = (id) => {
    setTasks((prevData) => prevData.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Header />
      <div>
        <Card
          title="Total Hora/Ano"
          number="105"
          icon={FaArrowUp}
          backgroundColor="#075f85"
          iconColor="#00cc44"
        />
        <Card
          title="Total Tasks"
          number="104"
          icon={FaArrowDown}
          backgroundColor="#075f85"
          iconColor="#ff4444"
        />
        <Card
          title="Horas restantes"
          number="85"
          icon={FaClock}
          backgroundColor="#1C8B47"
          iconColor=""
        />
      </div>
      <Button onClick={openModal}>New Task</Button>

      {isOverlayOpen && <Overlay />}

      <NewTask isModalOpen={isNewTaskModalOpen} closeModal={closeModal} onSave={addTask} />

      <Edit
        isModalOpen={isEditModalOpen}
        closeModal={closeModal}
        onSave={handleSaveTask}
        taskToEdit={taskToEdit}
      />

      {/* Passar as tarefas para o componente Table */}
      <Table tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </Container>
  );
}
