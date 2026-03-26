import React from 'react';
import Modal from './Modal';

type DeleteBaseMWProps = {
  isOpen: boolean;
  onClose: () => void;
  baseName: string;
  onDelete: () => void;
}

const DeleteBaseMW: React.FC<DeleteBaseMWProps> = ({
  isOpen,
  onClose,
  baseName,
  onDelete
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete base"
      onConfirm={onDelete}
      confirmText="Delete"
      cancelText="Close"
      isDanger={true}
    >
      <p>Are you sure you want to delete the base &quot;{baseName}&quot;?</p>
      <p style={{ marginTop: '8px', color: '#858585', fontSize: '14px' }}>
        This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteBaseMW;