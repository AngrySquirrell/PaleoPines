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
} from "@mantine/core";
import img1 from "../assets/news1.svg";
import img2 from "../assets/news2.svg";
import arrow from "../assets/arrow.svg";

import { NavLink } from "react-router-dom";
import SectionTitles from "../SectionTitles";

const News = () => {
    return (
        <Flex direction={"column"} gap={17}>
            <SectionTitles ts={{weight:700, size:40}} > Development Blog </SectionTitles>
            <Flex gap={24} sx={{ '&media (min-width: 1040px)': {
                display: "flex", direction: "column"
            } }} >
            <Card w={490} h={298} radius={5} bg="paleOrange.0" shadow="xl" >
                    <Card.Section>
                        <Image height={151} width={490} src={img1} />
                    </Card.Section>
                    <Card.Section pt={12} px={27} pb={21}>
                        <Text weight={700} size={24} color="white">
                            Collaboration Announce
                        </Text>
                        <Text weight={400} size={19} miw={"100%"} lineClamp={3} color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. 
                            {/* <Image width={20} src={arrow} /> */}
                        </Text>
                    </Card.Section>
                </Card><Card w={490} h={298} radius={5} bg="paleOrange.0" shadow="xl" >
                    <Card.Section>
                        <Image height={151} width={490} src={img2} />
                    </Card.Section>
                    <Card.Section pt={12} px={27} pb={21}>
                        <Text weight={700} size={24} color="white">
                            Collaboration Announce
                        </Text>
                        <Text weight={400} size={19} miw={"100%"} lineClamp={3} color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. 
                            {/* <Image width={20} src={arrow} /> */}
                        </Text>
                    </Card.Section>
                </Card>
            </Flex>
            <Flex justify={"end"}>
                <Button component={NavLink} to="/" color="paleOrange.0" w={206} h={52} sx={{ "&:hover": { backgroundColor: "paleOrange.1" } }}>
                    <Text weight={700} size={26} lh={29}>
                        Browse News
                    </Text>
                </Button>
            </Flex>
        </Flex>
    );
};

export default News;
