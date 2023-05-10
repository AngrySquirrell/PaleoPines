import { Center } from "@mantine/core";
import ArtGallery from "../components/Home/ArtGallery";
import ExtendedHeader from "../components/Home/ExtendedHeader";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import News from "../components/Home/News";
import Photos_Texts from "../components/Home/Photo&Text";

const Home = () => {
    return (
        <>
            <Navbar />
            <ExtendedHeader />
            <Center h={"fit-content"} px={"40px"} pt={17} pb={35}>
                <News />
            </Center>
            <Photos_Texts />
            <ArtGallery />
            <Footer />
        </>
    );
};

export default Home;
