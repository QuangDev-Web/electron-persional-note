import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { IMainState } from './types';

export const useMainStateStore = create<IMainState>()(
    persist(
        (set) => ({
            active_note: null as any,
            set_state: (title, value) => {
                switch (title) {
                    case 'active_note':
                        set((state) => ({ active_note: value }))
                        break;
                    default:
                        break;
                }
            },
        }),
        {
            name: "main-state-storage",
        },
    )
)