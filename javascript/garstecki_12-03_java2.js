window.onload = init
function init() {
    var button = document.getElementsByTagName('button'); 
    button[0].addEventListener('click', highlight, false);
    button[1].addEventListener('click', changeColor, false)
}

    function highlight() {
    var persName = document.getElementsByClassName('persName');
    for  (var i = 0; i < persName.length; i++)
        persName[i].classList.toggle("on");
    }
    /* I think it only changed the first persName element? I know there weren't a lot in this file 
     * but I think there was at least another unless I am missing it. */
    /* I realized we had to intergrate with CSS and now it is not highlighting at all. */
    
    function changeColor() {
        var p = document.getElementsByTagName('p');
        for (var i=0; i < p.length; i++)
        p[i].style.color = "#B6D7EF"
    }

