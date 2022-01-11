import { Box, Image, Heading, Text } from "@chakra-ui/react";
import apolloClient from "../../lib/apollo";
import { GET_ALL_CHARACTERS, GET_CHARACTER } from "../../lib/queries";

export default function Character({ data }) {
  const { character } = data;

  return (
    <Box>
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
    </Box>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: GET_ALL_CHARACTERS,
  });

  const paths = data.characters.results.map((character) => ({
    params: { id: character.id },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: GET_CHARACTER,
    variables: { id: params.id },
  });

  return {
    props: {
      data,
    },
  };
}
