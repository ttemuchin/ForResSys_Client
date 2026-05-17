import React, { useState, useRef } from 'react';
import styles from './PredictAction.module.css';
import cn from 'classnames';

type PredictActionProps = {
  onPredict?: (file: File | null, base: string, model: string) => void;
}

const PredictAction: React.FC<PredictActionProps> = ({ onPredict }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isBaseDropdownOpen, setIsBaseDropdownOpen] = useState(false);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [selectedBase, setSelectedBase] = useState<string>('Select Base');
  const [selectedModel, setSelectedModel] = useState<string>('Select Model');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockBases = ['BaseJSON', 'BaseJSON 2', 'Chemical Dataset'];
  const mockModels = ['Linear Regression', 'CNN', 'SVR'];

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    console.log('File selected:', file?.name);
  };

  const handleBaseSelect = (base: string) => {
    setSelectedBase(base);
    setIsBaseDropdownOpen(false);
    console.log('Base selected:', base);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setIsModelDropdownOpen(false);
    console.log('Model selected:', model);
  };

  const handlePredict = () => {
    console.log('Predict clicked with:', {
      file: selectedFile?.name,
      base: selectedBase,
      model: selectedModel
    });
    onPredict?.(selectedFile, selectedBase, selectedModel);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Info</h3>
      
      <div className={styles.fileSection}>
        <div 
          className={styles.fileField} 
          onClick={handleFileClick}
        >
          <svg 
            width="20" 
            height="25" 
            viewBox="0 0 20 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.fileIcon}
          >
            <path d="M11.25 1.25L12.1339 0.366115C11.8995 0.131702 11.5815 2.19054e-06 11.25 2.19054e-06V1.25ZM18.75 8.75H20C20 8.41848 19.8682 8.10054 19.6339 7.86611L18.75 8.75ZM7.5 13.75C7.5 13.0596 6.94035 12.5 6.25 12.5C5.55965 12.5 5 13.0596 5 13.75H7.5ZM5 17.5C5 18.1904 5.55965 18.75 6.25 18.75C6.94035 18.75 7.5 18.1904 7.5 17.5H5ZM5.625 8.75C4.93465 8.75 4.375 9.30965 4.375 10C4.375 10.6904 4.93465 11.25 5.625 11.25V8.75ZM6.875 11.25C7.56538 11.25 8.125 10.6904 8.125 10C8.125 9.30965 7.56538 8.75 6.875 8.75V11.25ZM5.625 5C4.93465 5 4.375 5.55965 4.375 6.25C4.375 6.94035 4.93465 7.5 5.625 7.5V5ZM6.875 7.5C7.56538 7.5 8.125 6.94035 8.125 6.25C8.125 5.55965 7.56538 5 6.875 5V7.5ZM10 1.25V6.75H12.5V1.25H10ZM13.25 10H18.75V7.5H13.25V10ZM10 6.75C10 7.07941 9.999 7.40164 10.0211 7.67279C10.0445 7.95853 10.0996 8.2957 10.2725 8.63498L12.5 7.5C12.5366 7.57189 12.5236 7.60035 12.5129 7.46921C12.501 7.32348 12.5 7.12066 12.5 6.75H10ZM13.25 7.5C12.8794 7.5 12.6765 7.49903 12.5308 7.48713C12.3996 7.47641 12.4281 7.46338 12.5 7.5L11.365 9.72751C11.7043 9.90039 12.0415 9.95548 12.3273 9.97881C12.5984 10.001 12.9206 10 13.25 10V7.5ZM10.2725 8.63498C10.5121 9.10538 10.8946 9.48784 11.365 9.72751L12.5 7.5L10.2725 8.63498ZM5 13.75V17.5H7.5V13.75H5ZM5.625 11.25H6.875V8.75H5.625V11.25ZM5.625 7.5H6.875V5H5.625V7.5ZM11.25 2.19054e-06H5.25V2.5H11.25V2.19054e-06ZM2.19054e-06 5.25V19.75H2.5V5.25H2.19054e-06ZM5.25 25H14.75V22.5H5.25V25ZM20 19.75V8.75H17.5V19.75H20ZM19.6339 7.86611L12.1339 0.366115L10.3661 2.13389L17.8661 9.63389L19.6339 7.86611ZM14.75 25C15.4295 25 16.0142 25.001 16.4937 24.9617C16.988 24.9214 17.4795 24.8322 17.9525 24.5912L16.8175 22.3637C16.7556 22.3952 16.6297 22.4424 16.2902 22.4701C15.936 22.499 15.4707 22.5 14.75 22.5V25ZM17.5 19.75C17.5 20.4707 17.499 20.936 17.4701 21.2902C17.4424 21.6297 17.3953 21.7556 17.3638 21.8175L19.5912 22.9525C19.8322 22.4795 19.9214 21.988 19.9618 21.4937C20.001 21.0142 20 20.4295 20 19.75H17.5ZM17.9525 24.5912C18.6581 24.2317 19.2317 23.6581 19.5912 22.9525L17.3638 21.8175C17.2439 22.0527 17.0527 22.2439 16.8175 22.3637L17.9525 24.5912ZM2.19054e-06 19.75C2.19054e-06 20.4295 -0.000972773 21.0142 0.0382147 21.4937C0.0785897 21.988 0.16774 22.4795 0.408727 22.9525L2.63624 21.8175C2.60475 21.7556 2.55765 21.6297 2.52991 21.2902C2.50098 20.936 2.5 20.4707 2.5 19.75H2.19054e-06ZM5.25 22.5C4.52931 22.5 4.06396 22.499 3.7098 22.4701C3.37021 22.4424 3.24431 22.3952 3.18251 22.3637L2.04754 24.5912C2.52051 24.8322 3.01204 24.9214 3.50621 24.9617C3.9858 25.001 4.57056 25 5.25 25V22.5ZM0.408727 22.9525C0.768252 23.6581 1.34193 24.2317 2.04754 24.5912L3.18251 22.3637C2.94731 22.2439 2.75609 22.0527 2.63624 21.8175L0.408727 22.9525ZM5.25 2.19054e-06C4.57056 2.19054e-06 3.9858 -0.000972773 3.50621 0.0382147C3.01204 0.0785897 2.52051 0.16774 2.04754 0.408727L3.18251 2.63624C3.24431 2.60475 3.37021 2.55765 3.7098 2.52991C4.06396 2.50098 4.52931 2.5 5.25 2.5V2.19054e-06ZM2.5 5.25C2.5 4.52931 2.50098 4.06396 2.52991 3.7098C2.55765 3.37021 2.60475 3.24431 2.63624 3.18251L0.408727 2.04754C0.16774 2.52051 0.0785897 3.01204 0.0382147 3.50621C-0.000972773 3.9858 2.19054e-06 4.57056 2.19054e-06 5.25H2.5ZM2.04754 0.408727C1.34193 0.768252 0.768252 1.34193 0.408727 2.04754L2.63624 3.18251C2.75609 2.94731 2.94731 2.75609 3.18251 2.63624L2.04754 0.408727Z" fill="#2D2D2D"/>
          </svg>
          <span className={styles.fileName}>
            {selectedFile ? selectedFile.name : 'Filename'}
          </span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className={styles.hiddenInput}
          accept=".txt,.csv,.json"
        />
      </div>

      <div className={styles.selectorSection}>
        <span className={styles.selectorLabel}>Base</span>
        <div className={styles.dropdownWrapper}>
          <button 
            className={styles.selectorButton}
            onClick={() => { setIsBaseDropdownOpen(!isBaseDropdownOpen); }}
          >
            <span className={styles.selectorText}>{selectedBase}</span>
            <svg 
              width="22" 
              height="13" 
              viewBox="0 0 22 13" 
              fill="none"
              className={cn(styles.arrow, { [styles.arrowOpen]: isBaseDropdownOpen })}
            >
              <path d="M0.909058 0.90918L8.81391 10.395C9.90426 11.7034 11.9139 11.7034 13.0042 10.395L20.9091 0.90918" stroke="#F9F9F9" strokeWidth="1.81818" strokeLinecap="round"/>
            </svg>
          </button>
          {isBaseDropdownOpen && (
            <div className={styles.dropdown}>
              {mockBases.map((base) => (
                <div
                  key={base}
                  className={styles.dropdownItem}
                  onClick={() => { handleBaseSelect(base); }}
                >
                  {base}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.selectorSection}>
        <span className={styles.selectorLabel}>Model</span>
        <div className={styles.dropdownWrapper}>
          <button 
            className={styles.selectorButton}
            onClick={() => { setIsModelDropdownOpen(!isModelDropdownOpen); }}
          >
            <span className={styles.selectorText}>{selectedModel}</span>
            <svg 
              width="22" 
              height="13" 
              viewBox="0 0 22 13" 
              fill="none"
              className={cn(styles.arrow, { [styles.arrowOpen]: isModelDropdownOpen })}
            >
              <path d="M0.909058 0.90918L8.81391 10.395C9.90426 11.7034 11.9139 11.7034 13.0042 10.395L20.9091 0.90918" stroke="#F9F9F9" strokeWidth="1.81818" strokeLinecap="round"/>
            </svg>
          </button>
          {isModelDropdownOpen && (
            <div className={styles.dropdown}>
              {mockModels.map((model) => (
                <div
                  key={model}
                  className={styles.dropdownItem}
                  onClick={() => { handleModelSelect(model); }}
                >
                  {model}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button className={styles.predictButton} onClick={handlePredict}>
        Predict
      </button>
    </div>
  );
};

export default PredictAction;