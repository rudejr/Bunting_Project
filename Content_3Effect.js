function swapDivsOnResize(mediaQuery) {
  const container = document.getElementById("con_point");
  const divElements = [
    document.getElementById("con_point_1"),
    document.getElementById("con_point_2"),
    document.getElementById("con_point_3"),
    document.getElementById("con_point_4"),
    document.getElementById("con_point_5"),
    document.getElementById("con_point_6")
  ];

  if (mediaQuery.matches) {
    // 화면 크기가 줄어들었을 때 div 위치 정의
    const [p1, p2, p3, p4, p5, p6] = divElements;
    container.innerHTML = ""; // Container 내부 요소 비우기
    container.appendChild(p1);
    container.appendChild(p4);
    container.appendChild(p2);
    container.appendChild(p5);
    container.appendChild(p3);
    container.appendChild(p6);
  } else {
    // 화면 크기가 다시 커졌을 때 위치 정의
    const [p1, p2, p3, p4, p5, p6] = divElements;
    container.innerHTML = "";
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);
    container.appendChild(p5);
    container.appendChild(p6);
  }
}

// 미디어 쿼리 문자열을 정의. 1140px보다 화면이 작아질 때.
const mediaQueryStr = "(max-width: 1140px)";

// 미디어 쿼리 객체 생성
const mediaQuery = window.matchMedia(mediaQueryStr);

// 페이지가 로드될 때, 그리고 화면 크기가 변경될 때 swapDivsOnResize 함수를 호출
window.addEventListener("DOMContentLoaded", () => swapDivsOnResize(mediaQuery));
window.addEventListener("resize", () => swapDivsOnResize(mediaQuery));
