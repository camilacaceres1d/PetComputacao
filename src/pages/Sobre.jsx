import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import News from "./../components/News/News";
import "./Sobre.css";
function Sobre (){

    return (
      <>
      <Navbar/>
      <div className = "sobre-container">
      <div class = "box-sobre" > 
        <div class="title-sobre">
            <h1>Sobre</h1>
        </div>
        <div class = "text-sobre" >
            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
                </p>
                <p>
                    Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.
                </p>

            </article>
        </div>
    </div>
</div>
      <News/>
      <Footer/>
      </>
    );
}
export default Sobre;