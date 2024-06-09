import React from 'react';

interface Props extends React.PropsWithChildren {
  show?: boolean;
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({show, type, children, onDismiss}) => {
  let dismissButton;
  if (onDismiss) {
    dismissButton = (
      <button
        type="button"
        onClick={onDismiss}
        style={{border: 'none', background: 'none', zIndex: 1}}
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
          alt="Close"
          style={{width: '20px', height: 'auto'}}
        />
      </button>
    );
  }

  return (
    <div className={`alert alert-${type} w-50 m-3 justify-content-between align-items-center`} style={{display: onDismiss && !show ? 'none' : 'flex'}}>
      {children}
      {dismissButton}
    </div>
  );
};

export default Alert;