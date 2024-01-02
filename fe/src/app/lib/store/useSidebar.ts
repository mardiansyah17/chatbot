import {create} from "zustand";

interface SidebarState {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useSidebar = create<SidebarState>((set) => ({
    isOpen: false,
    onClose: () => set(() => ({isOpen: false})),
    onOpen: () => set(() => ({isOpen: true})),
}));

export default useSidebar;