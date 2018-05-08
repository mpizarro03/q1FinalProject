(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
   $('.slider').slider();



$(".cart-card-action").on("click", "a", addItem);
$(".cart-card-action").on("click", "a", updateTotal);

let subtotal = $(".subtotal");
let tax = $(".tax");
let total = $(".total");
let runningTotal = 0

function addItem(event) {
  const $row = $('<tr>');

$row.append(addDetail(event, "span").addClass("item"));
$row.append(addDetail(event, "p").addClass("right price"));
$(".striped tbody").append($row);
}

function addDetail(event, tagType) {
  const detail = $(event.target).parent().prev().children(tagType).text();
  const newCell = $("<td>");
  return newCell.text(detail);
}

function updateTotal(event) {
 let price = addDetail(event, 'p').text();
 price = Number(price.replace('$', ''));
  runningTotal += price;
  subtotal.text(`${runningTotal.toFixed(2)}`);
  tax.text(`${(runningTotal * 0.1).toFixed(2)}`);
  total.text(`${(runningTotal * 1.1).toFixed(2)}`);
}
});
