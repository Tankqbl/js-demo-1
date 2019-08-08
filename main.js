let div1 = document.createElement("div")
div1.className = "demo"
document.body.appendChild(div1)
console.log(0)
var dragging = false
var lastX
var lastY
console.log(1)
div1.onmousedown = function(e) {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}
document.body.onmousemove = function(e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0

        div1.style.top = top + deltaY + 'px'
        div1.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
console.log(2)
div1.onmouseup = function() {
    dragging = false
}
console.log(3)
