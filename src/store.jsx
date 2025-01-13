import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


export const useUserStore = create(
    persist(
        (set) => ({
            login: [],
            setLogin: (data) => set({ login: data }),
        }),
        {
            name: 'auth-token',
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({ login: state.login }),
        }
    )
);


export const loginStore = (data) => {
    const { setLogin } = useUserStore.getState();
    setLogin(data);
};
