import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal:React.FC<Props> = ({show, title, children, onClose}) => {
  return (
    <>
      <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" onClick={onClose} style={{border: 'none', background: 'none'}}>
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="Close" style={{width: '20px', height: 'auto'}}/>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;