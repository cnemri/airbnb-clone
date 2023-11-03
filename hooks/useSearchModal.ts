import { create } from "zustand";

type SearchModalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useSearchModal = create<SearchModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
