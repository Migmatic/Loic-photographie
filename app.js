window.onscroll = function () {
    if(document.documentElement.scrollTop > 500){
        document.getElementById("navbar").style.marginTop = "0";
        document.getElementById("navbar").style.marginLeft = "1%";
        document.getElementById("imgnav").style.width = "100px";
    }
    else {
        document.getElementById("navbar").style.marginTop = "40px";
        document.getElementById("navbar").style.marginLeft = "8%";
        document.getElementById("imgnav").style.width = "160px";

    }
}