// selected menu effect
// get menu items
let menuItems = document.getElementsByClassName("menu");
let currentItem = document.getElementsByClassName("is_selected");
// contact facebook ----------------------------------------------------
let face_element = document.getElementById("logo_face");
face_element.addEventListener("click", () => {
    window.open("https://www.facebook.com/re2devils");
});
//discover me click event-----------------------------------------------
//get element arrow text
let arrowText = document.getElementById("arrow_text");
arrowText.style.cursor = "pointer";
arrowText.addEventListener("click", () => {
    window.scrollTo(0, heightDevice);
});

// scroll effect------------------------------------------^---------
const heightDevice = window.innerHeight;
function scrollEffect() 
{
    var posY = window.pageYOffset;
    // skills bar effect
    if(posY >= heightDevice*.5)
    {
        // about selected effect
        currentItem[0].className = currentItem[0].className.replace(" is_selected", "");
        menuItems[1].className += " is_selected";
    }
    // home selected effect
    if(posY < heightDevice / 2)
    {
        currentItem[0].className = currentItem[0].className.replace(" is_selected", "");
        menuItems[0].className += " is_selected";
    }
    // skill selected effect
    if(posY >= heightDevice*1.5)
    {
        currentItem[0].className = currentItem[0].className.replace(" is_selected", "");
        menuItems[2].className += " is_selected";

    }
    // contact selected effect
    if(posY >= heightDevice*2.5)
    {
        currentItem[0].className = currentItem[0].className.replace(" is_selected", "");
        menuItems[3].className += " is_selected";
    }
}

window.addEventListener('scroll', scrollEffect);


// open close language bar---------------------------------------------------------------
//get section language
let lang = document.getElementById('language');
function openLang()
{
    // lang.style.display = 'flex';
    lang.style.width = '100%';
    lang.style.right = '0';
}

function closeLang()
{
    lang.style.width = '0';
    lang.style.right = '-120%';
}
// width 1024px heigher devices
// view language bar----------------------------------------------------------------------
const widthDevice = window.matchMedia('(min-width: 1024px)');


function viewLangIcon(x) 
{
    if (x.matches) 
    {
        lang.style.height = "auto";
        lang.style.right = "0";
        lang.style.position = "relative";
        lang.style.justifyContent = "space-around";
    }
    else 
    {
        lang.style.position = "absolute";
        lang.style.height = "100%";  
        lang.style.right = "-120%";
    }
}
viewLangIcon(widthDevice);
widthDevice.addListener(viewLangIcon);

// choose language
// get classes lang
let elementLang = document.getElementsByClassName("lang");
// get lang attribute of html
let langAttribute = document.documentElement.lang;
// console.log(langAttribute);
// console.log(changeLang);
// console.log(elementLang[0]);
let changeLang;
for (let i = 0; i < elementLang.length; i ++)
{
    elementLang[i].addEventListener("click", function(){
        changeLang = document.getElementsByClassName("lang")[i].getAttribute("id");
        // console.log(changeLang);
        if ( changeLang != langAttribute)
        {
            if (changeLang == "en")
                window.location.replace("index.html");
            if (changeLang == "vn")
                window.location.replace("index_vn.html");
            if (changeLang == "ja")
                window.location.replace("index_ja.html");
        }
    });
    
}

//toggle dark mode-------------------------------------------------

const theme = document.querySelector("#theme_link") ;
//when page load light or dark mode setting
if(localStorage.getItem("theme") !== null) 
{
    theme.href = localStorage.getItem("theme");
}
const switch_mode = document.getElementsByClassName("slider");
let themes = "index.css";
switch_mode[0].addEventListener("click", () => {
    // console.log(localStorage.getItem("theme"));
    if(theme.getAttribute("href") == "index.css")
        {
            themes = "index_dark.css";
            theme.href = themes;
        }
    else 
    {
        themes = "index.css"
        theme.href = themes;
    }
    localStorage.setItem("theme", themes);
});
