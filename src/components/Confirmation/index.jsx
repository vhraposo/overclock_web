import { Confirmation } from "./styles";

export const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;
  
    return (
    <Confirmation>
        <div className="modal">
          <p>{message}</p>
          <div className="buttons">
            <button className="confirmButton" onClick={onConfirm}>
              Confirmar
            </button>
            <button className="cancelButton" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </div>
    </Confirmation>
    );
  };