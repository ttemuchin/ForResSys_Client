import React from 'react';
import styles from './BaseAction.module.css';
import cn from 'classnames';

type Command = {
  id: string;
  label: string;
  action: () => void;
  isDanger?: boolean;
}

type BaseActionProps = {
  onEditModeChange?: (mode: boolean) => void;
  onOpenUploadModal: () => void;
  onOpenLearnModal: () => void;
  onOpenDeleteModal: () => void;
}


const BaseAction: React.FC<BaseActionProps> = ({
  onEditModeChange,
  onOpenUploadModal,
  onOpenLearnModal,
  onOpenDeleteModal,
}) => {
  const commands: Command[] = [
    { id: 'upload', label: 'Upload new base', action: onOpenUploadModal, isDanger: false },
    { id: 'start', label: 'Start learning', action: onOpenLearnModal, isDanger: false },
    { id: 'edit', label: 'Edit base', action: () => onEditModeChange?.(true), isDanger: false },
    { id: 'delete', label: 'Delete', action: onOpenDeleteModal, isDanger: true },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Commands</h3>
      <div className={styles.commandsList}>
        {commands.map((command) => (
          <button
            key={command.id}
            className={cn(styles.commandItem, {
              [styles.danger]: command.isDanger
            })}
            onClick={command.action}
          >
            {command.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseAction;