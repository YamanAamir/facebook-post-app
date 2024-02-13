
function setBackground() {
    var postBackground = document.getElementById("postBg")
    postBackground.style.backgroundImage = 'url(' + event.target.src + ')'
}
function setBackgroundColor() {
    var postBackground = document.getElementById("postBg")
    postBackground.style.background = event.target.value
}
function setColor() {
    var postColor = document.getElementById("postBg")
    postColor.style.color = event.target.value
}

function fontStyle() {
    var fontStyle = document.getElementById("postBg");
    var type = event.target.innerText
    if (type === "B") {
        if (fontStyle.style.fontWeight === "bold") {
            fontStyle.style.fontWeight = "normal"
            event.target.style.background = "transparent"
        } else {
            fontStyle.style.fontWeight = "bold"
            event.target.style.background = "#ababac91"
        }
    }
    if (type === "I") {
        if (fontStyle.style.fontStyle === "italic") {
            fontStyle.style.fontStyle = "normal"
            event.target.style.background = "transparent"
        } else {
            fontStyle.style.fontStyle = "italic"
            event.target.style.background = "#ababac91"
        }
    }
    if (type === "U") {
        if (fontStyle.style.textDecoration === "underline") {
            fontStyle.style.textDecoration = "none"
            event.target.style.background = "transparent"
        } else {
            fontStyle.style.textDecoration = "underLine"
            event.target.style.background = "#ababac91"
        }
    } console.log(fontStyle.style.textDecoration)
}

function fontAlign(Alignment) {
    var fontAlign = document.getElementById("postBg")
    fontAlign.style.textAlign = Alignment;
}
// let disable = "false"
function post() {
    // disable = "true"
    var postBackground = document.getElementById("postBg")
    postBackground.setAttribute("readonly", "true");
    var hide = document.getElementById("hide-items")
    hide.style.display = "none"
    var post = document.getElementById("post")
    post.style.display = "none"
    var back = document.getElementById("Back")
    back.style.display = "unset"
    var a = document.getElementById("like")
    a.style.display = "unset"
    var b = document.getElementById("Comment")
    b.style.display = "unset"
    var c = document.getElementById("share")
    c.style.display = "unset"
    var pubProfile = document.getElementById("pp")
    pubProfile.style.display = "none"
    var justNow = document.getElementById("justNow")
    justNow.style.display = "unset"
    justNow.style.color = "#fff"
    var line = document.getElementById("upr")
    line.display = "none"
}

function like() {
    var like = document.getElementById("like");
    like.style.color = "#1877F2"
    var like = document.getElementById("like-i");
    like.style.color = "#1877F2"
    var like = document.getElementById("hide-like")
    like.style.display = "unset"
}
function remove() {
    var like = document.getElementById("like");
    like.style.color = "unset"
    var like = document.getElementById("like-i");
    like.style.color = "unset"
    var like = document.getElementById("hide-like")
    like.style.display = "none"
}

function goback() {
    var postBackground = document.getElementById("postBg");
    postBackground.removeAttribute("readonly");
    var back = document.getElementById("Back")
    back.style.display = "none"
    var post = document.getElementById("post")
    post.style.display = "unset"
    var back = document.getElementById("hide-items")
    back.style.display = "unset"
    var a = document.getElementById("like")
    a.style.display = "none"
    var like = document.getElementById("hide-like")
    like.style.display = "none"
    var b = document.getElementById("Comment")
    b.style.display = "none"
    var c = document.getElementById("share")
    c.style.display = "none"
    var pubProfile = document.getElementById("pp")
    pubProfile.style.display = "unset"
    var justNow = document.getElementById("justNow")
    justNow.style.display = "none"
}