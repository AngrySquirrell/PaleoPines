import Navbar from "../components/Navbar";
import ExtendedHeader from "../components/ExtendedHeader";
import {
    Header,
    Box,
    Flex,
    Image,
    Text,
    Button,
    BackgroundImage,
    Center,
} from "@mantine/core";
import News from "../components/News";
import Photos_Texts from "../components/Photo&Text";
import ArtGallery from "../components/ArtGallery";

const Home = () => {
    return (
        <>
            <Navbar />
            <ExtendedHeader />
            <Center h={500} px={"40px"} pt={17} pb={35}>
                <News />
            </Center>
            <Photos_Texts/>
            <ArtGallery/>
        </>
    );
};

export default Home;
