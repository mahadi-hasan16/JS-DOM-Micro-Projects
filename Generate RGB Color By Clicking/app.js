window.onload = ()=>{
    main();
}

function randomRGB()
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}

function main()
{
   let root = document.getElementById("main");
   let btn = document.getElementById("btn");

   btn.addEventListener("click", function ()
   {
    let bgcolor = randomRGB();
    root.style.backgroundColor = bgcolor;
   })
}
