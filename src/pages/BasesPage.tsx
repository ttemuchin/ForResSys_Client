import { useState } from "react";
import BaseAction from "../components/Bases/BaseAction";
import BaseContent from "../components/Bases/BaseContent";
import BaseList from "../components/Bases/BaseList";
import Layout from "../components/Layout/Layout";
import { mockBasesData } from '../mocks/lbase';

import UploadMW from "../components/modals/UploadBaseMW";
import LearnMW from "../components/modals/LearnMW";
import DeleteBaseMW from "../components/modals/DeleteBaseMW";

const BasesPage = () => {
  const [selectedBaseId, setSelectedBaseId] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isLearnModalOpen, setIsLearnModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const selectedBaseName = selectedBaseId 
    ? mockBasesData[selectedBaseId].config.name 
    : '';

  const handleDeleteBase = () => {
    console.log('Deleting base:', selectedBaseId);
    //  удаление базы
    setSelectedBaseId(null);
  };

  return (
  <>
    <Layout
      leftSlot={<BaseList 
                  onSelectBase={setSelectedBaseId} 
                  selectedBaseId={selectedBaseId}
                />}
      centerSlot={<BaseContent 
                    selectedBaseId={selectedBaseId}
                    isEditMode={isEditMode}
                    onEditModeChange={setIsEditMode}
                  />}
      rightSlot={<BaseAction 
                  onEditModeChange={setIsEditMode}
                  onOpenUploadModal={() => { setIsUploadModalOpen(true); console.log('Opening upload modal')}}
                  onOpenLearnModal={() => { setIsLearnModalOpen(true); console.log('Opening learn modal')}}
                  onOpenDeleteModal={() => { setIsDeleteModalOpen(true); console.log('Opening delete modal')}}
                />}
    />
    <UploadMW 
        isOpen={isUploadModalOpen} 
        onClose={() => { setIsUploadModalOpen(false); }} 
      />
      <LearnMW 
        isOpen={isLearnModalOpen} 
        onClose={() => { setIsLearnModalOpen(false); }} 
      />
      <DeleteBaseMW 
        isOpen={isDeleteModalOpen} 
        onClose={() => { setIsDeleteModalOpen(false); }}
        baseName={selectedBaseName}
        onDelete={handleDeleteBase}
      />
  </>
  );
}

export default BasesPage;