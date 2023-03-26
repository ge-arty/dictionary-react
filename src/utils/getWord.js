export const getWord = async () => {
  try {
    const res = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/table"
    );

    if (!res.ok) {
      console.error(`Couldn't fetch. ,${res.status}`);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error(`Couldn't fetch. ,${error.message}`);
    return false;
  }
};
