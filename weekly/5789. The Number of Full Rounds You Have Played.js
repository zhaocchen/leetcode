/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
 var numberOfRounds = function(startTime, finishTime) {
    let p1 = Math.ceil(toMinutes(startTime) / 15);
    let p2 = Math.floor(toMinutes(finishTime) / 15);

    if (p1 > p2) {
        p2 += 24 * 60 / 15;
    }

    let ans = p2 - p1;
    return ans;
};

function toMinutes(time) {
    let [h, m] = time.split(':');
    return Number(h) * 60 + Number(m);
}

// console.log(toMinutes("12:01"));
console.log(numberOfRounds("12:01", "12:44"));
console.log(numberOfRounds("20:00", "06:00"));
console.log(numberOfRounds("00:00", "23:59"));
// 1
// 40
// 95