console.log("EXO 25");

jQuery(($) => {
  
  $("#img-exo25").show();

  $.ajax({
    url: "https://picsum.photos/v2/list",
  }).done(function(data) {    
    const dataImg = data.map((img) => {
      return `https://picsum.photos/id/${img.id}/400/300`;
    })
    console.log(dataImg);

    dataImg.forEach(elem => {
      // Pour chaque élément du tableau qui est une url d'image, on créé une nouvelle image
      // avec sa source que l'on place ensuite dans la section "#img-exo25"
      $("<img></img>", {
        src: elem,
        class: "jquery-img"
      }).appendTo("#img-exo25")
    });

    $(".jquery-img").on("click", function() {
      console.log(this)
      // On fait une animation lorsque l'évènement "click" pour l'élément
      // L'élément se met à une opacité de 0.75
      $(this).animate({
        opacity: 0.75
      }, 1000)  
    })
  });

})
