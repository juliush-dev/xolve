import {setWheelBehaviorFor } from "./utilities/wheelBehavior.js";
export function careerFunctionalities() {
    let careerBgWrapper = document.querySelector('#career .section-content .bg-wrapper');
    let accademicBgWrapper = document.querySelector('#accademic .section-content .bg-wrapper');
    let competencesBgWrapper = document.querySelector('#competences .section-content .bg-wrapper');
    setWheelBehaviorFor(careerBgWrapper);
    setWheelBehaviorFor(accademicBgWrapper);
    setWheelBehaviorFor(competencesBgWrapper);
}