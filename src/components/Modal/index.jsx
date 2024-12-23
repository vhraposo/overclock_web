import {Modal} from './styles';
import { useState } from 'react';



export function NewTask({ isModalOpen, closeModal, onSave }) {
    const [formData, setFormData] = useState({
      ticketDevops: "",
      title: "",
      totalRecords: 0,
      start: "",
      estimatedDelivery: "",
      estimatedSpentTime:"",
    });
  
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
        id: Date.now(), // Gerar um ID único
        progress: 0, 
        status: "In Progress",
      });
  
      closeModal(); // Fecha o modal após salvar
      setFormData({
        ticketDevops: "",
        title: "",
        totalRecords: 0,
        start: "",
        estimatedDelivery: "",
        estimatedSpentTime:"",
      });
    };
  
    return (
        <Modal>
          <form onSubmit={handleSubmit}>
            <h2>Create new task</h2>
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
              <label htmlFor="totalRecords">Total Records:</label>
              <input
                type="number"
                id="totalRecords"
                name="totalRecords"
                placeholder="Digite o total de registros"
                value={formData.totalRecords}
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
                placeholder="Ex: 10 / 8"
                value={formData.estimatedSpentTime}
                onChange={handleChange}
              />
            </div>
    
            <div>
              <button type="submit">Save</button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      );
    }