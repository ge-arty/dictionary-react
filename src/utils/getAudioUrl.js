export const getAudioUrl = (data) => {
  for (let i = 0; i <= data.phonetics.length; i++) {
    if (data.phonetics[i].audio) {
      return data.phonetics[i].audio;
      break;
    }
  }
};
