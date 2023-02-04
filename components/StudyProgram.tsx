import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Button,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={20}
          h={20}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function StudyProgram() {
    return (
      <Container maxW={'7xl'} py={12}>
        <SimpleGrid columns={{ base: 4, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>I want to Study</Heading>
            <Text color={'black'} fontSize={'lg'}>
            The internet is without a doubt the most important technological development in human history. 
            Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by 
            introducing novel features and advancements.
            </Text>

            <Button
                as={"a"}
                maxW={'20'}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"red.600"}
                rounded={'full'}
                href="/register"
                _hover={{
                bg: "black",
                }}>
                MORE
            </Button>
            
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://img.freepik.com/free-photo/asian-young-male-wearing-wearable-goggle-headset-virtual-online-meeting-digital-space-working-with-3d-augmented-dimension-homecyber-virtual-working-with-virtual-vr-goggle-pc-desktop-device_609648-2614.jpg?w=1060&t=st=1675341423~exp=1675342023~hmac=06223169226cdefa643c34735c6d5e5f1fd54dd6a3b18104eae377a27591a549'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }