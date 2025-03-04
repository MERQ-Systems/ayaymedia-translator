import { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Flex, HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { ColorModeToggler } from ".";
import { Stack, Text } from "@chakra-ui/react";

type Props = {
    [key: string]: any
};

const Header: FC<Props> = (props) => (
    <>
        <Head>
            <link rel="prefetch" href="/mikeintosh.png" />
            <link rel="prefetch" href="/mikeintosh.png" />
        </Head>

        <Flex
            as="header"
            px={1}
            py={3}
            justify="space-around"
            align="center"
            w="full"
            {...props}
        >
            <NextLink href="/" passHref={true}>
                <Link display="flex">
                    <Image
                        //src={useColorModeValue("/banner_light.svg", "/banner_dark.svg")}
                        src={useColorModeValue("/mikeintosh.png", "/mikeintosh.png")}
                        alt="Logo"
                        width={70}
                        height={70}
                    />
                </Link>
            </NextLink>


    <Text style={{ fontSize: 27, color: 'grey', textAlign: 'center' }}>MIKEINTOSH Translator</Text>
            
            <HStack spacing={3}>
                <ColorModeToggler
                    variant={useColorModeValue("outline", "solid")}
                />
                <IconButton
                    as={Link}
                    href="https://github.com/MIKEINTOSHSYSTEMS/mikeintosh-translator"
                    isExternal={true}
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    colorScheme="lingva"
                    variant={useColorModeValue("outline", "solid")}
                />
            </HStack>
        </Flex>
    </>
);

export default Header;
