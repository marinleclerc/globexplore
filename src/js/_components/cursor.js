//Page cursors
if ($(".products").length > 0) {
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });
    var e = document.getElementById("cursor2");
    function n(t) {
        e.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".products .item"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
}