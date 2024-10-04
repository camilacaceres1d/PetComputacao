import Navbar from "./../components/Navbar/Navbar";
import Art_graphs from "./../components/Background_Art/Art_graphs";
import Footer from "./../components/Footer/Footer";
import "./Home.css";
import ensino from "./../assets/images/abra-o-livro.png";
import pesquisa from "./../assets/images/big-search-len.png";
import extensao from "./../assets/images/globo.png";
function App() {
  return (
    <>
      <Navbar />
      <Art_graphs />
      <div className="gallery-container">
        <div className="image-item">
          <img
            src={pesquisa}
            alt="Uma lupa que repesenta a pesquisa"
            className="gallery-image"
          />
          <h1 className="text-images">Pesquisa</h1>
          <div className="text-explain">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nam dolorum ab, nesciunt, quia consectetur modi repudiandae, temporibus neque a pariatur? Excepturi neque est, ipsum laboriosam porro error ab provident?

              
            </p>
          </div>
        </div>
        <div className="image-item">
          <img
            src={ensino}
            alt="Um livro, que representa o ensino"
            className="gallery-image"
          />
          <h1 className="text-images">Ensino</h1>
          <div className="text-explain">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores magni provident, illum asperiores amet et sequi reiciendis corrupti. Nulla molestias libero hic, non at minus id illo recusandae quasi!
            </p>
          </div>
        </div>
        <div className="image-item">
          <img
            src={extensao}
            alt="Um glogo terrestre, que representa a atividade com ambientes externos"
            className="gallery-image"
          />
          <h1 className="text-images">Extensão</h1>
          <div className="text-explain">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatem voluptas consequuntur laudantium provident at quas, neque expedita mollitia et dolore deleniti voluptate nihil molestiae corrupti fugit ut quo. Nihil.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
