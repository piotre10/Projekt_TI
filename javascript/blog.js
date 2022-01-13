
var ArticleDivs;

document.addEventListener("DOMContentLoaded", function() {
    ArticleDivs = document.getElementsByClassName("article");
    ShowAllHidden();
  });

function ShowAllHidden(){
    for(let i=0; i<ArticleDivs.length;i++){
        let Div = ArticleDivs[i];
        Div.style.display = "block";
        Div.getElementsByClassName("ReturnLink")[0].style.display = "none";
        Div.getElementsByClassName("ReadMoreLink")[0].style.display = "inline";
        Div.getElementsByClassName("ReadMoreDiv")[0].style.display = "none";
        Div.classList.remove('only');
    }
    window.scrollTo(0,0);
}
function ShowFullArticle(index){
    debugger;
    let Div = ArticleDivs[index];
    for(let i=0; i<ArticleDivs.length;i++){
        ArticleDivs[i].style.display = "none";
    }
    Div.style.display = "block";
    Div.getElementsByClassName("ReturnLink")[0].style.display = "inline";
    Div.getElementsByClassName("ReadMoreDiv")[0].style.display = "block";
    Div.getElementsByClassName("ReadMoreLink")[0].style.display = "none";
    Div.classList.add('only');
    window.scrollTo(0,0);
}