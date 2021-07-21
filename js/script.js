$(document).ready(function(){
    $("#add").click(function(event){
        var num1 =parseInt($("#calc1").val());
        var num2 =parseInt($("#calc2").val());
        var addition= (num1 + num2);
        $("#results").text(addition);
        event.preventDefault();
    });
});
$(document).ready(function(){
    $("#sub").click(function(event){
        var num1 =parseInt($("#calc1").val());
        var num2 =parseInt($("#calc2").val());
        var subtraction= (num1 - num2);
        $("#results").text(subtraction);
        event.preventDefault();
    });
});
$(document).ready(function(){
    $("#multiply").click(function(event){
        var num1 =parseInt($("#calc1").val());
        var num2 =parseInt($("#calc2").val());
        var multiplication= (num1 * num2);
        $("#results").text(multiplication);
        event.preventDefault();
    });
});
$(document).ready(function(){
    $("#division").click(function(event){
        var num1 =parseInt($("#calc1").val());
        var num2 =parseInt($("#calc2").val());
        var division= (num1 + num2);
        $("#results").text(division);
        event.preventDefault();
    });
});