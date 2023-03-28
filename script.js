let CameraAngleDecissions = [];

function processThirdUmpireReview(groundUmpReqRec, callbackFn) {
  if (!groundUmpReqRec) return;

  groundUmpReqRec && callbackFn();
  const [CameraAngle1Result,CameraAngle2Result] = CameraAngleDecissions
  console.log("CameraAngleDecissions",CameraAngleDecissions)
  CameraAngle1Result ? displayMessageScreen("out") : displayMessageScreen("notOut")
if(CameraAngleDecissions.length>1){
  CameraAngle1Result && CameraAngle2Result ? displayMessageScreen("out") : displayMessageScreen("not out");
}
}
function displayMessageScreen(finalResult) {
    const screenEl = document.getElementById("screen");
    screenEl.innerText = finalResult; 
}
function getThirdUmpireRsult() {
    let decision = prompt("what is your decision");
  decision = decision.toLowerCase() === "out" ? true : false;
  CameraAngleDecissions.push(decision);
  return decision;

}
function checkCameraAngle1() {
    // umpire is checking some visuals
    // umpire has a finaldecission now
    getThirdUmpireRsult();
  
}
function checkCameraAngle2() {
     // umpire is checking some visuals
    // umpire has a finaldecission now
   getThirdUmpireRsult();
  }

processThirdUmpireReview(true, checkCameraAngle1);
processThirdUmpireReview(true, checkCameraAngle2);
