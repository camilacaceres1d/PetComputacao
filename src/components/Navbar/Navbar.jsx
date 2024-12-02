import {Link} from "react-router-dom";
import logoPetSite from "../../assets/images/logoPetSite.png";
import './Navbar.css';
const Navbar = () =>  {
   //navbar temporário, definitivo será implemtado após a definição das rotas 
    return (
      <div className="nav-container">
        <div className="logoPet">
         <img src = {logoPetSite} alt = "" />
        </div>
        <div>  
          <nav className =  "Nav" >
            <ul className = "menu">
                <li className = "navItem">
                  <p>
                     <Link className = "link" to="/PetComputacao/">Home</Link>
                  </p>

                </li>
              <li className = "navItem">
               <p>
                  <Link className = "link" to="/PetComputacao/sobre">Sobre</Link>
               </p>
              </li>
              <li  className = "navItem">
               <p>
                  <Link className = "link" to="/PetComputacao/projetos">Projetos</Link>
               </p>
              
              </li>
              <li  className = "navItem">
                 <p>
                 <Link className = "link" to="/PetComputacao/certificados">Certificados</Link>
                 </p>
              </li>
              <li  className = "navItem">
                 <p>
                 <Link className = "link" to="/PetComputacao/galeria">Galeria</Link>
                 </p>
              </li>
              <li className = "navItem">
                  <p>
                     <Link className = "link" to="/PetComputacao/contatos">Contatos</Link>   
                  </p>
               </li>   
            </ul>
    </nav>

    </div>
    
   
      </div>
        

        

        



       
  );
}
export default Navbar;