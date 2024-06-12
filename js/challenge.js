document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let plusButton = document.getElementById("plus");
    let minusButton = document.getElementById("minus");
    let likeButton = document.getElementById("heart");
    let pauseButton = document.getElementById("pause");
    let likesList = document.querySelector(".likes");
  
    let intervalId;
    let likes = {};
    let isPaused = false;
  
    plusButton.addEventListener("click", () => {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    minusButton.addEventListener("click", () => {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    likeButton.addEventListener("click", () => {
      let currentNumber = counter.innerText;
      if (likes[currentNumber]) {
        likes[currentNumber] += 1;
        let existingLike = document.getElementById(`like-${currentNumber}`);
        existingLike.innerText = `${currentNumber} has been liked ${likes[currentNumber]} times`;
      } else {
        likes[currentNumber] = 1;
        let newLike = document.createElement("li");
        newLike.id = `like-${currentNumber}`;
        newLike.innerText = `${currentNumber} has been liked ${likes[currentNumber]} time`;
        likesList.appendChild(newLike);
      }
    });
  
    pauseButton.addEventListener("click", () => {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(intervalId);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.innerText = "Resume";
      } else {
        intervalId = setInterval(() => {
          counter.innerText = parseInt(counter.innerText) + 1;
        }, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = "Pause";
      }
    });
  
    intervalId = setInterval(() => {
      if (!isPaused) {
        counter.innerText = parseInt(counter.innerText) + 1;
      }
    }, 1000);
  });