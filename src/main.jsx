import ReactDOM from 'react-dom/client'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from './pages/Projetos';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import Certificados from './pages/Certificados';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/PetComputacao/",
    element: <Home/>,
    //errorElement:
  },
  {
    path: "/PetComputacao/sobre",
    element: <Sobre/>,
    //errorElement:
  },
  {
    path: "/PetComputacao/projetos",
    element: <Projetos/>,
    //errorElement:
  },
  {
    path: "/PetComputacao/galeria",
    element: <Galeria/>,
    //errorElement:
  },
  {
    path: "/PetComputacao/certificados",
    element: <Certificados/>,
    //errorElement:

  },
  {
    path: "/PetComputacao/contatos",
    element: <Contato/>,
    //errorElement:

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
