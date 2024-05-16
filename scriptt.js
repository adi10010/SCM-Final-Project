$(document).ready(function() {


    $( "a" ).click(function( event ) {
          event.preventDefault();
    });
    
    var numOfOrders = 0;
    $(".num").text(numOfOrders);

    // hide dialogs on start
    $("#thanksMessage, #checkOrderHamburger, #checkOrderMomo, #checkOrderPizza, #checkOrderFries, #checkOrderChowmien, #checkOrderbiryani, #finishOrderDialog").hide();

    // open dialog on click
    $("#addToCartHamburger").on("click", function () {
        $("#checkOrderHamburger").dialog({
                hide: "blind",
                show : "blind",
                width: "400px",
              closeText: "X"});
    })
    
    $("#addToCartMomo").on("click", function () {
        $("#checkOrderMomo").dialog({
                hide: "blind",
                show : "blind",
                width: "400px",
              closeText: "X"});
    })

