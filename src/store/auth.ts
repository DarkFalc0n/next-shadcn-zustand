import { create } from 'zustand';
import { type TUser } from '@/lib/types';

type AuthStore = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));

export { useAuthStore };
