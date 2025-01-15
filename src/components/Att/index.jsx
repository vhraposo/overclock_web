import { ModalEdit } from './styles';
import { useState, useEffect } from 'react';

export function Edit({ isModalOpen, closeModal, onSave, taskToEdit }) {
  const [formData, setFormData] = useState({
    ticketDevops: "",
    title: "",
    totalRecords: 0,
    start: "",
    estimatedDelivery: "",
    estimatedSpentTime: "",
    analyst:"",
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        ticketDevops: taskToEdit.ticketDevops,
        title: taskToEdit.title,
        totalRecords: taskToEdit.totalRecords,
        start: taskToEdit.start,
        estimatedDelivery: taskToEdit.estimatedDelivery,
        estimatedSpentTime: taskToEdit.estimatedSpentTime,
        analyst: taskToEdit.analyst,
      });
    }
  }, [taskToEdit]);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envia os dados para o componente pai
    onSave({
      ...formData,
      id: taskToEdit ? taskToEdit.id : Date.now(), 
      progress: taskToEdit ? taskToEdit.progress : 0, 
      status: taskToEdit ? taskToEdit.status : "In Progress",
    });

    closeModal(); // Fecha o modal após salvar
    setFormData({
      ticketDevops: "",
      title: "",
      totalRecords: 0,
      start: "",
      estimatedDelivery: "",
      estimatedSpentTime: "",
      analyst:"",
    });
  };

  return (
    <ModalEdit>
      <form onSubmit={handleSubmit}>
        <h2>{taskToEdit ? "Edit Task" : "Create New Task"}</h2>
        <div>
          <label htmlFor="ticket">Ticket-DevOps:</label>
          <input
            type="text"
            id="ticket"
            name="ticketDevops"
            placeholder="Digite o ticket"
            value={formData.ticketDevops}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="start">Start:</label>
          <input
            type="date"
            id="start"
            name="start"
            value={formData.start}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="estimatedDelivery">Estimated Delivery:</label>
          <input
            type="date"
            id="estimatedDelivery"
            name="estimatedDelivery"
            value={formData.estimatedDelivery}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="estimatedSpentTime">Estimated/Spent Time:</label>
          <input
            type="text"
            id="estimatedSpentTime"
            name="estimatedSpentTime"
            placeholder="Ex: 10h / 8h"
            value={formData.estimatedSpentTime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="analyst">Analyst</label>
          <input
            type="text"
            id="analyst"
            name="analyst"
            value={formData.analyst}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">{taskToEdit ? "Save Changes" : "Save"}</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </ModalEdit>
  );
}