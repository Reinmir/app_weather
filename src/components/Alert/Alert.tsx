import React from "react";
import { IoMdClose } from "react-icons/io";

import "./style.scss";

interface IAlertProps {
  message: string;
  onClose: () => void;
  active: boolean;
  setActive: (active: boolean) => void;
}

const Alert: React.FC<IAlertProps> = ({
  message,
  onClose,
  setActive,
}): React.ReactElement => {
  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal__content">
        <p className="modal__message">{message}</p>
        <button className="modal__button" onClick={onClose}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default Alert;
