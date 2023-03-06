/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

function showHideDesc() {
  var x = document.getElementsByClassName("extra-desc");
  var target = event.target;
  if(target.innerHTML =='Details &amp; Care -'){
    target.innerHTML = 'Details &amp; Care +'
  }else{
    target.innerHTML = 'Details &amp; Care -'
  };
  for(var i=0; i<x.length; i++) { 
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
}
function readyFn( jQuery ) {
    var currentColor = $('.swatchProductColor.currentSwatch').attr('data-name');
//   $( "<span class='ProductForm__Label'>Color1: "+currentColor+"</span>" ).insertBefore( ".swatchProductColor:first-child" );
  
  $('.hh_sale_banner .close_sale_banner').click(function(){
    $('.hh_sale_banner').slideToggle();
  });
}
$( window ).on( "load", readyFn );