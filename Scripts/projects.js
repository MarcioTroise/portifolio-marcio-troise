function openImage(nImage) {
    const pictures = document.getElementById("project-" + nImage);

    // Verifica se o span já existe
    let createPrhase = pictures.querySelector(".closeMessage");
    if (!createPrhase) {
        createPrhase = document.createElement("span");
        createPrhase.className = "closeMessage";
        createPrhase.innerText = "Click na imagem para fechar...";
        createPrhase.style.display = "none";
        pictures.appendChild(createPrhase);
    }

    // Alterna a classe showImage ao clicar ou com a tecla ESC
    if (pictures.classList.contains("showImage")) {
        pictures.classList.remove("showImage");
        createPrhase.style.display = "none";
        document.removeEventListener("keydown", handleKeydown);
    } else {
        // Adiciona o evento ESC
        pictures.classList.add("showImage");
        createPrhase.style.display = "block";
        document.addEventListener("keydown", handleKeydown);
    }
    // Ajusta comportamento no mobile
    if (window.innerWidth <= 768) {
        pictures.style.top = "0";
    }
}

// Função para lidar com a tecla ESC
function handleKeydown(event) {
    if (event.key === "Escape") {
    const openImages = document.querySelectorAll(".showImage");
    openImages.forEach((image) => {
        image.classList.remove("showImage");
        const span = image.querySelector(".closeMessage");
        if (span) span.style.display = "none";
    });
    // Remove o evento para evitar acúmulo
    document.removeEventListener("keydown", handleKeydown);
    }
}
