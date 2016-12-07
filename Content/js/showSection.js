function showSection(id) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length ; i++) {
        if (sections[i].getAttribute("id") != id) {
           sections[i].style.display = "none";
            //sections[i].setAttribute("class", "ui-page");
        } else {
             sections[i].style.display = "block";
           // sections[i].setAttribute("class", "ui-page-active");
        }
    }
}