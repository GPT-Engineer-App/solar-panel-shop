import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Grid, GridItem, Container, Flex, Icon } from "@chakra-ui/react";
import { FaSun, FaShippingFast, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const SolarPanel = ({ name, description, image, price }) => (
  <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center">
    <Image src={image} alt={name} mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {name}
    </Heading>
    <Text mb={4}>{description}</Text>
    <Text fontWeight="bold" mb={4}>
      Price: ${price}
    </Text>
    <Button colorScheme="blue">Buy Now</Button>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Box bg="blue.500" color="white" py={8}>
        <Container maxW="container.lg">
          <Flex align="center" mb={4}>
            <Icon as={FaSun} boxSize={8} mr={2} />
            <Heading as="h1" size="xl">
              Solar Energy Solutions
            </Heading>
          </Flex>
          <Text fontSize="xl">Harness the power of the sun with our high-quality solar panels. Reduce your carbon footprint and save on energy costs. We ship worldwide!</Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Solar Panels
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem>
            <SolarPanel name="Eco Panel" description="Efficient and affordable solar panel for residential use." image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsfGVufDB8fHx8MTcxMDMzNjUwOXww&ixlib=rb-4.0.3&q=80&w=1080" price={299} />
          </GridItem>
          <GridItem>
            <SolarPanel name="Pro Panel" description="High-performance solar panel for commercial applications." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXIlMjBwYW5lbHxlbnwwfHx8fDE3MTAzMzY2NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" price={599} />
          </GridItem>
          <GridItem>
            <SolarPanel name="Ultra Panel" description="Top-of-the-line solar panel with maximum efficiency." image="https://images.unsplash.com/photo-1583345237708-add35a664d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMHNvbGFyJTIwcGFuZWx8ZW58MHx8fHwxNzEwMzM2NjU0fDA&ixlib=rb-4.0.3&q=80&w=1080" price={999} />
          </GridItem>
        </Grid>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8}>
            <Box>
              <Icon as={FaShippingFast} boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Worldwide Shipping
              </Heading>
              <Text>We ship our solar panels to any destination worldwide. Enjoy fast and reliable delivery.</Text>
            </Box>
            <Box>
              <Icon as={FaPhoneAlt} boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                24/7 Customer Support
              </Heading>
              <Text>Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="xl" mb={8}>
            Have questions or need assistance? Get in touch with us!
          </Text>
          <Button leftIcon={<FaEnvelope />} colorScheme="blue" size="lg" as="a" href="mailto:info@solarenergysolutions.com">
            info@solarenergysolutions.com
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
