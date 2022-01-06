radius = 40;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;

    mouseEvent = "mouseDown";
}



canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("current position of x and y coordinates = ");
        console.log("x= " + current_position_of_x + "y= " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2* Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
