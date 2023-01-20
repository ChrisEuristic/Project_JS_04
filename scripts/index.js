// 여기부터 수업 내용
/*
const showFlower = () => {
  const imgView1 = document.querySelector("#imgView1");
  const txtWrap = document.querySelector(".txtWrap");
  const imgViewText = document.querySelector("#imgViewText");
  imgViewText.innerHTML = "동백꽃";
  imgView1.setAttribute("src", "./images/cityFlower.png");
  
  txtWrap.style.display = "block";
};

const showBird = () => {
  const imgView1 = document.querySelector("#imgView1");
  const txtWrap = document.querySelector(".txtWrap");
  const imgViewText = document.querySelector("#imgViewText");
  imgViewText.innerHTML = "갈매기";
  imgView1.setAttribute("src", "./images/cityBird.png");
};

const showFish = () => {
  const imgView1 = document.querySelector("#imgView1");
  const txtWrap = document.querySelector(".txtWrap");
  const imgViewText = document.querySelector("#imgViewText");
  imgViewText.innerHTML = "고등어";
  imgView1.setAttribute("src", "./images/cityFish.png");
};

document.addEventListener("DOMContentLoaded", () => {
  const imgIcon1 = document.querySelector("#imgIcon1");
  const imgIcon2 = document.querySelector("#imgIcon2");
  const imgIcon3 = document.querySelector("#imgIcon3");

  imgIcon1.addEventListener("mouseover", showFlower);
  imgIcon2.addEventListener("mouseover", showBird);
  imgIcon3.addEventListener("mouseover", showFish);
});
*/

// 여기부터 수업 내용2. 반복되는 코드 줄이기.
const showAnimal = (index) => {
  const pngName = ['cityFlower', 'cityBird', 'cityFish'];
  const flowerName = ['동백꽃', '갈매기', '고등어'];
  const imgView1 = document.querySelector("#imgView1");
  const txtWrap = document.querySelector(".txtWrap");
  const imgViewText = document.querySelector("#imgViewText");
  imgViewText.innerHTML = flowerName[index];
  imgView1.setAttribute("src", `./images/${pngName[index]}.png`);
  txtWrap.style.display = "block";
};

document.addEventListener("DOMContentLoaded", () => {
  /*
  const imgIcon1 = document.querySelector("#imgIcon1");
  const imgIcon2 = document.querySelector("#imgIcon2");
  const imgIcon3 = document.querySelector("#imgIcon3");
  imgIcon1.addEventListener("mouseover", () => showAnimal(0));
  imgIcon2.addEventListener("mouseover", () => showAnimal(1));
  imgIcon3.addEventListener("mouseover", () => showAnimal(2));*/

  const imageIconItems = document.querySelectorAll(".imgIconItem");

  for (let [k, item] of imageIconItems.entries()) {
    item.addEventListener("mouseover", () => showAnimal(k));
    console.log(k, " => ", item);
  }
});