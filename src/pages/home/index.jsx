import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Banner from "../../layouts/banner";
const Home = () => (
  <>
    <div id="container" className="flex flex-col h-[100vh]">
      <Header />
      <Banner />
      <div className="flex-1">ergh</div>
      <Footer />
    </div>
  </>
);

export default Home;
