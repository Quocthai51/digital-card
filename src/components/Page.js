import Info from "./Info";
import Interests from "./Interests";


function Page() {
  return (
    <div className="Outside">
      <div className="Main--Card">
        <Info />
        <Interests/>
      </div>
    </div>
  );
}

export default Page;
