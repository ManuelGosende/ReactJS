
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true; // Esta mutación de estado es posible solo porque utilizamos redux toolkit. Sino, deberíamos hacer un return del ...state, isDateModalOpen: true, etc etc
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;

