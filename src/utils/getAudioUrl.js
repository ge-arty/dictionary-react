export const getAudioUrl = (data) => {
  let foundAudio = false;
  for (let i = 0; i < data.phonetics.length; i++) {
    if (data.phonetics[i].audio !== "") {
      foundAudio = data.phonetics[i].audio;
      break;
    }
  }
  if (foundAudio) {
    return foundAudio;
  } else {
    return false;
  }
};
