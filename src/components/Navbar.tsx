import { Header, Box, Flex, Image } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import img_1 from "../assets/img_1.svg";
import twitter from "../assets/icons8-twitter-144.svg";
import facebook from "../assets/icons8-facebook-144.svg";
import instagram from "../assets/icons8-instagram-144.svg";
import "../App.css";

const Navbar = () => {
    return (
        <Header
            height={{ base: 64 }}
            // bg={"transparent"}
            bg={"rgba(0,0,0,0)"}
            pt={37}
            pl={40}
            pr={34}
            withBorder={false}
            fixed
            className="gradientNavbar"
            sx={(theme) => ({
                background: theme.fn.linearGradient(
                    0,
                    "shadow.1",
                    "shadow.0",
                    "shadow.1"
                )
            })}
        >
            <Box w={1920} maw={"95vw"} h={"20%"} mt={0} mx={"auto"}>
                <Flex
                    h={"25%"}
                    w={"100%"}
                    justify="space-between"
                    align={"center"}
                >
                    <NavLink to={"/"}>
                        <Image maw={75} mx={"auto"} src={img_1} />
                    </NavLink>

                    <Flex gap={26}>
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
            </Box>
        </Header>
    );
};

export default Navbar;
