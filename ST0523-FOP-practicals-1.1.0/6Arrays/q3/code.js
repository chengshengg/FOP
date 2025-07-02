/**
 * Given a root note, return the notes of the major scale.
 * The major scale is a diatonic scale made up of seven distinct notes.
 * The pattern for a major scale is:
 * 1. Whole step
 * 2. Whole step
 * 3. Half step
 * 4. Whole step
 * 5. Whole step
 * 6. Whole step
 * 7. Half step
 *
 * Examples of half step: C -> C#, D -> D#, F -> F#, G -> G#, A -> A#
 * Examples of whole step: C -> D, D -> E, F -> G, G -> A, A -> B
 * The list of notes are: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 * Note that there is no E# and B#.
 *
 * You can think of whole step as moving two steps to the right and half step as moving one step to the right.
 * The list of notes is circular, so after B, it goes back to C.
 *
 * @param {string} rootNote - The root note of the scale.
 * @returns {string[]} - The notes of the major scale.
 *
 * @example
 * musicScale('C'); // ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
 * musicScale('G'); // ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
 * musicScale('D'); // ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D]
 *
 * @hint
 * Whole step = +2
 * Half step = +1
 * The list of notes are: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 * Whole step:     C-->D
 * Half step :     C->C#
 * Whole step:     E-->F#
 * Half step :     G->G#
 */
// function musicScale(rootNote) {
//     list = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
//     result = []
//     for (i=0; i<12; i++) {
//         if (rootNote == list[i]) {
//             result.push(list[i]) 
//             for (k=2; ; k += 2) {
//                 if (k+i > 11) {
//                     k -= 12
//                 }
//                 result.push(list[i+k])
//                 if (result.length == 3 || result.length == 7) {
//                     k--;
//                 }
//                 if (result.length == 8) {
//                     return result
//                 }
//             }
//         }
//     }
// }

function musicScale(rootNote) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const steps = [2, 2, 1, 2, 2, 2, 1]
    const scale = [rootNote]

    let currentIndex = notes.indexOf(rootNote)
    for (x=0; x<steps.length; x++) {
        // add step value to currentIndex
        // ensure that the currentIndex does not go beyond the scale array
        // add the value of notes[currentIndex] to scale 

        currentIndex += steps[x]
        currentIndex %= notes.length
        // if (currentIndex>11) {
        //    currentIndex -= 12
        // }
        scale.push(notes[currentIndex])
    } return scale
}

// Your own test cases
// e.g.;

console.log(musicScale('C')); // ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

// To test your code against the test cases: node run.js q3
// To test your code against custom input: node ./q3/code.js

module.exports = musicScale;
