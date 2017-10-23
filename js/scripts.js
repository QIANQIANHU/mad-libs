$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blanks = ["adjective1", "verb1", "verb2", "person1", "fruit", "season", "person2", "noun1", "person3", "noun2", "place", "person4", "person5", "verb3", "color", "adjective2"];
    blanks.forEach(function (blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });
    // var numbers = [1,2,3,4,5];
    //
    // var doubledNumbers = numbers.map(function(number) {
    //   return number * 2;
    // });
    //
    // alert(doubledNumbers);

    // var adjective1Input = $("input#adjective1").val();
    // var verb1Input = $("input#verb1").val();
    // var verb2Input= $("input#verb2").val();
    // var person1Input = $("input#person1").val();
    // var fruitInput = $("input#fruit").val();
    // var seasonInput = $("input#season").val();
    // var person2Input = $("input#person2").val();
    // var noun1Input = $("input#noun1").val();
    // var person3Input = $("input#person3").val();
    // var noun2Input = $("input#noun2").val();
    // var placeInput = $("input#place").val();
    // var person4Input = $("input#person4").val();
    // var person5Input = $("input#person5").val();
    // var verb3Input = $("input#verb3").val();
    // var colorInput = $("input#color").val();
    // var adjective2Input = $("input#adjective2").val();
    //
    // $(".adjective1").text(adjective1Input);
    // $(".verb1").text(verb1Input);
    // $(".verb2").text(verb2Input);
    // $(".person1").text(person1Input);
    // $(".fruit").text(fruitInput);
    // $(".season").text(seasonInput);
    // $(".person2").text(person2Input);
    // $(".noun1").text(noun1Input);
    // $(".person3").text(person3Input);
    // $(".noun2").text(noun2Input);
    // $(".place").text(placeInput);
    // $(".person4").text(person4Input);
    // $(".person5").text(person5Input);
    // $(".verb3").text(verb3Input);
    // $(".color").text(colorInput);
    // $(".adjective2").text(adjective2Input);

    $("#story").show();

    event.preventDefault();
  })
})
