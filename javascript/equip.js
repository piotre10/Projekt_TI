var suma = 0;
var plecak = false;
var termos = false;
var śpiwór = false;
var namiot = false;

$(document).ready(function() {
    function updateSum(number) {
        suma += number;
        if (suma >= 40) {
            $('#discount').text(suma + " zł");
            $('#normal').text(suma - 20 + " zł");
        } else {
            $('#discount').text("");
            $('#normal').text(suma + " zł");
        }
    }
    function insertItem(item_name, item_price) {
        $('#pic_' + item_name).css({ 'background-color': 'forestgreen' });

        var newItem = $('<li></li>');
        $(newItem).text(item_name);
        $(newItem).attr('id', 'list_'+ item_name);
        newItem.insertAfter('#items ul li:last');

        var newPrice = $('<li></li>');
        $(newPrice).text(item_price + ' zł');
        $(newPrice).attr('id', 'list_' + item_name + '_price');
        newPrice.insertAfter('#prices ul li:last');

        updateSum(item_price);
    }
    function deleteItem(item_name) {
        $('#pic_' + item_name).css({ 'background-color': '#e9d6c6' });

        var price = $('#list_' + item_name + '_price').text().split(" ");
        updateSum(-parseInt(price[0]));

        $('#list_' + item_name).remove();
        $('#list_' + item_name + '_price').remove();
    }

    updateSum(0);
    $('#pic_plecak').click(function() {
        if(!plecak) {
            insertItem("plecak", 25);
            plecak = true;
        } else {
            deleteItem("plecak");
            plecak = false;
        }     
    }); //koniec plecak.click()
    $('#pic_termos').click(function() {
        if(!termos) {
            insertItem("termos", 15);
            termos = true;
        } else {
            deleteItem("termos");
            termos = false;
        }    
    }); //koniec termos.click()
}); //koniec ready

