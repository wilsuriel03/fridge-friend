import { create } from 'zustand';

interface State {
    isNavOpen: boolean;
    toggleNav: (value: boolean) => void;
}

export const useStore = create<State>((set) => ({
    isNavOpen: false,
    toggleNav: (value) => set(() => ({ isNavOpen: value })),
}));