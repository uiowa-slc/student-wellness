/*
 Copyright 2011-2016 Adobe Systems Incorporated. All Rights Reserved.
*/
(function() {
    if (!window.museConfigLoadedAndExecuted) {
        window.museConfigLoadedAndExecuted = !0;
        var c = {
            waitSeconds: 0,
            paths: {
                "html5shiv": "_resources/themes/division-subtheme/binge-infograph/scripts/html5shiv.js?crc=4241844378",
                "jquery": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery-1.8.3.min.js?crc=209076791",
                "jquery.musemenu": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery.musemenu.js?crc=112316522",
                "jquery.museoverlay": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery.museoverlay.js?crc=4279841063",
                "jquery.musepolyfill.bgsize": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery.musepolyfill.bgsize.js?crc=178212883",
                "jquery.museresponsive": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery.museresponsive.js?crc=3939574382",
                "jquery.scrolleffects": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery.scrolleffects.js?crc=3781904385",
                "jquery.watch": "_resources/themes/division-subtheme/binge-infograph/scripts/jquery.watch.js?crc=399457859",
                "musedisclosure": "_resources/themes/division-subtheme/binge-infograph/scripts/musedisclosure.js?crc=241129246",
                "museutils": "_resources/themes/division-subtheme/binge-infograph/scripts/museutils.js?crc=4250906080",
                "musewpdisclosure": "_resources/themes/division-subtheme/binge-infograph/scripts/musewpdisclosure.js?crc=3931707700",
                "musewpslideshow": "_resources/themes/division-subtheme/binge-infograph/scripts/musewpslideshow.js?crc=168777830",
                "pie": "_resources/themes/division-subtheme/binge-infograph/scripts/pie.js?crc=3831537696",
                "taketori": "_resources/themes/division-subtheme/binge-infograph/scripts/taketori.js?crc=214255737",
                "touchswipe": "_resources/themes/division-subtheme/binge-infograph/scripts/touchswipe.js?crc=4065839998",
                "webpro": "_resources/themes/division-subtheme/binge-infograph/scripts/webpro.js?crc=214003453",
                "whatinput": "_resources/themes/division-subtheme/binge-infograph/scripts/whatinput.js?crc=86476730"
            },
            map: {
                "*": {
                    jquery: "jquery-private"
                },
                "jquery-private": {
                    jquery: "jquery"
                }
            }
        };
        require.undef("jquery");
        define("jquery-private", ["jquery"], function(b) {
            b = b.noConflict(!0);
            if ("undefined" === typeof $) window.$ = window.jQuery = b;
            return b
        });
        if (true && document.location.protocol != "https:") c.paths.jquery = ["http://musecdn.businesscatalyst.com/scripts/4.0/jquery-1.8.3.min", c.paths.jquery];
        requirejs.config(c);
        muse_init()
    }
})();;
(function() {
    if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
        var c = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return c;
            return -1
        }(Muse.assets.required, "museconfig.js");
        if (-1 != c) {
            Muse.assets.required.splice(c, 1);
            for (var c = document.getElementsByTagName("meta"), b = 0, d = c.length; b < d; b++) {
                var a = c[b];
                if ("generator" == a.getAttribute("name")) {
                    "2018.1.0.386" != a.getAttribute("content") && Muse.assets.outOfDate.push("museconfig.js");
                    break
                }
            }
        }
    }
})();