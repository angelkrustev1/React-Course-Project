import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({
    children,
}) {
    const [user, setUser] = usePersistedState('auth', {})

    const userLoginHandler = (authData) => setUser(authData)
    const userLogoutHandler = () => setUser({})

   return (
       <UserContext.Provider value={{ ...user, userLoginHandler, userLogoutHandler }}>
            {children}
       </UserContext.Provider>
   );
}