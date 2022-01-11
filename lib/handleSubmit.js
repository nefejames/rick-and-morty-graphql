export default async function handleSubmit(toast, search, setCharacters) {
  const results = await fetch("/api/search-characters", {
    method: "post",
    body: search,
  });

  const { characters, error } = await results.json();

  if (error) {
    toast({
      position: "bottom",
      title: "An error occurred.",
      description: error,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  } else {
    setCharacters(characters);
  }
}
