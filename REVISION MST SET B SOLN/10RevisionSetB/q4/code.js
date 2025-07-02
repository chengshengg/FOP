function longestLostConnection(connectionStatus) {
    const result = [0, -1];
    let temp = undefined;
    for (let i = 0; i < connectionStatus.length; i++) {
        if (connectionStatus[i] === 1) {
            if (temp !== undefined) {
                if (i - 1 - temp > result[1] - result[0]) {
                    result[0] = temp;
                    result[1] = i - 1;
                }
            }
            temp = undefined;
        } else if (temp === undefined) {
            temp = i;
        } else {
            // do nothing
        }
    }
    if (connectionStatus.length - 1 - temp > result[1] - result[0]) {
        result[0] = temp;
        result[1] = connectionStatus.length - 1;
    }
    return result;
}

// Your own test cases
// e.g.;

console.log(longestLostConnection([1, 0, 0, 1, 0, 0, 0, 1, 0])); // [4, 6]

module.exports = longestLostConnection;
