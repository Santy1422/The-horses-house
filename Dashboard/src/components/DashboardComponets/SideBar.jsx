import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBarLarge from "../reusableComponents/SideBarLarge";
import SideBarSmall from "./SideBarSmall";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Desloguearse from "../AuthComponents/Desloguearse";
import { setSidebarStatus } from "@/redux/reducer/reducerAuth";

const SideBar = () => {
  const [isToggleContest, setIsToggleContest] = useState(false);
  const [isTogglePasadas, setIsTogglePasadas] = useState(false);
  const {loadingAuth, usuarioAuth} = useSelector((state) => state.reducerAuth )
  const sideBarStatus = useSelector((state) => state.reducerAuth.sideBarStatus) //para controlar la apertura y cierre de la sidebar

  const router = useRouter()
  const dispatch= useDispatch()

// console.log('usuarioAuth', usuarioAuth)
  const handleContests = () => {
    setIsToggleContest(!isToggleContest);
  };

  const handlePasadas = () => {
    setIsTogglePasadas(!isTogglePasadas);
  };

  
  const handleDesloguearse = () => {
    Desloguearse(router)        
}

const handleSidebarStatus = () => {
  sideBarStatus === true ? dispatch(setSidebarStatus(false)) : dispatch(setSidebarStatus(true))
}



  return (
    <div className={`h-[100vh] ${sideBarStatus ? "mr-[330px]" : "mr-[75px]"}`}>
      {sideBarStatus ? (
        <SideBarLarge
        usuario={usuarioAuth}
          isToggleContest={isToggleContest}
          isTogglePasadas={isTogglePasadas}
          handleContests={handleContests}
          handlePasadas={handlePasadas}
          close={() => handleSidebarStatus()}
          handleDesloguearse={handleDesloguearse}
        />
      ) : (
        <SideBarSmall usuario={usuarioAuth} open={() => handleSidebarStatus()} handleDesloguearse={handleDesloguearse}/>
      )}
    </div>
  );
};

export default SideBar;
