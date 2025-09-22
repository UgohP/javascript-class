class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0 || isNaN(width) || isNaN(height)) {
      console.log("Please enter a positive number");
      return;
    }
    this.width = width;
    this.height = height;
  }

  print(){
    for(let i = 0; i < this.height; i++){
        console.log("X".repeat(this.width))
    }
  }
}
module.exports = Rectangle;
