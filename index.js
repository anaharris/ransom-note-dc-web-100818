function binaryMatch(letter) {
  let histogram = buildHistogram(magazine)
  return histogram[letter]
}

function buildHistogram(magazine) {
  let result = {}
  magazine.forEach(letter => {
    result[letter] ? result[letter] += 1 : result[letter] = 1
  })
  return result
}

function canBuildNote(magazine, note) {
  let noteStr
  note.includes(' ') ? noteStr = note.replace(/ /g,"") : noteStr = note
  if (noteStr.length > magazine.length) {
    return false
  }
  
}


//worst case, this solution has O(m) run-time. Average case, the solution has O(n) run-time where m is the length of the magazine and n is the length of the note.
//assumes note is a string with not spaces.

// function canBuildNote(mag, note){
//   if(note.length > mag.length){
//     return false
//   }
//   let hash = {}
//   let magIndex = 0
//   for(let noteIndex = 0; noteIndex<note.length; noteIndex++){
//     if(hash[note[noteIndex]]){
//       hash[note[noteIndex]] = hash[note[noteIndex]]-1
//       if(hash[note[noteIndex]] < 0){
//         return false
//       }
//     }else{
//       while(note[noteIndex] != mag[magIndex]){
//         hash[mag[magIndex]] = hash[mag[magIndex]]+1 || 1
//         magIndex++
//         if(magIndex >= mag.length){
//           return false
//         }
//       }
//       magIndex++
//     }
//   }
//   return true
// }
