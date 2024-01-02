import {create} from "zustand";

interface ChatState {
    chats: IChat[];
    setChats: (chat: IChat) => void;
    loadChats: (chats: IChat[]) => void;
    deleteChats: () => void;
}

const useChatStore = create<ChatState>((set) => ({
    chats: [],
    setChats: (chat: IChat) => {
        set((state) => ({chats: [...state.chats, chat]}));
    },
    loadChats: (chats: IChat[]) => set({chats}),
    deleteChats: () => set({chats: []}),
}));

export default useChatStore;
