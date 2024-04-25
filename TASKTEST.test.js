// const { default: test } = require("node:test");
let firstTest= require("./TASK.js")

let score = [70,80,90,50]
let scores = [2,4,6,8] 
    const members = ["Emily", "Jack", "Sophia", "Daniel"];
     const books = ["Book1", "Book2", "Book3", "Book4"];
     const membersTime = ["2:00PM","3:00PM","11:00AM"];  
     let spender ={
        "groceries":150,
         "food":500,
         "beans":200
  }  
test("find high scores",()=>{expect(firstTest.calcStudScore(score)).toEqual([[70,80,90]])})
test("find map for scores",()=>{expect(firstTest.increaseScores(score)).toEqual([75,85,95,55])})
test("find mapSquare for scores",()=>{expect(firstTest.squareScores(scores)).toEqual([4,16,36,64])})
test("distribute books",()=>{expect(firstTest.distributeBooks(members,books)).toEqual({ Emily: 'Book1', Jack: 'Book2', Sophia: 'Book3', Daniel: 'Book4' })})
test("filter time",()=>{expect(firstTest.classesTaskTime(membersTime)).toEqual([ '2:00PM', '3:00PM' ])})
test("calculate expenses",()=>{expect(firstTest.calculateTotalExpenses(spender)).toEqual(850)})
test("find mode ", ()=> {expect(firstTest.findMode(scores)).toEqual( ["2","4", "6", "8"])})