import Footer from "./Footer";
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="relative">
        <div className=" px-layout-padding">{children}</div>
        <div className="absolute top-0 left-0 w-layout-padding h-64 ">
          <LeftSide />
        </div>
        <div className="absolute top-0 right-0 w-layout-padding h-96">
          <RightSide />
        </div>
      </div>
      <Footer />
    </div>
  );
}
