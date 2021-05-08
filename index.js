// Your code here
const dodger = document.getElementById("dodger"); 
document.addEventListener("keydown", function(event) {
    console.log(event);
  }); 

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      dodger.style.left = `${left - 1}px`;
    }
  });  

 
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  

  document.addEventListener("keydown", function(event) {
  //document.addEventListener("keyup", function(event) {
    console.log(event);
  }); 

  document.addEventListener("keydown", function(event) {
  // document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight") {
      const rightNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(rightNumbers, 10);

      dodger.style.left = `${left + 1}px`;
    }
  }); 
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 

// So in the orginal coding for this, I had made a few mistakes not knowing what I did wrong. 
// I spent hours and days trying wrap my head around what I was doing wrong. 
// For context, the arrow key had to be pressed continuously inorder for the rock slider to move, 
// So I went back in trying for the life of me, figuring out what is going on. 
// That's when I managed to see my error, I made the key go up instead of down, causing an issue
// where JS wasn't able to read it as true. My bad! Now, instead of having to continuously 
// click the right arrow key, I can press it down and it can move all on it's own!
  