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

function makeCall() {
  document
    .getElementById("parent-card")
    .addEventListener("click", function (e) {
      // console.log(e.target)

      if (e.target.className.includes("call-btn")) {
        const serviceName =
          e.target.parentNode.parentNode.children[0].innerText;
        const serviceNumber =
          e.target.parentNode.parentNode.children[2].innerText;
        const now = new Date();
        let coin = parseInt(document.getElementById("coin").innerText);
        if (coin < 20) {
          alert("You don't have sufficient coin! Need minimum 20 coin to make call.");
          return;
        }
        alert('Calling ' + serviceName + " " + serviceNumber + '...');

        document.getElementById("coin").innerText = coin - 20;

        const callHistoryContainer = document.getElementById(
          "call-history-container"
        );

        const newCallRecord = document.createElement("div");

        newCallRecord.innerHTML = `
        
            <div
              class="flex justify-between items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div>
                <h1 class="font-semibold inter text-lg">${serviceName}</h1>
                <p class="hind text-lg text-[#5c5c5c]">${serviceNumber}</p>
              </div>
              <div>
                <p class="hind text-lg">${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</p>
              </div>
            </div>
        
        `;
        callHistoryContainer.appendChild(newCallRecord);
      }
    });
}

//Make Call Part Start

// Clear call history Part Star

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("call-history-container").innerHTML = "";
});

// Clear call history Part End

// Copy Count Part Start

function copyCount() {
  document
    .getElementById("parent-card")
    .addEventListener("click", function (e) {
      // console.log(e.target)

      if (e.target.className.includes("copy-btn")) {
        let copy = parseInt(document.getElementById("copy").innerText);

        document.getElementById("copy").innerText = copy + 1;
      }

        if (e.target.className.includes("copy-btn")) {
          const serviceNumber =
          e.target.parentNode.parentNode.children[2].innerText;
        const textElement = e.target.parentNode.parentNode.children[2];

        const textToCopy = textElement.textContent;

        if (navigator.clipboard.writeText(textToCopy)) {
          alert("Number has been copied, "+ serviceNumber);
        }
      }
    });
}

// Copy Count Part End

// Function Calling Part Start

heartCount();
makeCall();
copyCount();

// Function Calling Part End
