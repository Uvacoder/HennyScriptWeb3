import { Container, Heading, HStack, Stack, Tag } from "@chakra-ui/react";

function NavBar() {
  return (
    <Stack w="100%" py="6" bg="gray.800" justify="space-between" direction="row">
      <Container maxW="3xl">
        <HStack justify="space-between" spacing="4">
          <Heading size="md">Solana - Explorer</Heading>
          <Tag size="lg" color="gray.50">
            MainNet
          </Tag>
        </HStack>
      </Container>
    </Stack>
  );
}

export default NavBar;
