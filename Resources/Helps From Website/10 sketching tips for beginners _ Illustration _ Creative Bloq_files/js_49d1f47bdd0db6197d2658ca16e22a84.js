$(document).ready(function () {

    var waitCounter;
    var timeoutLength = 300;
    var shownAds = [];
    var myWidth = 0,
        myHeight = 0,
        prevWidth = 0;

    // store advert DOM objects
    var dfp_lb = $('#dfp-ad-leaderboard'),
        dfp_lb_m = $('#dfp-ad-leaderboardmobile'),
        dfp_mpu_m = $('#dfp-ad-mpu_mobile'),
        dfp_mpu1 = $('#dfp-ad-mpu1'),
        dfp_mpu2 = $('#dfp-ad-mpu2'),
        dfp_sky1 = $('#dfp-ad-skyscraper'),
        dfp_bg = $('#dfp-ad-background');

    function countSize() {
        if (typeof (window.innerWidth) == 'number') {
            // Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            // IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            // IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    //get starting values
    countSize();

    addEvent(window, "resize", function () {
        window.clearTimeout(waitCounter);
        countSize();
        waitCounter = setTimeout(function () {
            reloadAdverts();
        }, timeoutLength);
    });

    //get starting width
    prevWidth = myWidth;

    var hasReloadedOnce = false;
    function reloadAdverts(){

    }

    function showOrRefresh(advertName, advertVar) {
     
        console.log("SHOW OR REFRESH:");
        console.log({ 'name' : advertName, 'advertVar': advertVar });
        var disable = true;
        if(!disable){
        var advertObject = $('#' + advertName);

        if (advertObject.length) {
            // if the adevrt is empty then we must Display it...
            if (advertObject.html() === "") {
                //console.log('Reload - ' + advertName);
                googletag.cmd.push(function () {
                    googletag.display(advertName);
                });
                shownAds.push(advertName);
                advertObject.parents('.block-future_dfp').show();
            } else { // if the advert is there then we should refresh it?
                // another check if DISPLAY has been called & inner html !== "" then dont refresh?
                if (advertObject.html() !== "") {
                    //console.log('Refresh - ' + advertName);
                    googletag.pubads().refresh([advertVar]);
                }
            }
        }
        }
    }

    //fire initial reload checks 
    reloadAdverts();
});;
