//Lets get this game started

const food = document.querySelector('#yumScore')

class Butterfly {
  constructor(food, sleep, play, grow) {
    this.food = food
    this.sleep= sleep
    this.play = play
    this.grow= grow
  }
  hungry(){
    this.food+= 1
    alert("Yummy in my tummy")

  }
  tired(){
    this.sleep+=1
  }
  bored(){
    this.play+=1
  }
  morph(){
    this.grow+=1
  }
}

food.addEventListener("click"){
console.log("omg im so hungry");
alert("keep the food coming")
}
food.addEventListener()
