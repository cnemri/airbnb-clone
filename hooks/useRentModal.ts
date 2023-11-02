import { create } from "zustand";

type RentModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useRentModal = create<RentModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;
