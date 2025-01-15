
import {
  ProgressBar,
  ProgressFill,
  StyledTable,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  IconContainer
} from './styles';

import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";
import { BsChatSquareText } from "react-icons/bs";
import { useState } from 'react';
import { ConfirmationModal } from '../Confirmation';


export const Table = ({ tasks, onDelete, onEdit, onObservation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleObservationClick = (task) => {
    onObservation(task);
  }

  const handleEditClick = (task) => {
    onEdit(task);
  };
  
  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const confirmDelete = () => {
    onDelete(taskToDelete.id);
    closeModal();
  };


  return (

    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
          <TableHeader>ID</TableHeader>
            <TableHeader>Ticket-DevOps</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Total Records</TableHeader>
            <TableHeader>Start</TableHeader>
            <TableHeader>Estimated Delivery</TableHeader>
            <TableHeader>Estimated/Spent Time</TableHeader>
            <TableHeader>Analyst</TableHeader>
            <TableHeader>Progress</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.filter(task => task.id !== 0).map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.ticketDevops}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.totalRecords}</TableCell>
              <TableCell>{task.start}</TableCell>
              <TableCell>{task.estimatedDelivery}</TableCell>
              <TableCell>{task.estimatedSpentTime}h</TableCell>
              <TableCell>{task.analyst}</TableCell>
              <TableCell>
                <ProgressBar>
                  <ProgressFill progress={task.progress} />
                </ProgressBar>
                {task.progress}%
              </TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>
                <IconContainer>
                  <BsChatSquareText size={11} onClick={() => handleObservationClick(task)}/>
                  <LiaEditSolid size={15} onClick={() => handleEditClick(task)} />
                  <RiDeleteBin5Line size={13} onClick={() => handleDeleteClick(task)} />
                </IconContainer>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      <ConfirmationModal
        isOpen={isModalOpen}
        message={`Você tem certeza que deseja deletar a task "${taskToDelete?.id}" ?`}
        onConfirm={confirmDelete}
        onCancel={closeModal}
      />

    </TableContainer>    
  );
};


