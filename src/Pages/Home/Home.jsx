
import { useTitle } from "../../Hooks/useTitle";
import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner";
import Gallery from "./Gallery";
import LatestBlogs from "./LatestBlogs";
import Offer from "./Offer";


const Home = () => {
        useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <AllProducts></AllProducts>
            <Offer></Offer>
            <LatestBlogs></LatestBlogs>

        </div>
    );
};

export default Home;