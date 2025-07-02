function longestLostConnection(connectionStatus) {
    let maxLength = 0;
    let maxStart = 0;
    let maxEnd = 0;

    let currentStart = null;

    for (let i = 0; i < connectionStatus.length; i++) {
        if (connectionStatus[i] === 0) {
            if (currentStart === null) {
                currentStart = i; // Start of a new 0-sequence
            }

            // Check if this is the end or last element
            if (i === connectionStatus.length - 1 || connectionStatus[i + 1] === 1) {
                let currentEnd = i;
                let currentLength = currentEnd - currentStart + 1;

                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    maxStart = currentStart;
                    maxEnd = currentEnd;
                }

                currentStart = null; // reset for next sequence
            }
        }
    }

    return [maxStart, maxEnd];
}

// Your own test cases
// e.g.;

console.log(longestLostConnection([1, 0, 0, 1, 0, 0, 0, 1, 0])); // [4, 6]

module.exports = longestLostConnection;
