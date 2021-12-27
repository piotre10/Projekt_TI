let suma = 0;
let items = [];

function pushItem(item, price){
    if(items.includes(item)) increment(item, price);
    else add_to_cart(item, price);
}

function popItem(item){
    decrement(item);
}

function add_to_cart(item_name, item_price) {
    document.getElementById(item_name).lastElementChild.classList.add('active');

    let newItem = $('<li></li>');
    $(newItem).text(1 + ' x ' + item_name);
    $(newItem).attr('id', 'list_'+ item_name);
    newItem.insertAfter('#items ul li:last');

    let newPrice = $('<li></li>');
    $(newPrice).text(item_price + ' zł');
    $(newPrice).attr('id', 'list_' + item_name + '_price');
    newPrice.insertAfter('#prices ul li:last');

    updateSum(item_price);
    items.push(item_name);
}

function increment(item_name, item_price){
    let item = document.getElementById('list_' + item_name);
    let price = document.getElementById('list_' + item_name + '_price');
    let quantity = parseInt(item.textContent.split()[0]);
    
    if(quantity == 6) return;
    quantity++;
    if(quantity == 6) document.getElementById(item_name).firstElementChild.classList.remove('active');

    item.textContent = (quantity + ' x ' + item_name);
    price.textContent = (quantity*item_price + ' zł');
    updateSum(item_price);
}

function decrement(item_name){
    let item = document.getElementById('list_' + item_name);
    let price = document.getElementById('list_' + item_name + '_price');
    let quantity = parseInt(item.textContent.split()[0]);
    let item_price = parseFloat(price.textContent.split()[0]) / quantity;

    if(quantity == 0) return;
    quantity--;
    if(quantity == 0){
        document.getElementById(item_name).lastElementChild.classList.remove('active');
        delete_from_cart(item_name);
        items.splice(items.indexOf(item), 1);
        return;
    }
    if(quantity == 5) document.getElementById(item_name).firstElementChild.classList.add('active');

    item.textContent = (quantity + ' x ' + item_name);
    price.textContent = (quantity*item_price + ' zł');
    updateSum(-item_price);
}

function delete_from_cart(item_name) {
    $('#icon_' + item_name).attr('class', 'fas fa-shopping-cart');
    $('#txt_' + item_name).text('Dodaj do koszyka ');

    var price = $('#list_' + item_name + '_price').text().split(" ");
    updateSum(-parseInt(price[0]));

    $('#list_' + item_name).remove();
    $('#list_' + item_name + '_price').remove();
}

function updateSum(number) {
    suma += number;
    let discount_price = document.getElementById('discount');
    let normal_price = document.getElementById('normal');
    if (suma > 250) {
        discount_price.textContent = (suma + " zł");
        normal_price.textContent = (suma*0.9 + " zł");
    } else {
        discount_price.textContent = '';
        normal_price.textContent = (suma + " zł");
    }
}

/* You can file your order only if any item is selected and any txt entered */
function orderCheck(){
    if(document.getElementById('email_box').value && suma){
        window.open('order.html', target='_self');
    }
}