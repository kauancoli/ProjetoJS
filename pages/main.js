let xhr = new XMLHttpRequest();

let pageRandom = Math.floor(Math.random() * 99) + 1;

xhr.open("GET", `https://picsum.photos/v2/list?page=${pageRandom}&limit=9`);

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
