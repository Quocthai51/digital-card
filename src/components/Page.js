import Info from "./Info";
import Interests from "./Interests";
import About from "./About";
import Footer from "./Footer";

function Page() {
  return (
    <div className="Outside">
      <div className="Main--Card">
        <Info />
        <About />
        <Interests/>
        <Footer/>
      </div>
    </div>
  );
}

export default Page;
