import NextLink from "next/link";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

export default function CharacterCard({ character }) {
  return (
    <NextLink key={character.id} href={`/character/${character.id}`}>
      <a>
        <Box>
          <Image
            alt={character.name}
            src={character.image}
            width={300}
            height={300}
            rounded="full"
            objectFit="cover"
          />

          <Box mt="4" textAlign="center">
            <Heading as="h4" align="center" size="md">
              {character.name}
            </Heading>
            <Text>Species: {character.species}</Text>
            <Text>Origin: {character.origin.name}</Text>
            <Text>Location: {character.location.name}</Text>
          </Box>
        </Box>
      </a>
    </NextLink>
  );
}
