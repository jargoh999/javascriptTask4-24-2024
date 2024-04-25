class Shape{

constructor(name){
        this.name = name;
}

getName(){
    return this.name;
}

}

class Rectangle extends Shape{

    constructor(name,side1,side2,isSquare){
                  super(name);
                  this.side1=side1;
                  this.side2=side2;
                  this.isSquare=isSquare;
    }
                              
      getArea(){
    return 0.5*this.side1*this.side2;
      }         


      isItSquare(){
        return this.isSquare;
    }

    
}

class Square extends Shape{

    constructor(name,side1,side2,isSquare){
                  super(name);
                  this.side1=side1;
                  this.side2=side2;
                  this.isSquare=isSquare;
    }
                              
      getArea(){
    return this.side1*this.side2;
      }         


      isItSquare(){
        return this.isSquare;
    }

    
}







