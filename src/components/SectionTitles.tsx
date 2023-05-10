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
    FlexProps,
    TextProps,
} from "@mantine/core";

interface Props {
    children?: React.ReactNode;
    ts?: TextProps;
    fs?: FlexProps;
}

const SectionTitles = ({ children = "Placeholder", ts, fs }: Props) => {
    return (
        <Flex justify={"center"} align={"center"} w={"100%"} h={92} {...fs}>
            <Text
                {...ts}
                sx={(theme) => ({
                    textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
                })}
            >
                {children}
            </Text>
        </Flex>
    );
};

export default SectionTitles;
