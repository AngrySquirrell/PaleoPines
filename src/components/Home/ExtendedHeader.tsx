import React from "react";
import {
    Header,
    Box,
    Flex,
    Image,
    Text,
    Button,
    BackgroundImage,
} from "@mantine/core";
import bgi from "../../assets/BackgroundImage.svg";
import logo from "../../assets/Logo.svg";
import steam from "../../assets/steam_1.svg";
import { NavLink } from "react-router-dom";
import "../../App.css";

const ExtendedHeader = () => {
    return (
        <>
            <Box mih={"100vh"} miw={"100%"} className="gradientHeader">
                <BackgroundImage src={bgi} h={"100vh"}>
                    <Flex
                        direction="column"
                        justify={"space-between"}
                        h={"100%"}
                        sx={(theme) => ({
                            background: theme.fn.linearGradient(
                                0,
                                "rgba(0, 0, 0, 0.54)",
                                "rgba(217, 217, 217, 0)"
                            ),
                        })}
                    >
                        <Flex justify={"center"} pt={60}>
                            <Image src={logo} maw={466} />
                        </Flex>
                        <Flex justify={"space-between"} mt={""} mb={52}>
                            <Text
                                align={"end"}
                                c={"white"}
                                pl={40}
                                weight={"bold"}
                                size={"lg"}
                                lts={"0.015rem"}
                            >
                                Your prehistoric adventure awaits…
                            </Text>
                            <Button
                                component={NavLink}
                                to="/"
                                w={206}
                                h={52}
                                mr={40}
                                leftIcon={
                                    <Image
                                        width={"34px"}
                                        height={"34px"}
                                        maw={34}
                                        src={steam}
                                    />
                                }
                                color="paleOrange.0"
                            >
                                <Text size={"26px"} weight={700}>
                                    Download
                                </Text>
                            </Button>
                        </Flex>
                    </Flex>
                </BackgroundImage>
            </Box>
        </>
    );
};

export default ExtendedHeader;
