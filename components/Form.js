import { Input, Stack, useToast, IconButton } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import handleSubmit from "../lib/handleSubmit";

export default function Form({
  intialCharactersState,
  search,
  setSearch,
  setCharacters,
}) {
  const toast = useToast();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(toast, search, setCharacters);
      }}
    >
      <Stack maxWidth="350px" width="100%" isInline mb={8}>
        <Input
          placeholder="Search"
          value={search}
          border="none"
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          disabled={search === ""}
          type="submit"
        />
        <IconButton
          colorScheme="red"
          aria-label="Reset"
          icon={<CloseIcon />}
          disabled={search === ""}
          onClick={async () => {
            setSearch("");
            setCharacters(intialCharactersState);
          }}
        />
      </Stack>
    </form>
  );
}
