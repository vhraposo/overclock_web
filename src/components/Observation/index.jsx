import {
  ObservationContainer,
  ObservationHeader,
  ObservationTable,
  ObservationRow,
  ObservationCell,
  CloseButton,
  ObservationCellHeader,
  ObservationCellText,
  ObservationTableHead
} from './styles';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from 'react';
import { ConfirmationModal } from '../Confirmation';

export const ObservationModal = ({ isOpen, task, onClose, onIncrementRecords, onDecrementRecords }) => {
  const [observations, setObservations] = useState({});
  const [currentObservation, setCurrentObservation] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);

  const handleInputChange = (e) => {
    setCurrentObservation(e.target.value);
  };

  const handleSave = () => {
    const currentDate = new Date().toLocaleString();

    setObservations((prev) => ({
      ...prev,
      [task.id]: [
        ...(prev[task.id] || []),
        { text: currentObservation, date: currentDate },
      ],
    }));
    setCurrentObservation('');
    onIncrementRecords(task.id);
  };

  const openConfirmationModal = (index) => {
    setIndexToDelete(index);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setObservations((prev) => ({
      ...prev,
      [task.id]: prev[task.id].filter((_, index) => index !== indexToDelete),
    }));
    setIsModalOpen(false);
    onDecrementRecords(task.id); // Atualiza o número total de records no pai
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIndexToDelete(null);
  };

  if (!isOpen) return null;

  const taskObservations = observations[task.id] || [];
  const localTotalRecords = taskObservations.length;

  return (
    <ObservationContainer>
      <ObservationHeader>
        <h2>Detalhes da Task</h2>
      </ObservationHeader>
      <ObservationTableHead>
        <thead>
          <tr>
            <ObservationCellHeader as="th">Id: {task.id}</ObservationCellHeader>
            <ObservationCellHeader as="th">Record: {localTotalRecords}</ObservationCellHeader>
            <ObservationCellHeader as="th">Analista: {task.analyst}</ObservationCellHeader>
          </tr>
        </thead>
      </ObservationTableHead>
      <ObservationTable>
        <tbody>
          {taskObservations.map((obs, index) => (
            <ObservationRow key={index}>
              <ObservationCell>{obs.date}</ObservationCell>
              <ObservationCell>{obs.text}</ObservationCell>
              <ObservationCell>
                <RiDeleteBin5Line
                  size={13}
                  onClick={() => openConfirmationModal(index)}
                />
              </ObservationCell>
            </ObservationRow>
          ))}
        </tbody>
      </ObservationTable>

      <ObservationCellText>
        <textarea
          placeholder="Adicione uma observação"
          value={currentObservation}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />
      </ObservationCellText>

      <div>
        <CloseButton onClick={handleSave}>Salvar</CloseButton>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        message={`Você tem certeza que deseja deletar essa observação?`}
        onConfirm={confirmDelete}
        onCancel={closeModal}
      />
    </ObservationContainer>
  );
};
