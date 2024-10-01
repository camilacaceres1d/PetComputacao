
import logoPetSite from "../assets/images/logoPetSite.png";

import './Navbar.css';
const Navbar = () =>  {
    return (
      <div className="mainContainer">
        <div className="logoPet">
          <img src = {logoPetSite} alt = "" />
        </div>
        <div>  
          <nav className =  "Nav" >
            <ul className = "menu">
                <li className = "navItem">
                    <p>Início</p>
                </li>
                <li className = "navItem">
                    <p>Sobre</p>
              </li>
              <li className = "navItem">
                 <p>Projetos</p>
              </li>
              <li  className = "navItem">
                 <p>Cerificados</p>
              </li>
              <li  className = "navItem">
                 <p>Galeria</p>
              </li>
              <li  className = "navItem">
                 <p>Contatos</p>
              </li>
            </ul>
    </nav>
    </div>
       
   
      </div>
        

        

        



       
  );
}
export default Navbar;