import {create} from "zustand";


type state = {
    moreInfoModalIndex: string|null|boolean,
}

type actions = {
    setMoreInfoModal: (state: string) => void,
    clearMoreInfoModal: () => void,
}


export const useMoreInfoStore = create<state & actions>((set) => ({
    moreInfoModalIndex: null,
    setMoreInfoModal: (newData: string) => {
        set({moreInfoModalIndex: false})
        setTimeout(() => set({moreInfoModalIndex: newData}), 10);
    },
    clearMoreInfoModal: () => {
        set({moreInfoModalIndex: false})
        setTimeout(() => set({moreInfoModalIndex: null}), 200);
    },
}))