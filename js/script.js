/* function scrollNav() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementsByTagName("nav")[0].style.position = "fixed";
		document.getElementsByTagName("nav")[0].style.animation = "fadein 2s";
    } else {
        document.getElementsByTagName("nav")[0].style.position = "absolute";
    }
} */

function scrollBotaoTopo() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botaoTopo").style.animation = "fadein 1s";
        document.getElementById("botaoTopo").style.display = "block";
    } else {
        document.getElementById("botaoTopo").style.display = "none";
    }
}

window.onscroll = function () {
    scrollBotaoTopo();
};

function topo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var btn = document.getElementById('botaoTopo');

btn.addEventListener('click', () => {
    topo();
});