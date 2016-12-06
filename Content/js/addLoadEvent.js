function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.load = func;
    } else {
        window.onload = function () {
            oldonload();
           
        }
    }
    func();
}