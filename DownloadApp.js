// 버튼 클릭 이벤트 리스너 등록
document.getElementById("download").addEventListener("click", function() {
  // 다운로드 링크 설정 (어플 파일의 경로 또는 다운로드 링크를 입력해야 함)
  var downloadLink = "http://example.com/your-app.apk"; /* 어플 제작 완료 후 수정 */
  
  // 새로운 브라우저 탭에서 다운로드 링크 열기
  var newTab = window.open(downloadLink, "_blank");
  newTab.focus();
});
