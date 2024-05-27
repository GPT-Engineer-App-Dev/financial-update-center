import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="brand.800" color="white" p={4} align="center">
        <Heading size="lg">Financial Times</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#news" fontSize="lg" _hover={{ textDecoration: "underline" }}>News</Link>
          <Link href="#markets" fontSize="lg" _hover={{ textDecoration: "underline" }}>Markets</Link>
          <Link href="#about" fontSize="lg" _hover={{ textDecoration: "underline" }}>About</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8} align="stretch">
        <Box id="news">
          <Heading size="md" mb={4}><FaNewspaper /> News Articles</Heading>
          <Text>Latest news articles will be displayed here...</Text>
        </Box>

        <Box id="markets">
          <Heading size="md" mb={4}><FaChartLine /> Market Data</Heading>
          <Text>Market data will be displayed here...</Text>
        </Box>

        <Box id="about">
          <Heading size="md" mb={4}><FaInfoCircle /> About Us</Heading>
          <Text>Information about the Financial Times will be displayed here...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;