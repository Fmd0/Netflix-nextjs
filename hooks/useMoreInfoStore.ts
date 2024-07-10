import {create} from "zustand";


type state = {
    moreInfoModalOpen: boolean,
    moreInfoModalIndex: string|null,
    signOutModalOpen: boolean
}

type actions = {
    setMoreInfoModal: (state: string) => void,
    clearMoreInfoModal: () => void,
    toggleSignOutModal: () => void,
    closeAllModal: () => void,
}

const initialState = {
    moreInfoModalOpen: false,
    moreInfoModalIndex: null,
}

const initialModalState = {
    signOutModalOpen: false,
}



export const useMoreInfoStore = create<state & actions>((set) => ({
    ...initialState,
    ...initialModalState,
    setMoreInfoModal: (newData: string) => {
        set({moreInfoModalOpen: true, moreInfoModalIndex: newData});
        window.document.body.style.overflow = 'hidden';
    },
    clearMoreInfoModal: () => {
        set({moreInfoModalOpen: false, moreInfoModalIndex: null});
        window.document.body.style.overflow = 'visible';
    },
    toggleSignOutModal: () => set(state => ({
        ...initialModalState,
        signOutModalOpen: !state.signOutModalOpen,
    })),
    closeAllModal: () => set({...initialModalState})
}))