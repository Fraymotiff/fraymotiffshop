/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}

/*CART*/

$(document).ready(function () {
			
			
  $('.addmorebtn').on('click', function (e) {
    e.preventDefault();
    var content = $('<tr> <td> <img src="http://www.gedachtegoed.nl/img/mobileimg1.png" alt="" class="image-swap"> </td> <td> <input type="text" value="1" id="qty" class="form-control"> </td> <td> <select class="sizeSelect form-control"> <option value="--">--</option> <option value="S (4)">S (4)</option> <option value="M (6-8)">M (6-8)</option> <option value="L (10-12)">L (10-12)</option> <option value="XL (14-16)">XL (14-16)</option> <option value="2XL (18-20)">2XL (18-20)</option> </select> </td> <td> <select class="brandName form-control"> <option value="http://www.gedachtegoed.nl/img/mobileimg1.png" data-price="19.99">Bella Women\'s Flowy Tank Black</option> <option value="http://www.gedachtegoed.nl/img/mobileimg2.png" data-price="20.99">Bella Women\'s Flowy Tank Black1</option> <option value="http://www.gedachtegoed.nl/img/mobileimg3.png" data-price="25.99">Bella Women\'s Flowy Tank Black2</option> <option value="http://www.gedachtegoed.nl/img/mobileimg4.png" data-price="27.99">Bella Women\'s Flowy Tank Black3</option> <option value="http://www.gedachtegoed.nl/img/mobileimg5.png" data-price="28.99">Bella Women\'s Flowy Tank Black4</option> </select> </td> <td> <p>$<span class="price">19.99</span></p> <span class="remove">Remove</span> </td> </tr>');
      $('.addCartTable').append(content);
      $('.remove').show();
  });
  $(document).on('click', '.remove', function (e) {
    console.log($('.addCartTable').find('tr').length);
    $(this).parents('tr').remove();
    if(($('.addCartTable').find('tr').length-1) == 1){
      console.log('pass');
      $('.remove').hide();
      event.stopPropagation();
    }
  });
   $(document).on('change', '.brandName',function(){
     console.log($(this).val());
     $(this).parents('tr').find('img.image-swap').attr("src",$(this).val());
     $(this).parents('tr').find('.price').html($(this).find('option:selected').data('price'));
   });
   $('.add-product-button').on('click', function (e) {
    e.preventDefault();
    console.log($(this).data('discount'));
    var price = $(this).data('discount');
    var content = $('<tr> <td> <img src="http://www.gedachtegoed.nl/img/mobileimg1.png" alt="" class="image-swap"> </td> <td> <input type="text" value="1" id="qty" class="form-control"> </td> <td> <select class="sizeSelect form-control"> <option value="--">--</option> <option value="S (4)">S (4)</option> <option value="M (6-8)">M (6-8)</option> <option value="L (10-12)">L (10-12)</option> <option value="XL (14-16)">XL (14-16)</option> <option value="2XL (18-20)">2XL (18-20)</option> </select> </td> <td> <select class="brandName form-control"> <option value="http://www.gedachtegoed.nl/img/mobileimg1.png" data-price="19.99" data-selected="Bella Women\'s Flowy Tank Black">Bella Women\'s Flowy Tank Black</option> <option value="http://www.gedachtegoed.nl/img/mobileimg2.png" data-price="20.99" data-selected="Bella Women\'s Flowy Tank Black1">Bella Women\'s Flowy Tank Black1</option> <option value="http://www.gedachtegoed.nl/img/mobileimg3.png" data-price="25.99" data-selected="Bella Women\'s Flowy Tank Black2">Bella Women\'s Flowy Tank Black2</option> <option value="http://www.gedachtegoed.nl/img/mobileimg4.png" data-price="27.99"  data-selected="Bella Women\'s Flowy Tank Black3">Bella Women\'s Flowy Tank Black3</option> <option value="http://www.gedachtegoed.nl/img/mobileimg5.png" data-price="28.99" data-selected="Bella Women\'s Flowy Tank Black4">Bella Women\'s Flowy Tank Black4</option> </select> </td> <td> <p>$<span class="price">'+price+'</span></p> <span class="remove">Remove</span> </td> </tr>');
      $('.addCartTable').append(content);
      $('.remove').show();
      $('.id_100 option')
         .removeAttr('select')
         .filter('[data-selected='+ $(this).data('select') +']')
             .attr('selected', true);
  });
  $(document, '#tp_result').on("submit", ".cart", function(e){
            e.preventDefault(e);
            $('#id').trigger('click');
        });
});