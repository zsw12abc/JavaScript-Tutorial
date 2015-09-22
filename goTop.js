window.onload = function() {
    var obtn = document.getElementById('btn');
    var timer = null;

    obtn.onclick = function() {
        timer = setInterval(function() {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop/6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
           	console.log(osTop);
            if (osTop == 0){
            	clearInterval(timer);
            }
        }, 30);


    }
}
