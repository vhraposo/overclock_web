import { FaArrowDown, FaArrowUp, FaClock } from "react-icons/fa";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { NewTask } from "../../components/Modal";
import { Edit } from "../../components/Att";
import { Container, Button, Overlay } from "./styles";
import { useState } from "react";
import { ObservationModal } from "../../components/Observation";


export function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isObservationModalOpen, setIsObservationModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToView, setTaskToView] = useState(null);
  
  

  const [tasks, setTasks] = useState([
    {
      id: 0,
      ticketDevops: "DEV-001",
      title: "Implement user authentication",
      totalRecords: 150,
      start: "2023-06-01",
      estimatedDelivery: "2023-06-15",
      estimatedSpentTime:"30/40",
      analyst:"Analista-Teste",
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

  const openModalObservation = () =>{
    setIsObservationModalOpen(true);
    setIsOverlayOpen(true);
  
  }

  console.log('isObservationModalOpen:', isObservationModalOpen);

  const closeModal = () => {
    setIsNewTaskModalOpen(false);
    setIsEditModalOpen(false);
    setIsOverlayOpen(false);
    setIsObservationModalOpen(false);
    setTaskToEdit(null);
  };

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
      setTasks((prevTasks) => [...prevTasks, taskData]);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    openModalEdit();
  };
  
  const handleView = (task) =>{
    setTaskToView(task);
    openModalObservation();
  }

  const handleDelete = (id) => {
    setTasks((prevData) => prevData.filter((task) => task.id !== id));
  };

  const incrementRecords = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, totalRecords: task.totalRecords + 1 } : task
      )
    );
  };

  const handleDecrementRecords = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, totalRecords: task.totalRecords - 1 } : task
      )
    );
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

      <ObservationModal
        isOpen={isObservationModalOpen}
        task={taskToView}
        onClose={closeModal}
        onDelete={handleDelete}
        onIncrementRecords={incrementRecords}
        onDecrementRecords={handleDecrementRecords}
      />

      {/* Passar as tarefas para o componente Table */}
      <Table tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} onObservation={handleView} />
    </Container>
  );
}