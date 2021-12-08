var count = 4;
var index = 1;
function add() {
    total = []
    for (let i = 4; i <= count; i++) {
        let id1 = 'inp' + i;
        i++;
        let id2 = 'inp' + i;
        i++;
        let id3 = 'inp' + i;
        let quantity = document.getElementById(id1);
        let rate = document.getElementById(id2);
        let price = document.getElementById(id3);
        price.value = quantity.value * rate.value;
        total.push(parseInt(price.value));
    }
}
function last() {
    var cont = document.createElement('h1');
    cont.style.textAlign = 'center'
    cont.innerHTML = 'Total = ' + total.reduce((a, b) => a + b);
    body = document.querySelector('body');
    body.append(cont);
}

function formnew() {
    var quantity = document.createElement('input');
    quantity.placeholder = 'Quantity';
    quantity.className = "form-control";
    quantity.onkeydown = focusing1;
    var rate = document.createElement('input');
    rate.placeholder = 'Rate';
    rate.className = "form-control";
    rate.onkeydown = focusing2;
    var price = document.createElement('input');
    price.placeholder = 'Price';
    price.className = "form-control";
    var button = document.createElement('button');
    button.className = 'btn btn-success';
    button.innerHTML = 'Add'
    var div = document.createElement('div')
    div.innerHTML = index;
    index++;
    quantity.id = 'inp' + count;
    count++;
    rate.id = 'inp' + count;
    count++;
    price.id = 'inp' + count;
    price.disabled = true;
    count++;
    button.onclick = add;

    cont = document.querySelector('body');
    div.append(quantity);
    div.append(rate);
    div.append(button);
    div.append(price);

    cont.append(div);
    console.log(count)
}
function focusing1(event) {
    if (event.keyCode == 32) {
        let id1 = (document.activeElement.id);
        let id = id1.split('').splice(3).join('');
        id = parseInt(id) + 1
        id = 'inp' + id;
        var next = document.getElementById(id);
        next.focus();

    }
}
function focusing2(event) {
    if (event.keyCode == 32) {
        let id1 = (document.activeElement.id);
        let id = id1.split('').splice(3).join('');
        id = parseInt(id) + 2;
        id = 'inp' + id;
        var next = document.getElementById(id);
        next.focus();

    }
}
