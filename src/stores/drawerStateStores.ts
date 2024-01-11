import {create} from "zustand";

interface DrawerState {
    open: boolean,
    setOpen: (state:boolean) => void;
}

const useDrawerStateStore = create<DrawerState>((set) => ({
    open: false,
    setOpen: (state) => set({open:state}),
}));

export default useDrawerStateStore;
