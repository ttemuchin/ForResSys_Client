import React, { useState } from 'react';
import Modal from './Modal';
import styles from './UploadMW.module.css';

type UploadMWProps = {
  isOpen: boolean;
  onClose: () => void;
}

const UploadMW: React.FC<UploadMWProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    N: '',
    nX: '',
    labelsX: '',
    nY: '',
    labelsY: '',
    dimension: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    console.log('Upload data:', { ...formData, file });
    // отправка на сервер
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Upload new base"
      onConfirm={handleSubmit}
      confirmText="Upload"
    >
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Base name"
          value={formData.name}
          onChange={(e) => { setFormData({ ...formData, name: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="N (number of samples)"
          value={formData.N}
          onChange={(e) => { setFormData({ ...formData, N: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="nX (number of features)"
          value={formData.nX}
          onChange={(e) => { setFormData({ ...formData, nX: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="labelsX (comma separated)"
          value={formData.labelsX}
          onChange={(e) => { setFormData({ ...formData, labelsX: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="nY (number of targets)"
          value={formData.nY}
          onChange={(e) => { setFormData({ ...formData, nY: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="labelsY (comma separated)"
          value={formData.labelsY}
          onChange={(e) => { setFormData({ ...formData, labelsY: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="dimension (comma separated)"
          value={formData.dimension}
          onChange={(e) => { setFormData({ ...formData, dimension: e.target.value }); }}
          className={styles.input}
        />
        <input
          type="file"
          onChange={(e) => { setFile(e.target.files?.[0] ?? null); }}
          className={styles.fileInput}
        />
      </div>
    </Modal>
  );
};

export default UploadMW;