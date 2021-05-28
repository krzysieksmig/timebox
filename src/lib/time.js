function convertSecondsToTimer(durationInSeconds){
    const hours = Math.floor(durationInSeconds / 60/ 60)
    const minutes = Math.floor(durationInSeconds / 60% 60);
    const seconds = Math.floor(durationInSeconds % 60);
    const miliseconds = ((durationInSeconds%1).toFixed(3))*10;
    return [hours, minutes, seconds, miliseconds]
};

export default convertSecondsToTimer;
