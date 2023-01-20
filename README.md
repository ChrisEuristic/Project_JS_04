# 부산대학교 K-Digital 2기
### Project_JS_04
* 마우스오버시 이미지 체인지 및 CSS 수정 스크립트 만들어보기
* 부산의 상징 과제 링크 : https://chriseuristic.github.io/Project_JS_04/
***
### HTML DOM 객체의 속성 변경 방법
```javascript
    const imgView1 = document.querySelector("#imgView1");
    imgView1.setAttribute("src", "./images/cityFlower.png"); // HTML DOM 객체의 속성 변경 메소드("속성 이름", "속성 값");
```
<br>

### 이벤트 리스너 헛갈리기 쉬운 사용 방법 2가지
```javascript
    const showAnimal = (int) => { ... };
    const imgIcon1 = document.querySelector("#imgIcon1");
    
    // 콜백함수로 리스너를 동작시키는 경우.
    imgIcon1.addEventListener("mouseover", () => { ... });
    
    // 기 정의된 함수로 리스너를 동작시키는 경우.
    imgIcon1.addEventListener("mouseover", () => showAnimal(0));
    
    // 아래는 정상 동작하지 않음.
    // 리스너는 반드시 콜백의 형태를 취해야 함.
    imgIcon1.addEventListener("mouseover", showAnimal(0));
```
