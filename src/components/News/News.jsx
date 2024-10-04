import "./News.css";
import iconNews from "./../../assets/images/icons8-news-64.png"
const News = () => {
  return (
    <>
    <h1>Notícias</h1>
      <div className="NewsContainer">
        <div className="item-news">
          <img src={iconNews} alt="ícone de notícia"/>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            sed itaque harum quis sit pariatur, amet dicta ut cumque architecto
            ipsum officia dolorum animi porro beatae magni doloribus numquam
            eum!
          </p>
        </div>
        <div className="item-news">
        <img src={iconNews} alt="ícone de notícia"/>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium. Culpa doloremque, dolore cupiditate ratione debitis doloribus hic, ipsam esse, non quisquam magnam aliquam. Deleniti dignissimos tempora velit cupiditate minima!
          </p>
        </div>
        <div className="item-news">
        <img src={iconNews} alt="ícone de notícia"/>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat exercitationem dignissimos accusantium cumque deleniti ipsam, cupiditate velit ullam nam in suscipit illum. Eos iure, sed suscipit corrupti id quaerat nemo?
          </p>
        </div>
      </div>
    </>
  );
};
export default News;
