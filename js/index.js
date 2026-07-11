
const overlay = document.querySelector(".overlay");

show_me.addEventListener("click", function () {
    overlay.style.display = "block";
    document.querySelector(".bookPrevClass").classList.add("show");
});

function aboutBook(index) {
    overlay.style.display = "block";
    const prev = document.querySelector(".bookPrevClass");
    prev.classList.add("show");
    prev.innerHTML = `
        <a href="#"><img src=${img_src} alt=${img_alt}></a>
            <p class="prevLink">Ver <a href=${prevLink}>Pre-Visualização</a></p>
            <P>
            ${conteudo}
            </P>
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

prevButton.forEach((elemento, index) => {
    elemento.addEventListener("click", function () {
        aboutBook(index);
    })
});
