import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {

  const {id}=useParams()
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <section className=" grid grid-cols-4">
        <div className=" col-span-3">
        <h2 className="text-3xl">News Details</h2>
        <p>{id}</p>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;