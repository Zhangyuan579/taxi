function main(km, min) {
    let sum = 6;
    let minsum = min * 0.25;
    if (km <= 2) {
        sum += minsum;
    } else if (km > 2 && km < 8) {
        sum += (km - 2) * 0.8 + minsum;
    } else {
        sum += (km - 7) * (0.8 + 0.8 * 0.5) + (7 - 2) * 0.8 + minsum;
    }
    return Math.round(sum);
    //四舍五入
};
module.exports = main;