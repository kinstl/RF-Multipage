const emailSubInputNode=document.querySelector("#subscribe__email-input"),emailSubContNode=document.querySelector("#subscribe__email-container"),emailSubBtnNode=document.querySelector("#subscribe__email-btn");function subscribe(e){if(/\S+@\S+\.\S+/.test(e))emailSubContNode.innerHTML=`\n        <div class="js-subscribe-msg">You have been subscribed, check your email <span class="js-subscribe-msg_email">${e}</span></div>\n    `,EMAIL_ERROR.remove();else{emailSubInputNode.value="",emailSubInputNode.classList.add("js-email-input-error"),createEmailError(EMAIL_ERROR);document.querySelector("#subscribe-error")||emailSubContNode.after(EMAIL_ERROR)}}function createEmailError(e){e.classList.add("js-email-error-container"),e.innerHTML='\n<div class="js-email-error-container__img"></div>\n<p class="js-email-error-container__msg">Incorrect email address</p>\n',e.id="#subscribe-error"}emailSubBtnNode.addEventListener("click",(function(){subscribe(emailSubInputNode.value)}));