import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      mx="auto"
      minH="100vh"
      maxW="1100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>{children}</Box>
    </Box>
  );
}
