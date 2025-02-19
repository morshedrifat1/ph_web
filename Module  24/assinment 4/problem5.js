function calculateWatchTime(times) {

    for (let t = 0; t < times.length; t++){
        if (typeof times[t] != "number" || typeof times != "object") {
          return "Invalid";
        }
    }


    let totalWatchTime = 0;
    for (let i = 0; i < times.length; i++){
        totalWatchTime = totalWatchTime + times[i];
    }

    let timeFormate = {};
    let hour = Math.floor((totalWatchTime / 60) / 60);
    let minutes = Math.floor((totalWatchTime - (hour * 3600)) / 60);
    let second = Math.floor(totalWatchTime - ((hour * 3600) + (minutes * 60)));

    timeFormate.hour = hour;
    timeFormate.minute = minutes;
    timeFormate.second = second;

    return timeFormate;
}


const watchTime = calculateWatchTime([100, 3800, "90"]);
console.log(watchTime);