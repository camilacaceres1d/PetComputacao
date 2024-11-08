import Navbar from "./../components/Navbar/Navbar";
import News from "./../components/News/News";
import Footer from "./../components/Footer/Footer";
import "./Projetos.css";
import Card from './../components/Card/Card'
import Proj1 from './../assets/images/Proj1.jpg'
import Proj2 from './../assets/images/Proj2.png'
import Proj3 from './../assets/images/Proj3.png'
import Proj4 from './../assets/images/Proj4.png'
import Proj5 from './../assets/images/Proj5.png'
import Proj6 from './../assets/images/Proj6.jpg'
import Proj7 from './../assets/images/Proj7.jpg'
import Proj8 from './../assets/images/Proj8.jpg'
import Proj9 from './../assets/images/Proj9.jpg'

function Projetos(){

    return (
      <>
      <Navbar/>
      <div className = "sobre-container">
      <div class = "box-sobre" > 
        <div class="title-sobre">
            <h1>Projetos</h1>
        </div>
        <div class = "itens" >
            <article>
            
            <Card 
              title="Green Computing" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj1} 
            />
            
            <Card 
              title="Impressora 3D" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj2} 
            /> 
            <Card 
              title="Fisioterapia 3D" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj3} 
            />
            <Card 
              title="Drone" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj4} 
            />
            <Card 
              title="Neutralidade Algoritma" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj5} 
            />

            <Card 
              title="Marketing Comunicação" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj6} 
            />
            <Card 
              title="Recondicionamento Celulares" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj7} 
            />
            <Card 
              title="CinePet" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj8} 
            />
            <Card 
              title="BioInfo" 
              content="Este é o conteúdo do primeiro card." 
              imageUrl={Proj9} 
            />

            </article>
        </div>
    </div>
</div>
      <News/>
      <Footer/>
      </>
    );
}
export default Projetos;