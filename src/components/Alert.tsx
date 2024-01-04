import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onCloseClick: () => void;
}
const Alert = ({ children, onCloseClick }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseClick}
      ></button>
    </div>
  );
};

export default Alert;
