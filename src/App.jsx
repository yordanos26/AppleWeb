import "./CSS/bootstrap.css";
import "./CSS/styles.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert/Alert";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionFive from "./Components/SectionFive/SectionFive";
import SectionSix from "./Components/SectionSix/SectionSix";
function App() {
  return (
    <>
      <Header />
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

export default App;
