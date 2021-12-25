var suma = 0;
var plecak = false;
var termos = false;
var śpiwór = false;
var namiot = false;
var raki = false;
var czekan = false;

$(document).ready(function() {
    function updateSum(number) {
        suma += number;
        if (suma > 250) {
            $('#discount').text(suma + " zł");
            $('#normal').text(suma*0.9 + " zł");
        } else {
            $('#discount').text("");
            $('#normal').text(suma + " zł");
        }
    }
    function insertItem(item_name, item_price) {
        var item_quantity = prompt("Podaj ilość:");
        if(item_quantity < 1 | item_quantity > 6) return 0;
        
        $('#icon_' + item_name).attr('class', 'fas fa-times');
        $('#txt_' + item_name).text('Usuń z koszyka ');

        var newItem = $('<li></li>');
        $(newItem).text(item_quantity + ' x ' + item_name);
        $(newItem).attr('id', 'list_'+ item_name);
        newItem.insertAfter('#items ul li:last');

        var newPrice = $('<li></li>');
        $(newPrice).text(item_price*item_quantity + ' zł');
        $(newPrice).attr('id', 'list_' + item_name + '_price');
        newPrice.insertAfter('#prices ul li:last');

        updateSum(item_price*item_quantity);
        return 1;
    }
    function deleteItem(item_name) {
        $('#icon_' + item_name).attr('class', 'fas fa-shopping-cart');
        $('#txt_' + item_name).text('Dodaj do koszyka ');

        var price = $('#list_' + item_name + '_price').text().split(" ");
        updateSum(-parseInt(price[0]));

        $('#list_' + item_name).remove();
        $('#list_' + item_name + '_price').remove();
    }

    updateSum(0);
    $('#cart_plecak').click(function() {
        if(!plecak) {
            if( insertItem("plecak", 30) ) plecak = true;
        } else {
            deleteItem("plecak");
            plecak = false;
        }     
    }); //koniec plecak.click()

    $('#cart_termos').click(function() {
        if(!termos) {
            if( insertItem("termos", 10) ) termos = true;
        } else {
            deleteItem("termos");
            termos = false;
        }    
    }); //koniec termos.click()
    
    $('#cart_śpiwór').click(function() {
        if(!śpiwór) {
            if( insertItem("śpiwór", 35) ) śpiwór = true;
        } else {
            deleteItem("śpiwór");
            śpiwór = false;
        }    
    }); //koniec śpiwór.click()

    $('#cart_namiot').click(function() {
        if(!namiot) {
            if( insertItem("namiot", 80) ) namiot = true;
        } else {
            deleteItem("namiot");
            namiot = false;
        }    
    }); //koniec namiot.click()

    $('#cart_raki').click(function() {
        if(!raki) {
            if( insertItem("raki", 40) ) raki = true;
        } else {
            deleteItem("raki");
            raki = false;
        }    
    }); //koniec raki.click()

    $('#cart_czekan').click(function() {
        if(!czekan) {
            if( insertItem("czekan", 35) ) czekan = true;
        } else {
            deleteItem("czekan");
            czekan = false;
        }    
    }); //koniec czekan.click()
}); //koniec ready

