import { create } from 'zustand';

type SectionStore = {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
};

export const useSectionStore = create<SectionStore>((set) => ({
  activeSection: '',
  setActiveSection: (sectionId) => set({ activeSection: sectionId }),
}));
