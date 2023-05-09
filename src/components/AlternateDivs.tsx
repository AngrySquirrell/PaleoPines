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
    data?: {
        title?: string;
        text?: string;
        img?: string;
    };
    i: number;
}

const AlternateDivs = ({ data, i }: Props) => {
    return (
        <Flex justify={"center"} align={"center"} w={"100%"} gap={42}>
            {i % 2 === 0 ? (<Image width={550} src={data?.img} />) : <></>}
                    <Box>
                        <Text
                            align="center"
                            h={44}
                            w={564}
                            color="white"
                            weight={731}
                            size={32}
                        >
                            {data?.title}
                        </Text>
                        <Text
                            lineClamp={5}
                            h={160}
                            w={564}
                            color="white"
                            weight={578}
                            size={20}
                            align="justify"
                        >
                            {data?.text}
                        </Text>
                    </Box>
                    {i % 2 !== 0 ? (<Image width={550} src={data?.img} />) : <></>}
        </Flex>
    );
};

export default AlternateDivs;
