import { useAuthStore } from '@/store/auth';
import { TUser } from '@/lib/types';

const useUser = () => {
  const { user, setUser } = useAuthStore();
  const handleLogin = (user: TUser) => setUser(user);
  const handleLogout = () => setUser(null);
  return { user, handleLogin, handleLogout };
};

export { useUser };
