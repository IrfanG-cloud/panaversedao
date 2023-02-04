import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://img.freepik.com/free-photo/man-wearing-virtual-reality-gadget-with-copy-space_23-2148864952.jpg?w=1380&t=st=1675333883~exp=1675334483~hmac=aa655b4769a7448929f9b1f42aa2b5fc93f1195096036d42482758d3bedf92de)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, lg: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'5xl'} align={'flex-start'} spacing={6} >
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '5xl', lg: '5xl' })}>
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </Text>
            <Text
              color={'white'}
              fontWeight={100}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', sm: '2xl' })}
              >
             Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
            </Text>
            <Stack direction={'row'} >
              <Button
                bg={'white'}
                mt='50'
               textAlign={'center'}
                rounded={'full'}
                color={'black'}
                _hover={{ 
                bg: 'white'}}>
                APPLY
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }