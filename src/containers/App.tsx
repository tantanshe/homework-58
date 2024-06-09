import {useState} from 'react';
import Modal from '../components/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="m-5 w-50 btn btn-primary" onClick={() => setShowModal(true)}>Test</button>
      <Modal
        show={showModal}
        title="Modal"
        onClose={() => setShowModal(false)}
      >
        <div className="modal-body">
          This is modal content
        </div>
      </Modal>
    </>
  );
};

export default App;
