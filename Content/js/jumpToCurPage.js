function jumpToCurPage() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByClassName) return false;
    var locationHash = window.location.hash.split("#")[1];

    selectNav(locationHash);
    showSection(locationHash);
    return false;
}

