function getFrobidden(category){
    var buttons = document.getElementById(category).getElementsByClassName("btn");
    var active_buttons = document.getElementById(category).getElementsByClassName("btn active");
    var button_ids = []
    for( let i = 0; i<buttons.length;i++){
        button_ids.push(buttons[i].id);
    }
    var active_button_ids = []
    for( let i = 0; i<active_buttons.length;i++){
        active_button_ids.push(active_buttons[i].id);
    }

    for(let i=0; i<active_button_ids.length; i++){
        let temp = button_ids.indexOf(active_button_ids[i]);
        if( temp != -1 ){
            button_ids.splice(temp,1);
        }
    }
    if(button_ids.indexOf("all") == -1){
        return [];
    } else {
        let temp = button_ids.indexOf("all");
        if( temp != -1 ){
            button_ids.splice(temp,1);
        }
        return button_ids;
    }
}
function UpdateDisplay(){
    var FDivs = document.getElementsByClassName("FDiv");
    var ForbRanges = getFrobidden("range");
    var ForbDiffs = getFrobidden("diff");
    var ForbGuides = getFrobidden("guide");
    for(let i=0; i<FDivs.length; i++){
        let FDiv=FDivs[i];
        FDiv.style.display = "block";
        for(let j=0;j<ForbRanges.length;j++){
            if(FDiv.classList.contains(ForbRanges[j]) == true){
                FDiv.style.display = "none";
            }
        }
        for(let j=0;j<ForbDiffs.length;j++){
            if(FDiv.classList.contains(ForbDiffs[j]) == true){
                FDiv.style.display = "none";
            }
        }
        var guide_list = FDiv.classList[3].split(";");
        let n = 0;
        for(let j=0;j<guide_list.length;j++){
            if(ForbGuides.indexOf(guide_list[j]) == -1){
                break;
            }
            n++;
        }
        if(n == guide_list.length){
            FDiv.style.display="none";
        }
    }
}
function OnClickSelection (category, searched){
    var BtnDiv = document.getElementById(category);
    var buttons = BtnDiv.getElementsByClassName('btn');
    if(searched == 'all'){
        buttons[0].classList.toggle('active');
        if(buttons[0].classList.contains('active')){
            for(let i = 1; i<buttons.length; i++){
                buttons[i].classList.remove('active')
            }
        }
    } else {
        document.getElementById(searched).classList.toggle('active');
        if(document.getElementById(searched).classList.contains('active')){
            buttons[0].classList.remove('active');
        }
    }
    if(BtnDiv.getElementsByClassName('btn active').length == 0){
        buttons[0].classList.add('active');
    }
    UpdateDisplay();
}

function FindByName(){
    var input = document.getElementById("find_input");
    var filter = input.value.toLowerCase();
    var FDivs = document.getElementsByClassName("FDiv");
    for(let i=0; i<FDivs.length; i++){
        var name = FDivs[i].getElementsByTagName("h2")[0];
        name = name.innerText;
        if(name.toLowerCase().indexOf(filter) != -1){
            FDivs[i].style.display = "block";
        }else{
            FDivs[i].style.display = "none";
        }
    }
}
