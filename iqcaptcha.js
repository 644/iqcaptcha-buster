// ==UserScript==
// @name        IQCaptchaBuster
// @description Automatically solves IQ captchas
// @include     https://*
// @include     http://*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant       GM_xmlhttpRequest
// @grant       GM_notification
// @version     0.1
// ==/UserScript==

(function(){
	'use strict';
	function solveCaptcha(capdata, formula){
        var notificationDetails = {
            text: 'Solving captcha',
            title: 'IQ Captcha Buster',
            timeout: 3000
        };
        GM_notification(notificationDetails);
		$.ajax({
			type: 'POST',
			url: 'http://yourdomain.com/iq-solve.php',
			data: {"captchadata": capdata.src, "formula": formula.innerHTML},
			success: function(data){
				document.getElementById('iq-captcha-answer').value = data.solution;
			}
		});
	}

	var checkcapexists = new MutationObserver(function(mutations, me){
		var capdata = document.getElementsByClassName('iq-captcha-img');
		var formula = document.getElementsByClassName('iq-header');
		if(capdata[0] && formula[0]){
			solveCaptcha(capdata[0], formula[0]);
			me.disconnect();
			return;
		}
	});

	checkcapexists.observe(document, { childList: true, subtree: true });
})(); 
