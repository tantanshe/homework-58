import {useState} from 'react';
import Modal from '../components/Modal/Modal';
import Alert from '../components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const closeAlert = () => setShowAlert(false);
  return (
    <>
      <button className="m-3 w-50 btn btn-primary" onClick={() => setShowModal(true)}>Test Modal</button>
      <Modal
        show={showModal}
        title="Modal"
        onClose={() => setShowModal(false)}
      >
        <div className="modal-body">
          This is modal content
        </div>
      </Modal>

      <Alert
        show={showAlert}
        type="warning"
        onDismiss={closeAlert}
      >
        This is a warning type alert
      </Alert>
      <Alert type="success">This is a success type alert</Alert>
    </>
  );
};

export default App;
