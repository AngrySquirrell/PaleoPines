import { Flex } from "@mantine/core";
import img1 from "../../assets/photos&texts/photo1.svg";
import img2 from "../../assets/photos&texts/photo2.svg";
import img3 from "../../assets/photos&texts/photo3.svg";
import AlternateDivs from "../AlternateDivs";
import SectionTitles from "../SectionTitles";

const Photos_Texts = () => {
    let divs = [
        {
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            img: img1,
        },
        {
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            img: img2,
        },
        {
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            img: img3,
        },
    ];

    return (
        <Flex
            direction={"column"}
            w={"100%"}
            h={"fit-content"}
            bg={"paleoGreen.0"}
            gap={86}
        >
            <SectionTitles
                ts={{
                    weight: 700,
                    size: 40,
                    color: "white",
                    lineClamp: 5,
                }}
                fs={{ py: 24 }}
            >
                Lorem ipsum dolor sit ame
            </SectionTitles>
            {divs.map((el, i) => (
                <AlternateDivs data={el} i={i} />
            ))}
        </Flex>
    );
};

export default Photos_Texts;
