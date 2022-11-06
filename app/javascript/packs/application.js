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
	console.log(document.forms)
	document.getElementById("riskGroupSubmit").addEventListener("click", e => {
		const height = parseInt(document.getElementById("height_1").value) + parseInt(document.getElementById("height_2").value)/100;
		const mass = document.getElementById("mass").value;
		const bmi = mass / (height^2)
		console.log("BMI", bmi)
		const over45 = document.getElementById("older_than_45").checked;
		const anyChecked = Array.from(document.querySelectorAll('input[type="checkbox"]'))
			.reduce((acc, element) => acc || element.checked, false);

		if (over45 || (anyChecked && bmi >= 25)) {
			switchSurveyPage("riskGroup", "symptoms");
		} else {
			switchSurveyPage("riskGroup", "healthy");
		}
	});

	document.getElementById("symptomsSubmit").addEventListener("submit", e => {
		if (reduce) {
			switchSurveyPage("symptoms", "glucoseTest");
		} else {
			switchSurveyPage("symptoms", "glucoseTestFasting");
		}
	});

	document.getElementById("glucoseTestSubmit").addEventListener("submit", e => {
		const form = e.target;
		if (form) {
			switchSurveyPage("riskGroup", "atRisk");
		} else {
			switchSurveyPage("riskGroup", "healthy");
		}
	});
}
