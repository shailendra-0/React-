import React from "react";
import UserContext from "./UserContext";

//divs are children genereic name children is


const UserContextProvider= ({children})=>{
  const [user,setUser]=React.useState(null)
  return (
<UserContext.Provider value={{user,setUser}}>

{children}

</UserContext.Provider>


  )
}    

export default UserContextProvider