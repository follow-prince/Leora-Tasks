import NavBar from "./layouts/NavBar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Content />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
