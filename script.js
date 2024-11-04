//------------------->> for square 1
let s1 = document.getElementById("sq1");
// s1.style.backgroundColor = "red";
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100);
   s1.innerHTML =  `<h1>${r}</h1>`;
})

s1.addEventListener("mouseleave", function(){
   s1.innerHTML = `<h1>1</h1>`;
})

s1.addEventListener("dblclick", function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${a},${b},${c})`;
})


//------------------------>> for square2  <<--------------
let s2 = document.getElementById("sq2");
let clr = "green";
s2.addEventListener("mouseenter", function(){
    if(clr == "green")
    {
        s2.style.backgroundColor = "yellow";
        clr = "red";
    }
    else if(clr == "red")
    {
        s2.style.backgroundColor = "black";
        clr = "yellow";
    }
    else
    {
        s2.style.backgroundColor = "blue";
        clr = "green";
    }
})

s2.addEventListener("mouseleave", function(){
   s2.style.backgroundColor = "white";
})



// -------------------------->> square 3 <<----------------
let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter", function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${a},${b},${c})`;
})

s3.addEventListener("mouseleave", function(){
   s3.style.backgroundColor = "white";
})

//----------------  >> square 4 << --------------------
let s4 = document.getElementById("sq4");
s4.addEventListener("mouseenter", function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${a},255,255)`;
    s2.style.backgroundColor = `rgb(255,${b},255)`;
    s3.style.backgroundColor = `rgb(255,255,${c})`;
})

s4.addEventListener("mouseleave", function(){
   s1.style.backgroundColor = "white";
   s2.style.backgroundColor = "white";
   s3.style.backgroundColor = "white";
})

let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
main.addEventListener("mousemove", function(detail){
 //console.log(detail.x, detail.y);
  cursor.style.left = detail.x + "px";
  cursor.style.top = detail.y + "px";
})
// transform scale, transition 