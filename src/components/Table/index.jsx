
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

import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";


export const Table = ({ tasks, onDelete, onEdit }) => {

  const handleEditClick = (task) => {
    onEdit(task);
  };
  
  const handleDeleteClick = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      onDelete(id);
    }
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
            <TableHeader>Progress</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.filter(task => task.id !== 1).map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.ticketDevops}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.totalRecords}</TableCell>
              <TableCell>{task.start}</TableCell>
              <TableCell>{task.estimatedDelivery}</TableCell>
              <TableCell>{task.estimatedSpentTime}h</TableCell>
              <TableCell>
                <ProgressBar>
                  <ProgressFill progress={task.progress} />
                </ProgressBar>
                {task.progress}%
              </TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>
                <IconContainer>
                  <GrUpdate size={12} onClick={() => handleEditClick(task)} />
                  <RiDeleteBin5Line size={13} onClick={() => handleDeleteClick(task.id)} />
                </IconContainer>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};


