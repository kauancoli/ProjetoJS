let xhr = new XMLHttpRequest();

let pageRandom = Math.floor(Math.random() * 99) + 1;

xhr.open("GET", `https://picsum.photos/v2/list?page=${pageRandom}&limit=10`);

xhr.onload = function () {
  if ((xhr.status = 200)) {
    let response = JSON.parse(xhr.responseText);

    let imageGrid = document.getElementById("image-grid");

    for (let i = 0; i < response.length; i++) {
      let imageBlock = document.createElement("div");
      imageBlock.className = "col-md-4";

      let imageElement = document.createElement("img");
      imageElement.className = "img-fluid";
      imageElement.src = response[i].download_url;
      imageElement.alt = response[i].author;
      imageElement.id = response[i].id;

      let titleElement = document.createElement("h4");
      titleElement.textContent = response[i].author;

      imageBlock.appendChild(imageElement).onclick = function () {
        const imageUrl = response[i].download_url;
        const authorName = response[i].author;

        const encodedUrl = encodeURIComponent(imageUrl);
        const encodedAuthor = encodeURIComponent(authorName);

        window.location.href = `page2.html?url=${encodedUrl}&author=${encodedAuthor}`;
      };
      imageBlock.appendChild(titleElement);
      imageGrid.appendChild(imageBlock);
    }
  } else {
    console.error("A requisição não pôde ser concluída.");
  }
};

xhr.send();

//Página 3

function adicionarImagem(event) {
  event.preventDefault();

  const imageUrl = document.getElementById('imageUrl').value;
  const imageTitle = document.getElementById('imageTitle').value;
  const imageDescription = document.getElementById('imageDescription').value;

  const gallery = document.querySelector('.gallery');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const newImage = document.createElement('img');
  newImage.setAttribute('src', imageUrl);
  newImage.setAttribute('alt', imageTitle);

  const titleElement = document.createElement('h2');
  titleElement.textContent = imageTitle;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = imageDescription;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.addEventListener('click', function() {
    gallery.removeChild(imageContainer);

    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    const updatedImages = storedImages.filter(image => image.url !== imageUrl);
    localStorage.setItem('images', JSON.stringify(updatedImages));
  });

  imageContainer.appendChild(newImage);
  imageContainer.appendChild(titleElement);
  imageContainer.appendChild(descriptionElement);
  imageContainer.appendChild(removeButton);

  gallery.appendChild(imageContainer);

  const storedImages = JSON.parse(localStorage.getItem('images')) || [];
  const newStoredImage = { url: imageUrl, title: imageTitle, description: imageDescription };
  storedImages.push(newStoredImage);
  localStorage.setItem('images', JSON.stringify(storedImages));

  document.getElementById('imageUrl').value = '';
  document.getElementById('imageTitle').value = '';
  document.getElementById('imageDescription').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', adicionarImagem);

  const storedImages = JSON.parse(localStorage.getItem('images')) || [];
  const gallery = document.querySelector('.gallery');

  storedImages.forEach(image => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.setAttribute('alt', image.title);

    const titleElement = document.createElement('h2');
    titleElement.textContent = image.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = image.description;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
      gallery.removeChild(imageContainer);

      const updatedImages = storedImages.filter(img => img.url !== image.url);
      localStorage.setItem('images', JSON.stringify(updatedImages));
    });

    imageContainer.appendChild(newImage);
    imageContainer.appendChild(titleElement);
    imageContainer.appendChild(descriptionElement);
    imageContainer.appendChild(removeButton);

    gallery.appendChild(imageContainer);
  });
});

//Página 4

function adicionarImagem(event) {
  event.preventDefault();

  const imageUrl = document.getElementById('imageUrl').value;
  const imageTitle = document.getElementById('imageTitle').value;
  const imageDescription = document.getElementById('imageDescription').value;

  const gallery = document.querySelector('.gallery');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const newImage = document.createElement('img');
  newImage.setAttribute('src', imageUrl);
  newImage.setAttribute('alt', imageTitle);

  const titleElement = document.createElement('h2');
  titleElement.textContent = imageTitle;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = imageDescription;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.addEventListener('click', function() {
    gallery.removeChild(imageContainer);
    // Remover também do LocalStorage
    const storedImages = JSON.parse(localStorage.getItem('page4Images')) || [];
    const updatedImages = storedImages.filter(image => image.url !== imageUrl);
    localStorage.setItem('page4Images', JSON.stringify(updatedImages));
  });

  imageContainer.appendChild(newImage);
  imageContainer.appendChild(titleElement);
  imageContainer.appendChild(descriptionElement);
  imageContainer.appendChild(removeButton);

  if (gallery.id === 'page4Gallery') {
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function() {
      titleElement.contentEditable = true;
      descriptionElement.contentEditable = true;
      titleElement.focus();
    });
    imageContainer.appendChild(editButton);
  }

  gallery.appendChild(imageContainer);

  // Adicionar ao LocalStorage da página 4
  const storedImages = JSON.parse(localStorage.getItem('page4Images')) || [];
  const newStoredImage = { url: imageUrl, title: imageTitle, description: imageDescription };
  storedImages.push(newStoredImage);
  localStorage.setItem('page4Images', JSON.stringify(storedImages));

  document.getElementById('imageUrl').value = '';
  document.getElementById('imageTitle').value = '';
  document.getElementById('imageDescription').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', adicionarImagem);

  const gallery = document.querySelector('.gallery');
  const storedImages = JSON.parse(localStorage.getItem('page4Images')) || [];

  storedImages.forEach(image => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.setAttribute('alt', image.title);

    const titleElement = document.createElement('h2');
    titleElement.textContent = image.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = image.description;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
      gallery.removeChild(imageContainer);
      // Remover também do LocalStorage
      const updatedImages = storedImages.filter(img => img.url !== image.url);
      localStorage.setItem('page4Images', JSON.stringify(updatedImages));
    });

    if (gallery.id === 'page4Gallery') {
      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.addEventListener('click', function() {
        titleElement.contentEditable = true;
        descriptionElement.contentEditable = true;
        titleElement.focus();
      });
      imageContainer.appendChild(editButton);
    }

    imageContainer.appendChild(newImage);
    imageContainer.appendChild(titleElement);
    imageContainer.appendChild(descriptionElement);
    imageContainer.appendChild(removeButton);

    gallery.appendChild(imageContainer);
  });
});