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
        src: elem
      }).appendTo("#img-exo25")

      // ON FAIT UNE ANIMATION BOUGER SA POSITION DE HAUT EN BAS
      // $(".image-exo25").animate({
      //   left: "+=300"
      // }, 2000)
    });

  });

})