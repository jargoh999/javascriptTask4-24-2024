const { freemem } = require("os");

 function calcStudScore(testScore){
        let newArray = []
              newArray.push(testScore.filter( value => value >= 70))
        return newArray;
}

 function increaseScores(examScores){
    return examScores.map(element => element += 5);           
 }



 function squareScores(examScores){
    return examScores.map(element => element * element);           
 }


const distributeBooks = function distributeBooks(members, books){
 const distribution = {};
    
  for (const [index, member] of members.entries()) {
    distribution[member] = books[index];
}
      return distribution;
}

const classesTaskTime = function filterTime(listOfTime){
               return listOfTime.filter(time=> time.endsWith("PM"))
} 


function calculateTotalExpenses(expenses) {
    let total = 0;
    for (let category in expenses) {
      total += expenses[category];
    }
    return total;
  }


  function findMode(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];
    arr.forEach(number => {
      frequencyMap[number] = (frequencyMap[number] || 0) + 1;
    });
    for (const number in frequencyMap) {
      if (frequencyMap[number] > maxFrequency) {
        maxFrequency = frequencyMap[number];
        modes = [number];
      } else if (frequencyMap[number] === maxFrequency) {
        modes.push(number);
      }
    }
    return modes.length === 1 ? modes[0] : modes;
  }
  


  
  
 
 // console.log(mode)
  

  

  

  

module.exports={calcStudScore,increaseScores,squareScores,distributeBooks,classesTaskTime,calculateTotalExpenses,findMode}    
