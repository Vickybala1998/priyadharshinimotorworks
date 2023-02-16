const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const closed=document.getElementById('close');
if(bar)
{
    bar.addEventListener('click',()=>
    {
        nav.classList.add('active');
        nav.classList.remove('inactive');
    })
}
if(closed)
{
    closed.addEventListener('click',()=>
    {
        nav.classList.remove('active');
        nav.classList.add('inactive');
    })
}

function submit()
{
    window.alert("hi");
}
//highlighting menu item while section navigation --start
//get all menuitems and sections.

var menuItems= document.querySelectorAll("nav ul li a");
var sections=document.querySelectorAll("section");
var navbar= document.querySelector("nav");
console.log(navbar.offsetHeight);

// Add eventlistener
document.addEventListener("scroll", 
function()
{
    //get the scroll position from the upper left of the window
    var scrollPos=window.scrollY;
    // if(scrollPos>50)
    // {
    //     nav.classList.add("afterscroll");
    //     // navbar.classList.add("menuItem");
    //     // navbar.childNodes[5].childNodes[3].childNodes[0].classList.add("menuItem");
    //     // //navbar.childNodes[5].childNodes[5].childNodes[0].classList.add("menuItem");
    //     // //navbar.childNodes[5].childNodes[7].childNodes[0].classList.add("menuItem");
    //     // console.log(navbar.childNodes)
    // }
     
    // else {
    //     nav.classList.remove("afterscroll");
    // }
     
    for(var i=0;i<sections.length;i++)
    {
        var section= sections[i];
        var menuItem= menuItems[i];
    
        //console.log(section.parentElement);
        //get section position
        var sectionPos= section.offsetTop-200;
        //check if scroll position is current section position
        // if(scrollPos >= sectionPos &&  scrollPos < (sectionPos+section.offsetHeight))
        //   //menuItem.classList.add("active");
        // else
        //    menuItem.classList.remove("active");
    //console.log(sectionPos +' '+section.offsetHeight+' '+scrollPos+ ' '+document.offsetHeight)
    }
    //console.log(sectionPos+' '+scrollPos +' '+ sections.length );
})
//highlighting menu item while section navigation --end


   