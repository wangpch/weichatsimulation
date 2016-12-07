function selectNav(onClss) {
    
    var onImg = "../Content/img/" + onClss + "ed.png";    //点击后点亮的图标

    var foot = document.getElementsByTagName("footer")[0];
    var lnk = foot.getElementsByClassName(onClss)[0];
    var image = lnk.getElementsByTagName("img")[0];
    var fig = lnk.getElementsByTagName("figcaption")[0];
    //把目前所有已点亮的图标和文字都去掉
    var allClass = foot.getElementsByClassName("click"); 
    if (allClass.length > 0) {
        for (var i = 0; i < allClass.length; i++) {
            var linkNode = allClass[i].parentNode.parentNode;
            var linkClass = linkNode.getAttribute("class");
            var imgSrc = "../Content/img/" + linkClass + ".png";
            
            linkNode.getElementsByTagName("figcaption")[0].setAttribute("class", "");
            linkNode.getElementsByTagName("img")[0].setAttribute("src", imgSrc);
           
        }
    } 
       // var lnk = foot.getElementsByClassName(onClss)[0];
        
    image.setAttribute("src", onImg);
    fig.setAttribute("class", "click");
    
}
