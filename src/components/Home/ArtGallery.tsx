import React from "react";
import {
    Header,
    Box,
    Flex,
    Image,
    Text,
    Button,
    BackgroundImage,
    Center,
    Card,
    Group,
    AspectRatio,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import SectionTitles from "../SectionTitles";
import img1 from "../assets/ArtGallery/image1.svg";
import arrowL from "../assets/ArtGallery/arrowL.svg";
import arrowR from "../assets/ArtGallery/arrowR.svg";

const ArtGallery = () => {
    return (
        <Flex direction={"column"}>
            <SectionTitles
                ts={{
                    weight: 700,
                    size: 40,
                    color: "dark",
                    lh: 48,
                    lineClamp: 5,
                }}
                fs={{ py: 32 }}
            >
                Art Gallery
            </SectionTitles>
            <Box h={455} w={"100%"}>
                <Carousel
                    slideGap={57}
                    height={"100%"}
                    loop
                    withIndicators
                    previousControlIcon={<Image src={arrowL} />}
                    nextControlIcon={<Image src={arrowR} />}
                    sx={{ controls: { backgroundColor:"rgba(0,0,0,0)" } }}
                >
                    <Carousel.Slide>
                        <Image
                            sx={{
                                filter: "drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25))",
                                borderRadius: 5,
                                width: 780,
                                height: 455,
                                objectFit: "cover",
                            }}
                            src={img1}
                        />
                    </Carousel.Slide>
                </Carousel>
            </Box>
        </Flex>
    );
};

export default ArtGallery;
