//DON'T PANIC IF IT'S HARD TO REMEMBER, YOU CAN COME BACK HERE
//MAKE SURE OPEN IT IN A BROWSER WINDOW, YOU CAN RUN index.html
//window

const cat = {
    name: "cat",
    color: "grey",
    breed: "persian cat",
    meow() {
      console.log(`${this.color} ${this.breed} cats are amazing`)
    },
    bark(){
      
    },
    thisIs: `this is ${this}`,
  }
  
  cat.meow()
  
  
  console.log(cat.thisIs)
  
  // // welcome to javascript :)
  console.log(this)