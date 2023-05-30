//Requisição de imagens
const pageRandom = Math.floor(Math.random() * 99) + 1;
const url = `https://picsum.photos/v2/list?page=${pageRandom}&limit=9`;

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("A requisição não pôde ser concluída.");
    }
  })
  .then((data) => {
    console.log(data);

    const imageGrid = document.getElementById("image-grid");

    data.forEach((item) => {
      const imageBlock = document.createElement("div");
      imageBlock.className = "col-md-4";

      const imageElement = document.createElement("img");
      imageElement.className = "img-fluid";
      imageElement.src = item.download_url;
      imageElement.id = item.id;
      imageElement.height = item.height;
      imageElement.width = item.width;
      imageElement.author = item.author;

      const titleElement = document.createElement("h4");
      titleElement.textContent = item.author;

      imageBlock.appendChild(imageElement).onclick = function () {
        const imageUrl = item.download_url;
        const imageId = item.id;
        const imagewidth = item.width;
        const imageHeight = item.height;
        const authorName = item.author;

        const encodedUrl = encodeURIComponent(imageUrl);
        const encodedwidth = encodeURIComponent(imagewidth);
        const encodedHeight = encodeURIComponent(imageHeight);
        const encodedId = encodeURIComponent(imageId);
        const encodedAuthor = encodeURIComponent(authorName);

        window.location.href = `page2.html?url=${encodedUrl}&author=${encodedAuthor}&id=${encodedId}&width=${encodedwidth}&height=${encodedHeight}`;
      };

      imageBlock.appendChild(titleElement);
      imageGrid.appendChild(imageBlock);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

//Página 3
function adicionarImagem(event) {
  event.preventDefault();

  const imageUrl = document.getElementById("imageUrl").value;
  const imageTitle = document.getElementById("imageTitle").value;
  const imageDescription = document.getElementById("imageDescription").value;

  const gallery = document.querySelector(".gallery");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const newImage = document.createElement("img");
  newImage.setAttribute("src", imageUrl);
  newImage.setAttribute("alt", imageTitle);

  const titleElement = document.createElement("h2");
  titleElement.textContent = imageTitle;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = imageDescription;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.addEventListener("click", function () {
    gallery.removeChild(imageContainer);

    const storedImages = JSON.parse(localStorage.getItem("images")) || [];
    const updatedImages = storedImages.filter(
      (image) => image.url !== imageUrl
    );
    localStorage.setItem("images", JSON.stringify(updatedImages));
  });

  imageContainer.appendChild(newImage);
  imageContainer.appendChild(titleElement);
  imageContainer.appendChild(descriptionElement);
  imageContainer.appendChild(removeButton);

  gallery.appendChild(imageContainer);

  const storedImages = JSON.parse(localStorage.getItem("images")) || [];
  const newStoredImage = {
    url: imageUrl,
    title: imageTitle,
    description: imageDescription,
  };
  storedImages.push(newStoredImage);
  localStorage.setItem("images", JSON.stringify(storedImages));

  document.getElementById("imageUrl").value = "";
  document.getElementById("imageTitle").value = "";
  document.getElementById("imageDescription").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", adicionarImagem);

  const storedImages = JSON.parse(localStorage.getItem("images")) || [];
  const gallery = document.querySelector(".gallery");

  storedImages.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const newImage = document.createElement("img");
    newImage.setAttribute("src", image.url);
    newImage.setAttribute("alt", image.title);

    const titleElement = document.createElement("h2");
    titleElement.textContent = image.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = image.description;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function () {
      gallery.removeChild(imageContainer);

      const updatedImages = storedImages.filter((img) => img.url !== image.url);
      localStorage.setItem("images", JSON.stringify(updatedImages));
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

  const imageUrl = document.getElementById("imageUrl").value;
  const imageTitle = document.getElementById("imageTitle").value;
  const imageDescription = document.getElementById("imageDescription").value;

  const gallery = document.querySelector(".gallery");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const newImage = document.createElement("img");
  newImage.setAttribute("src", imageUrl);
  newImage.setAttribute("alt", imageTitle);

  const titleElement = document.createElement("h2");
  titleElement.textContent = imageTitle;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = imageDescription;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.addEventListener("click", function () {
    gallery.removeChild(imageContainer);

    const storedImages = JSON.parse(localStorage.getItem("page4Images")) || [];
    const updatedImages = storedImages.filter(
      (image) => image.url !== imageUrl
    );
    localStorage.setItem("page4Images", JSON.stringify(updatedImages));
  });

  imageContainer.appendChild(newImage);
  imageContainer.appendChild(titleElement);
  imageContainer.appendChild(descriptionElement);
  imageContainer.appendChild(removeButton);

  if (gallery.id === "page4Gallery") {
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", function () {
      titleElement.contentEditable = true;
      descriptionElement.contentEditable = true;
      titleElement.focus();
    });
    imageContainer.appendChild(editButton);
  }

  gallery.appendChild(imageContainer);

  const storedImages = JSON.parse(localStorage.getItem("page4Images")) || [];
  const newStoredImage = {
    url: imageUrl,
    title: imageTitle,
    description: imageDescription,
  };
  storedImages.push(newStoredImage);
  localStorage.setItem("page4Images", JSON.stringify(storedImages));

  document.getElementById("imageUrl").value = "";
  document.getElementById("imageTitle").value = "";
  document.getElementById("imageDescription").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", adicionarImagem);

  const gallery = document.querySelector(".gallery");
  const storedImages = JSON.parse(localStorage.getItem("page4Images")) || [];

  storedImages.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const newImage = document.createElement("img");
    newImage.setAttribute("src", image.url);
    newImage.setAttribute("alt", image.title);

    const titleElement = document.createElement("h2");
    titleElement.textContent = image.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = image.description;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function () {
      gallery.removeChild(imageContainer);

      const updatedImages = storedImages.filter((img) => img.url !== image.url);
      localStorage.setItem("page4Images", JSON.stringify(updatedImages));
    });

    if (gallery.id === "page4Gallery") {
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.addEventListener("click", function () {
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
