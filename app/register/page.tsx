"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("red.500", "red.600")}
    >
      <Stack spacing={8} mx={"auto"} h={"lg"} w={"lg"} py={6} px={12}>
        <Stack align={"left"}>
          <Heading fontSize={"6xl"} color={"white"}>
            Register
          </Heading>
          <Text fontSize={"lg"} color={"white"}>
            Please sign in below.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "black.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>
                Email<Link color="red">*</Link>
              </FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>
                Password<Link color="red">*</Link>
              </FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"red"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"red.600"}
                color={"white"}
                _hover={{
                  bg: "red.400",
                }}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
