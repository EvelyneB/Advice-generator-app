const btn = document.querySelector(".dice");
const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");

// console.log(btn, adviceId, advice);

function fetchData(){
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((jsonData)=>{
        adviceId.textContent  = 'advice #' + jsonData['slip']['id'];
        advice.textContent  =  '"' + jsonData['slip']['advice'] + '"';
      });
  }
  
  btn.addEventListener("click", fetchData);
  fetchData();
 