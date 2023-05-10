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
    Divider,
} from "@mantine/core";
import twitter from "../../assets/icons8-twitter-144.svg";
import facebook from "../../assets/icons8-facebook-144.svg";
import instagram from "../../assets/icons8-instagram-144.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
    const matchMD = useMediaQuery("(max-width: 840px)");
    const matchS = useMediaQuery("(max-width: 520px)");
    return (
        <Flex direction={"column"} w={"100%"}>
            <Flex
                justify={"space-between"}
                align={"center"}
                bg={"paleOrange.0"}
                h={67}
                w={"100%"}
            >
                <Text
                    color="white"
                    align="center"
                    ta={"center"}
                    weight={700}
                    size={16}
                    ml={40}
                >
                    Come and join us with our socials
                </Text>
                <Flex gap={26} mr={40}>
                    <Link to={"#"}>
                        <Image maw={39} mx={"auto"} src={twitter} />
                    </Link>
                    <Link to={"#"}>
                        <Image maw={37} mx={"auto"} src={facebook} />
                    </Link>
                    <Link to={"#"}>
                        <Image maw={39} mx={"auto"} src={instagram} />
                    </Link>
                </Flex>
            </Flex>
            <Flex wrap={"wrap"} bg={"paleoGreen.0"} justify={"center"} gap={35}>
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    w={227}
                    py={30}
                >
                    <Text size={26} c={"white"}>
                        CONTACT
                    </Text>
                    <Text size={16} c={"white"}>
                        lorem@lorem.com
                    </Text>
                    <Text size={16} c={"white"}>
                        @paleopines
                    </Text>
                    <Text size={16} c={"white"}>
                        +33 01 02 03 04 05
                    </Text>
                </Flex>
                <Divider
                    size={"xs"}
                    orientation="vertical"
                    my={24}
                    c={"white"}
                    display={matchS ? "none" : "block"}
                />
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    w={227}
                    py={30}
                >
                    <Text size={26} c={"white"}>
                        CONTACT
                    </Text>
                    <Text size={16} c={"white"}>
                        lorem@lorem.com
                    </Text>
                    <Text size={16} c={"white"}>
                        @paleopines
                    </Text>
                    <Text size={16} c={"white"}>
                        +33 01 02 03 04 05
                    </Text>
                </Flex>
                <Divider
                    size={"xs"}
                    orientation="vertical"
                    my={24}
                    c={"white"}
                    display={matchMD ? "none" : "block"}
                />
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    w={227}
                    py={30}
                >
                    <Text size={26} c={"white"}>
                        CONTACT
                    </Text>
                    <Text size={16} c={"white"}>
                        lorem@lorem.com
                    </Text>
                    <Text size={16} c={"white"}>
                        @paleopines
                    </Text>
                    <Text size={16} c={"white"}>
                        +33 01 02 03 04 05
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;
