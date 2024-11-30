import MySongs from "../Components/MySongs";
import CreateSongModal from "../Components/CreateSongModal";
import { useState } from "react";

const Songs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <MySongs />
      <h2>Adicione sua própria música a plataforma</h2>
      <button onClick={openModal}>Adicionar Nova Música</button>
      <CreateSongModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Songs;
