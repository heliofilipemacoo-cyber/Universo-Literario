const overlay = document.querySelector(".overlay");

function aboutBook(img_src, img_alt, prevLink, conteudo) {
    overlay.style.display = "block";
    const prev = document.querySelector(".bookPrevClass");
    prev.classList.add("show");
    prev.innerHTML = `
        <a href="#"><img src=${img_src} alt=${img_alt}></a>
            <p class="prevLink">Ver <a href=${prevLink}>Pre-Visualização</a></p>
            <p>
            ${conteudo}
            </p>
    `;
}

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.display = "none";
    };
})
addEventListener("scroll", () => {
    if (overlay.style.display == "block") {
        overlay.style.display = "none";
    }
})

const prevButton = document.querySelectorAll(".prevButton");

popUpLivro = {
    n: [
    {
        prevLink: `#`,
        img_alt: `Between mirrors`,
        img_src_pt: `imagens/between_mirrors-pt.webp`,
        img_src_en: `imagens/between_mirrors-en.webp`,
        conteudo: `Bettew mirroooooooosoosososososo`
    },
    {
        prevLink: `#`,
        img_alt: `The world is not for the clever`,
        img_src_pt: `imagens/the_world_is_not_for_the_clever-pt.webp`,
        img_src_en: `imagens/the_world_is_not_for_the_clever-en.webp`,
        conteudo: `the_world_is_not_for_the_clever-en...`
    },
    {
        prevLink: `#`,
        img_alt: `Diary 317`,
        img_src_pt: `imagens/d_317-pt.webp`,
        img_src_en: `imagens/d_317-en.webp`,
        conteudo: `d 317-en...`
    }, ]
}

prevButton.forEach((elemento, index) => {
    elemento.addEventListener("click", function() {
        if (index < popUpLivro.n.length) {
            aboutBook(
                popUpLivro.n[index].img_src_en,
                popUpLivro.n[index].img_alt,
                popUpLivro.n[index].prevLink,
                popUpLivro.n[index].conteudo,
            );
        } else {
            aboutBook(
                `imagens/erro_type/book_not_found.webp`,
                `Image not found - Imagem não encontrada`,
                `#`,
                `Image not found - Imagem não encontrada`,
            );
        }
        
    })
});