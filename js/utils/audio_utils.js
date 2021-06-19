export const attachSinkId = ({ element, sinkId }) => {
  element.setSinkId(sinkId)
    .then(() => {
      console.log(`Success, audio output device attached: ${sinkId} to element with ${element.title} as source.`);
    })
    .catch(error => {
      let errorMessage = error;
      if (error.name === 'SecurityError') {
        errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
      }
      console.error(errorMessage);
    });
}
