window.onload = ()=>{
    main();
}

function randomHEX()
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function main()
{
   let root = document.getElementById("main");
   let btn = document.getElementById("btn");
   let show = document.getElementById("show");

   btn.addEventListener("click", function ()
   {
    let bgcolor = randomHEX();
    root.style.backgroundColor = bgcolor;
    show.value = bgcolor;
   })
}