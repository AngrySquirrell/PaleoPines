import { Header, Box, Flex, Image } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import img_1 from "../../assets/img_1.svg";
import twitter from "../../assets/icons8-twitter-144.svg";
import facebook from "../../assets/icons8-facebook-144.svg";
import instagram from "../../assets/icons8-instagram-144.svg";
import "../../App.css";
import { useWindowScroll, useViewportSize } from "@mantine/hooks";

const Navbar = () => {
    const [scroll, scrollTo] = useWindowScroll();
    const { width, height } = useViewportSize();
    return (
        <Header
            height={{ base: 80 }}
            // bg={"transparent"}
            // py={37}
            // pl={40}
            // pr={34}
            withBorder={false}
            fixed
            className={scroll.y <= height ? "gradientNavbar" : "solidNavbar"}
            // sx={(theme) => ({
            //     background: theme.fn.linearGradient(
            //         0,
            //         "shadow.1",
            //         "shadow.0",
            //         "shadow.1"
            //     ),
            // })}
        >
            <Flex
                w={"100%"}
                h={"100%"}
                justify="space-between"
                align={"center"}
            >
                <NavLink to={"/"}>
                    <Image pl={16} maw={75} mx={"auto"} src={img_1} />
                </NavLink>

                <Flex gap={26}>
                    <Link to={"#"}>
                        <Image
                            maw={39}
                            mx={"auto"}
                            src={twitter}
                            sx={{
                                filter:
                                    scroll.y <= height
                                        ? "invert(0)"
                                        : "invert(.8)",
                            }}
                        />
                    </Link>
                    <Link to={"#"}>
                        <Image
                            maw={37}
                            mx={"auto"}
                            src={facebook}
                            sx={{
                                filter:
                                    scroll.y <= height
                                        ? "invert(0)"
                                        : "invert(.8)",
                            }}
                        />
                    </Link>
                    <Link to={"#"}>
                        <Image
                            maw={39}
                            mx={"auto"}
                            src={instagram}
                            sx={{
                                filter:
                                    scroll.y <= height
                                        ? "invert(0)"
                                        : "invert(.8)",
                            }}
                        />
                    </Link>
                </Flex>
            </Flex>
        </Header>
    );
};

export default Navbar;
