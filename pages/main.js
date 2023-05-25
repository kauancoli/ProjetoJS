//Faça uma requisição GET para a API e obtenha um array de objetos contendo os detalhes de cada imagem (URL da imagem, título, descrição, etc.).
//$.ajax({
 //   url: 'URL_DA_API',
 //   method: 'GET',
  //  success: function(response) {
      // Manipule a resposta da API aqui
  //  },
   // error: function(error) {
   //   console.log(error);
  //  }
  //});



// Itere sobre o array de objetos e, para cada imagem, crie um elemento <div> com a classe col-md-4 (ou outra classe de coluna apropriada) para representar uma coluna da grade.
  //success: function(response) {
    //var imageGrid = $('#image-grid');
  
    //response.forEach(function(image) {
      //var imageBlock = $('<div class="col-md-4"></div>');
      //var imageElement = $('<img class="img-fluid" src="' + image.url + '" alt="' + image.title + '">');
      //var titleElement = $('<h4>' + image.title + '</h4>');
      //var descriptionElement = $('<p>' + image.description + '</p>');
  
      //imageBlock.append(imageElement);
      //imageBlock.append(titleElement);
      //imageBlock.append(descriptionElement);
  
      //imageGrid.append(imageBlock);
    //});
  //};