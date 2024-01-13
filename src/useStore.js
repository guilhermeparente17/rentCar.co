import {create} from 'zustand';

const useStore = create((set) => ({
  // Defina os estados iniciais aqui
  location: '',
  openModal: false,

  // Adicione métodos para modificar os estados
  chooseLocation: (newLocation) => set({ location: newLocation }),
  setOpenModal: (status) => set({ openModal: status}),
}));

export default useStore;