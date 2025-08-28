// console.log("Hello Conntected")

//  Heart Count Part Start

function heartCount() {
  // star mark Count start
  document
    .getElementById("parent-card")
    .addEventListener("click", function (e) {
      // console.log(e.target)

      if (e.target.className.includes("heart-icon")) {
        // alert("card clicked");
        let heart = parseInt(document.getElementById("heart").innerText);
        // console.log(heart)
        document.getElementById("heart").innerText = heart + 1;
      }
    });
}

//  Heart Count Part End

//Make Cart Part Start



//Make Cart Part Start

// Function Calling Part Start 

heartCount();


// Function Calling Part End
