$(document).ready(function(){   
    if (sessionStorage.getItem('#cookieBg, #cookieConsent') !== 'true') {
        setTimeout(function () {
            $("#cookieBg, #cookieConsent").fadeIn(200);
            }, 5000);
            $("#closeCookieConsent").click(function() {
            $("#cookieConsent, #cookieBg").fadeOut(200);
        });
            $(".cookieConsentOK").click(function() {
                sessionStorage.setItem('#cookieBg, #cookieConsent', 'true')
                $("#cookieConsent, #cookieBg").fadeOut(200);
            });
        }
});