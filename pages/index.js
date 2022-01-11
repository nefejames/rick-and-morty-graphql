import { useState } from "react";
import { Heading, Box, Flex, SimpleGrid } from "@chakra-ui/react";

import Form from "../components/Form";
import { GET_ALL_CHARACTERS } from "../lib/queries";

import CharacterCard from "../components/CharacterCard";
import apolloClient from "../lib/apollo";

export default function Home({ charactersData }) {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(charactersData);

  return (
    <Flex>
      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Rick and Morty
        </Heading>
        <Form
          intialCharactersState={charactersData}
          search={search}
          setSearch={setSearch}
          setCharacters={setCharacters}
        />

        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          {characters.map((character) => (
            <CharacterCard character={character} />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: GET_ALL_CHARACTERS,
  });

  return {
    props: {
      charactersData: data.characters.results,
    },
  };
}
