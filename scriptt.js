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
        $("#addToCartPizza").on("click", function () {
        $("#checkOrderPizza").dialog({
                hide: "blind",
                show : "blind",
                width: "400px",
              closeText: "X"});
    })
    
    $("#addToCartFries").on("click", function () {
        $("#checkOrderFries").dialog({
                hide: "blind",
                show : "blind",
                width: "400px",
              closeText: "X"});
    })
    
    $("#addToCartChowmien").on("click", function () {
        $("#checkOrderChowmien").dialog({
                hide: "blind",
                show : "blind",
                width: "400px",
              closeText: "X"});
    })
        $("#addToCartbiryani").on("click", function () {
        $("#checkOrderbiryani").dialog({
                hide: "blind",
                show : "blind",
                width: "400px",
              closeText: "X"});
    })
    
    // increase/decrease the price of order if an item is added/removed
    function checkboxChange(x) {
        var priceDialog = 0;
        $("#recipe"+x).children("li").children("input").each(function () {
            if($(this).is(":checked")){
                priceDialog+=3;
            }

                $("#totalDialog"+x+">span").text(priceDialog);
            $(this).change(function () {
                if ($(this).is(":checked")) {
                    priceDialog += 3;
                    console.log(priceDialog);
                    $("#totalDialog"+x+">span").text(priceDialog);
                }else{
                    priceDialog -= 3;
                    $("#totalDialog"+x+">span").text(priceDialog);
                }
            })
        });
    }
    
    $('#recipe1').children('li').click(checkboxChange(1));
    $('#recipe2').children('li').click(checkboxChange(2));
    $('#recipe3').children('li').click(checkboxChange(3));
    $('#recipe3').children('li').click(checkboxChange(4));
    $('#recipe3').children('li').click(checkboxChange(5));
    $('#recipe3').children('li').click(checkboxChange(6));
        $(".addIngredient").on("click", function () {
        // Creates input field and two buttons for adding an ingrediant that's not on the list
        var inputIng = '<input type="text" id="newIngredient">';
        var confirmInput = '<a class="btnStyle3 btnStyle confirmInput">&#10004;</a>';
        var cancelInput = '<a class="btnStyle3 btnStyle cancelInput">&#10008;</a>';
        var inputWrap = '<div class="addIngredientWrap">' + inputIng + confirmInput + cancelInput + '</div>'
        $(this).parent().children("ul").after(inputWrap);
    $("#newIngredient").focus();
    $("#newIngredient").attr("placeholder", "separate ingredients with a comma");










