import {create} from "zustand";
import {MovieType} from "@/utils/type";


type state = {
    moreInfoModalOpen: boolean,
    // moreInfoModalIndex: string|null,
    moreInfoMovie: MovieType|null,
    signOutModalOpen: boolean,
    mobileNavBarModalOpen: boolean,
}

type actions = {
    setMoreInfoModal: (moreInfoMovie: MovieType) => void,
    clearMoreInfoModal: () => void,
    setMoreInfoMovie: (moreInfoMovie: MovieType) => void,
    toggleSignOutModal: () => void,
    toggleMobileNavBarModal: () => void,
    closeAllModal: () => void,
}

const initialState = {
    moreInfoModalOpen: false,
    moreInfoModalIndex: null,
    moreInfoMovie: null
}

const initialModalState = {
    signOutModalOpen: false,
    mobileNavBarModalOpen: false,
}



export const useMoreInfoStore = create<state & actions>((set) => ({
    ...initialState,
    ...initialModalState,
    setMoreInfoModal: (moreInfoMovie: MovieType) => {
        set({moreInfoModalOpen: true, moreInfoMovie: moreInfoMovie});
        window.document.body.style.overflow = 'hidden';
    },
    clearMoreInfoModal: () => {
        set({moreInfoModalOpen: false, moreInfoMovie: null});
        window.document.body.style.overflow = 'visible';
    },
    setMoreInfoMovie: (moreInfoMovie: MovieType) => {
        set({moreInfoMovie: moreInfoMovie});
    },
    toggleSignOutModal: () => set(state => ({
        ...initialModalState,
        signOutModalOpen: !state.signOutModalOpen,
    })),
    toggleMobileNavBarModal: () => set(state => ({
        ...initialModalState,
        mobileNavBarModalOpen: !state.mobileNavBarModalOpen,
    })),
    closeAllModal: () => set({...initialModalState})
}))