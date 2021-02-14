import {setWheelBehaviorFor } from "./utilities/wheelBehavior.js";
export function careerFunctionalities() {
    let careerBgWrapper = document.querySelector('#career .section-content .bg-wrapper');
    let academicBgWrapper = document.querySelector('#academic .section-content .bg-wrapper');
    let competencesBgWrapper = document.querySelector('#competences .section-content .bg-wrapper');
    setWheelBehaviorFor(careerBgWrapper);
    setWheelBehaviorFor(academicBgWrapper);
    setWheelBehaviorFor(competencesBgWrapper);
}