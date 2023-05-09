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

interface Props {
    children?: React.ReactNode;
    ts?: {
        weight?: number;
        size?: number;
        miw?: string;
        lineClamp?: number;
        color?: string;
        lh?: number;
    };
    fs?: {
        px?: number;
        py?: number;

        mx?: number;
        my?: number;

    };
}

const SectionTitles = ({ children = "Placeholder", ts, fs }: Props) => {
    return (
        <Flex
            justify={"center"}
            align={"center"}
            w={"100%"}
            h={92}
            px={fs?.px}
            py={fs?.py}
            mx={fs?.mx}
            my={fs?.my}
        >
            <Text
                weight={ts?.weight}
                size={ts?.size}
                miw={ts?.miw}
                lineClamp={ts?.lineClamp}
                color={ts?.color}
                lh={ts?.lh}
                sx={(theme) => ({
                    textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
                })
                }
            >
                {children}
            </Text>
        </Flex>
    );
};

export default SectionTitles;
