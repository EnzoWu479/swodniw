import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import handleError from '`@/utils/handleToast`';
import { useRouter } from 'next/router';
import { IUser } from '`@/types/interfaces`';
import { project_name } from '`@/services/api`';

interface LoginProps {
  email: string;
  password: string;
  remember_me: boolean;
}
interface IUserProvider {
  user: IUser;
  setUser: React.Dispatch<SetStateAction<IUser>>;
  isAuthenticated: () => boolean;
  login: ({ email, password, remember_me }: LoginProps) => Promise<boolean>;
  logout: () => void;
}
const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const dataUser = localStorage.getItem(`@${project_name}: user`) || '';

    if (dataUser) setUser(JSON.parse(dataUser));
    setLoading(false);
  }, []);

  // const isAuthenticated = () => user.id !== undefined;
  const isAuthenticated = () => logged;

  const login = async ({
    email,
    password,
    remember_me,
  }: LoginProps): Promise<boolean> => {
    try {
      // const { data } = await api.post('/user/session', {
      //   email,
      //   password,
      //   remember_me,
      // });
      // // if (data.user.role !== "Master")
      // //   throw new Error("Faça login com uma conta master");
      // localStorage.setItem(`@${project_name}: user`, JSON.stringify(data.user));
      // localStorage.setItem(`@${project_name}: accessToken`, data.access_token);
      // localStorage.setItem(
      //   `@${project_name}: refreshToken`,
      //   data.refresh_token,
      // );
      // setUser(data.user);
      setLogged(true);
      return true;
    } catch (err: any) {
      handleError(err);
      return false;
    }
  };
  const logout = () => {
    localStorage.removeItem(`@${project_name}: user`);
    localStorage.removeItem(`@${project_name}: accessToken`);
    localStorage.removeItem(`@${project_name}: refreshToken`);
    setUser({} as IUser);
    setLogged(false);
    router.push('/');
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
