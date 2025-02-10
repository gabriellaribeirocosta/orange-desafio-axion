import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

interface User {
  id: string;
  username: string;
}

export const isAuthenticated = () => {
  const token = Cookies.get('token');
  if (!token) return false;

  try {
    const decoded = jwtDecode<User>(token);
    return !!decoded;
  } catch (error) {
    console.error('Token inválido:', error);
    return false;
  }
};

export const getUserFromToken = (): User | null => {
  const token = Cookies.get('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode<User>(token);
    return decoded;
  } catch (error) {
    console.error('Token inválido:', error);
    return null;
  }
};