let container=document.querySelector("#container")

let cursor=document.querySelector("#cursor")

container.addEventListener("mousemove",function(dets){

    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
})