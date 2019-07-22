$(document).ready(function(){
    $('.info1').hide();
    $('.info2').hide();
    $('.info3').hide();

    $("#designimage").click(function(){
      $('#designimage').slideUp();
      $(".info1").show(500);
    });
    $(".info1").click(function(){
      $("#designimage").slideDown();
      $(".info1").hide();
    });
  
  
  
    $("#developmentimage").click(function(){
        $('#developmentimage').slideUp();
        $(".info2").show(500);
    });
    $(".info2").click(function(){
      $("#developmentimage").slideDown();
      $(".info2").hide();
    });
  
  
  
    $("#productimage").click(function(){
        $('#productimage').slideUp();
        $(".info3").show(500);
    });
    $(".info3").click(function(){
      $("#productimage").slideDown();
      $(".info3").hide();
    });

    
    $("#image1").mouseover(function(){
        $("#one").show();
      }).mouseout(function(){
        $("#one").hide();
      });
      $("#image2").mouseover(function(){
        $("#two").show();
      }).mouseout(function(){
        $("#two").hide();
      });
      $("#image3").mouseover(function(){
        $("#three").show();
      }).mouseout(function(){
        $("#three").hide();
      });
      $("#image4").mouseover(function(){
        $("#four").show();
      }).mouseout(function(){
        $("#four").hide();
      });
      $("#image5").mouseover(function(){
        $("#five").show();
      }).mouseout(function(){
        $("#five").hide();
      });
      $("#image6").mouseover(function(){
        $("#six").show();
      }).mouseout(function(){
        $("#six").hide();
      });
      $("#image7").mouseover(function(){
        $("#seven").show();
      }).mouseout(function(){
        $("#seven").hide();
      });
      $("#image8").mouseover(function(){
        $("#eight").show();
      }).mouseout(function(){
        $("#eight").hide();
      });
      $("form#form").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("input#message").val();
        if ($("input#name").val() && $("input#email").val() && $("input#message").val()!= "" ){
          alert (name + ", we have received your message. Thank you for contacting us.");
        }
        else {
          alert("Fill in all your details please!")
        }
        event.preventDefault();
      });

});
    

































