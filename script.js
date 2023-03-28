let CameraAngleDecissions = [];

function processThirdUmpireReview(groundUmpReqRec, callbackFn) {
  if (!groundUmpReqRec) return;

  groundUmpReqRec && callbackFn();
  const [CameraAngle1Result] = CameraAngleDecissions
  console.log(CameraAngle1Result)
  CameraAngle1Result ? displayMessageScreen("out") : displayMessageScreen("notOut")
}
function displayMessageScreen(finalResult) {
    const screenEl = document.getElementById("screen");
    screenEl.innerText = finalResult; 
}

function checkCameraAngle1() {
  let decision = prompt("what is your decision");
  decision = decision.toLowerCase() === "out" ? true : false;
  CameraAngleDecissions.push(decision);
  return decision;
}

processThirdUmpireReview(true, checkCameraAngle1);
