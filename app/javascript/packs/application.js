// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

//= require jquery3
//= require popper
//= require bootstrap


function switchSurveyPage(current, next) {
	console.log("Switching to ", next);
	document.getElementById(current).hidden = true;
	document.getElementById(next).hidden = false;
}

window.onload = () => {
	let hasSymptoms = false;

	document.getElementById("riskGroupSubmit").addEventListener("click", e => {
		const page = document.getElementById("riskGroup");
		const height = parseInt(document.getElementById("height_1").value) + parseInt(document.getElementById("height_2").value)/100;
		const mass = document.getElementById("mass").value;
		const bmi = mass / (height^2)
		console.log("BMI", bmi)
		const over45 = document.getElementById("older_than_45").checked;
		const anyChecked = Array.from(page.querySelectorAll('input[type="checkbox"]'))
			.reduce((acc, element) => acc || element.checked, false);

		if (over45 || (anyChecked && bmi >= 25)) {
			switchSurveyPage("riskGroup", "symptoms");
		} else {
			switchSurveyPage("riskGroup", "healthy");
		}
	});

	document.getElementById("symptomsSubmit").addEventListener("click", e => {
		const page = document.getElementById("symptoms");
		const anyChecked = Array.from(page.querySelectorAll('input[type="checkbox"]'))
			.reduce((acc, element) => acc || element.checked, false);

		hasSymptoms = anyChecked;
		switchSurveyPage("symptoms", "glucoseTest");
	});

	document.getElementById("glucoseTestSubmit").addEventListener("click", e => {
		const page = document.getElementById("symptoms");
		
		const glucose = parseInt(page.getElementById("glucoseMeasurement").value);

		if ((hasSymptoms && glucose >= 200) || (!hasSymptoms && glucose >= 100)) {
			switchSurveyPage("glucoseTest", "atRisk");
		} else {
			switchSurveyPage("glucoseTest", "healthy");
		}
	});
}
