import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import News from "./../components/News/News";
import { Html, Button } from "@react-email/components";
function Contato (){

    return (
      <>
      <Navbar/>
      <div>
      <Html lang="en" dir="ltr">
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Html>
      </div>

      <News/>
      <Footer/>
      </>
    );
}
export default Contato;