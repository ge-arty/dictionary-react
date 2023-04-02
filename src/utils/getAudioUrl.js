export const getAudioUrl = (data) => {
  let foundAudio = false;
  if (data) {
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
  } else return foundAudio;
};
