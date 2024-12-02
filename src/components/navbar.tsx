import { useRef } from "react";
import { NavLink } from "react-router";

export  default function Header({currentRoute}:{currentRoute:string}){
  const verticalMenu = useRef<HTMLDivElement>(null);

  const btnMenu = ()=>{
    if(verticalMenu.current){
      verticalMenu.current.style.transform = "translateY(0%)"; 
    }
  }

  const btnClose = ()=>{
    if(verticalMenu.current){
      verticalMenu.current.style.transform = "translateY(-100%)";
    }
  }

  return (
    <>
      <div ref={verticalMenu} className="menu-vertical" id="menu-vertical">
          <div className="logo">
              <h1>Logo</h1>
              <button
                onClick={btnClose} 
                type="button"
                id="btnclose">
                x
              </button>
          </div>
          <div className="links">
              <NavLink to="" id="inicial">Home</NavLink>
              <NavLink to="">Serviços</NavLink>
              <NavLink to="">Sobre</NavLink>
              <NavLink to="">Ajuda</NavLink>
          </div>
      </div>
      <header>
          <div className="logo">
              <h1>Logo</h1>
          </div>
          <nav>
            <NavLink to="/" id={currentRoute === "home"?"inicial":""}>Home</NavLink>
            <NavLink to="/service" id={currentRoute === "service"?"inicial":""}>Serviços</NavLink>
            <NavLink to="/about" id={currentRoute === "about"?"inicial":""}>Sobre</NavLink>
            <NavLink to="/help" id={currentRoute === "help"?"inicial":""}>Ajuda</NavLink>
          </nav>
          <nav>
              <NavLink to="">Contact</NavLink>
              <NavLink to="" id="getstart">Get start</NavLink>
          </nav>
          <button
            onClick={btnMenu} 
            type="button" 
            id="btnmenu">
            Menu
          </button>
      </header>
    </>

  )
}