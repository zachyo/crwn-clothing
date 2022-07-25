// import { useState } from "react";
import { createContext } from "react";

 const CurrentUserContext = createContext({currentUser : null});

// const CurrentUserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const setUser = setCurrentUser(currentUser);

//   return (
//     <CurrentUserContext.Provider value={{ currentUser, setUser }}>
//       {children}
//     </CurrentUserContext.Provider>
//   );
// };
export default CurrentUserContext;