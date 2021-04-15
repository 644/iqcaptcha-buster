// ==UserScript==
// @name        IQCaptchaBuster
// @author      644
// @license     MIT
// @description Automatically solves IQ captchas
// @include     https://*
// @include     http://*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant       GM_xmlhttpRequest
// @grant       GM_notification
// @namespace   https://github.com/644
// @updateURL   https://raw.githubusercontent.com/644/iqcaptcha-buster/main/iqcaptcha.js
// @downloadURL https://raw.githubusercontent.com/644/iqcaptcha-buster/main/iqcaptcha.js
// @supportURL  https://github.com/644/iqcaptcha-buster/issues
// @version     1.1
// ==/UserScript==

(function(){
	'use strict';
	function solveCaptcha(capdata, frm, num){
        var notificationDetails = {
            text: 'Solving captcha',
            title: 'IQ Captcha Buster',
            timeout: 3000
        };
        GM_notification(notificationDetails);
        $.ajax({
            type: 'POST',
            async: false,
            url: 'http://yourdomain.com/iq-solve.php',
            data: {"captchadata": capdata.src, "formula": frm, "num": num},
            success: function(data){
                document.getElementById('iq-captcha-answer').value = data.solution;
                document.getElementById('iq-captcha-verify-button').click();
            }
        });
	}

	var checkcapexists = new MutationObserver(function(mutations, me){
		var capdata = document.getElementsByClassName('iq-captcha-img');
		if(capdata[0]){
            var frm = prompt("Enter 'equation:apostrophe count'");
            solveCaptcha(capdata[0], frm, 1);
            for(var num=2; num < 5; num++){
                if (confirm('Try again?')) {
                    solveCaptcha(capdata[0], frm, num);
                } else {
                    break;
                }
            }
			me.disconnect();
			return;
		}
	});

	checkcapexists.observe(document, { childList: true, subtree: true });
})();
