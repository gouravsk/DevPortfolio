import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Banner from "../../layouts/banner";
import useMousePosition from "../../components/defalt/new";

const Home = () => {
  const mousePosition = useMousePosition();
  return (
    <>
      <div id="container" className="flex flex-col h-[100vh]">
        <div
          className="circle"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
        <Header />
        <Banner />
        <div className="flex-1">ergh</div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
