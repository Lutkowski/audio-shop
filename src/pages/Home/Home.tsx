import Footer from "../../components/Layout/Footer/Footer.tsx";
import Header from "../../components/Layout/Header/Header.tsx";
import ProductSections from "../../components/ProductSections/ProductSections.tsx";
import Wrapper from "../../components/Layout/Wrapper/Wrapper.tsx";

const Home = () => {
    return (
        <Wrapper>
            <Header></Header>
            <ProductSections></ProductSections>
            <Footer></Footer>
        </Wrapper>
    );
};

export default Home;