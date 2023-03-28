export const getWord = async (word) => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
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
