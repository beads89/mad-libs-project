$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const noun1Input = $("input#noun1").val();
    const person2Input = $("input#person2").val();
    const noun2Input = $("input#noun2").val();
    const foodInput = $("input#food").val();

    $(".person1").text(person1Input);
    $(".noun1").text(noun1Input);
    $(".person2").text(person2Input);
    $(".noun2").text(noun2Input);
    $(".food").text(foodInput);

    $("#story").show(); 
  });
});