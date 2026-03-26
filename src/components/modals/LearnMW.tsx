import React from 'react';
import Modal from './Modal';

type LearnMWProps = {
  isOpen: boolean;
  onClose: () => void;
}

const LearnMW: React.FC<LearnMWProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Start learning"
      onConfirm={() => { console.log('Start learning'); }}
      confirmText="Start"
    >
      <p>Configure learning parameters here...</p>
    </Modal>
  );
};

export default LearnMW;