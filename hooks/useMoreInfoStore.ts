import {create} from "zustand";


type state = {
    moreInfoModalIndex: string|null,
}

type actions = {
    setMoreInfoModal: (state: string) => void,
    clearMoreInfoModal: () => void,
}


export const useMoreInfoStore = create<state & actions>((set) => ({
    moreInfoModalIndex: null,
    setMoreInfoModal: (newData: string) => set({moreInfoModalIndex: newData}),
    clearMoreInfoModal: () => set({moreInfoModalIndex: null}),
}))