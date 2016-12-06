function prepareInternalnav() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByClassName) return false;
    var foot = document.getElementsByTagName("footer");
    if (foot.length == 0) return false;
    var link = foot[0].getElementsByClassName("link");
    if (link.length == 0) return false;
    var links = link[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var image = links[i].getElementsByTagName("img");
        if (image.length == 0) return false;
        var img = image[0].getAttribute("src").split("/")[3];
        var sectionId = "";
        if (i == 0) {
            sectionId = img.split(".")[0].split("e")[0];
        } else {
            sectionId = img.split(".")[0];
        }


        if (!document.getElementById(sectionId)) continue;
        if (sectionId != "chat") {
            document.getElementById(sectionId).style.display = "none";
        }

        links[i].destination = sectionId;

       
        //var onImg = image[0].getAttribute("src").split(".png")[0] + "ed.png";
        links[i].onclick = function () {
            var hash = window.location.hash.split("#")[1];
            if (hash != this.destination || hash == "") {
                window.location.href = "#" + this.destination;
            }

            selectNav(this.destination);
            showSection(this.destination);
            return false;
        }

    }
}