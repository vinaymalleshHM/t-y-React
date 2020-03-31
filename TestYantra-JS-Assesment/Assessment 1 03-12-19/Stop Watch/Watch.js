$(function () {
    var started = false;
    var time = 0;

    $("#reset").on("click", function () {
        stop();

        calcTime();
        if ($("input").length < 2) {
            $("#buttons").append("<input type='number' id='m' placeholder='min' min='0' />");
            $("#buttons").append("<input type='number' id='s' placeholder='sec' min='0' />");
        }
    });

    $("#start").on("click", function () {
        if (started === false) {
            start();
            started = true;
        }
    });

    calcTime = function () {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);

        if (String(minutes).length < 2) {
            minutes = "0" + minutes;
        }
        if (String(seconds).length < 2) {
            seconds = "0" + seconds;
        }

        $("#mn").html(minutes);
        $("#sc").html(seconds);
    };

    calcTime();

    start = function () {
        var m = Math.abs(parseInt($("#m").val()));
        var s = Math.abs(parseInt($("#s").val()));
        if ($("input").length > 0 && (typeof (m) === 'number' || typeof (s) === 'number')) {
            if (!isNaN(m) && !isNaN(s)) {
                time = m * 60 + s;
            } else if (!isNaN(m) && isNaN(s)) {
                time = m * 60;
            } else if (isNaN(m) && !isNaN(s)) {
                time = s;
            } else {
                time = 0;
            }
            $("#m").remove();
            $("#s").remove();
            if (time > 0) {
                if (time > 5999) {
                    time = 5999;
                }
                calcTime();
            }
        }
        if (time > 0) {
            --time;
            var x = setInterval(function () {
                if (started) {
                    calcTime();
                    --time;

                    if (time < 0) {
                        time = 0;
                        started = false;
                        clearInterval(x);
                    }
                } else {
                    clearInterval(x);
                }
            }, 1000);
        }
    };

    stop = function () {
        time = 0;
        started = false;
    };
});