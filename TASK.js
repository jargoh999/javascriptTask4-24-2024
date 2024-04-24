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
  
  
 


    let spender ={

          "groceries":150,
           "food":500,
           "beans":200
    }  

   
//     const members = ["Emily", "Jack", "Sophia", "Daniel"];
//     console.log(members.entries())
//     const books = ["Book1", "Book2", "Book3", "Book4"];   
//     const membersTime = ["2:00PM","3:00PM","11:00AM"];
//   console.log(distributeBooks(members,books))
//   console.log(classesTaskTime(membersTime));
//   console.log(calculateTotalExpenses(spender))

    module.exports={calcStudScore,increaseScores,squareScores,distributeBooks,classesTaskTime,calculateTotalExpenses}    
