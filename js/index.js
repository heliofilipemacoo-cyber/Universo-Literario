const overlay = document.querySelector(".overlay");

function aboutBook(img_src, img_alt, prevLink, conteudo) {
    overlay.classList.add("show");
    const prev = document.querySelector(".bookPrevClass");
    prev.classList.add("show");
    prev.innerHTML = `
        <a href="#"><img src="${img_src}" alt="${img_alt}"></a>
                <p class="prLink">Ver <a href="${prevLink}" target="_blank" rel="noopener noreferrer" type="application/pdf" title="Ler a pré-visualização do livro (PDF)" aria-label="Abrir a pré-visualização do livro em PDF numa nova aba">
                    Ler pré-visualização
                </a></p>
                
            <p>
            ${conteudo}
            </p>
    `;
    /*
    <div class="InfosCard">
            <p class="livroInfo">Categoria: <span></span></p>
    </div>
    */
}

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.classList.remove("show");
    };
})
addEventListener("scroll", () => {
    if (overlay.classList.contains("show")) {
        overlay.classList.remove("show");
    }
})

const sectLiv = document.querySelector(".sectLiv");
class True_content {
    constructor(whereToPut) {
        this.whereToPut = whereToPut;
    }
    add_more(img_src_pt, img_alt, prevLink, conteudo_pt, conteudo_en, buyLink_pt, buyLink_en) {
        img_src_pt = "imagens/books_capa/"+img_src_pt;
        const prevLink_pt = "../preVisualizar/"+prevLink;
        const prevLink_en = "../preVisualizar/"+prevLink.replace(`pt`, `en`);
        const img_pt = img_src_pt;
        const img_en = img_src_pt.replace(`pt`, `en`);
        
        const img_langs = [img_pt, img_en];
        const prevLinks = [prevLink_pt, prevLink_en];
        const contents_langs = [conteudo_pt, conteudo_en];
        
        const buyLinks = [buyLink_pt, buyLink_en];
        for (let index = 0; index < img_langs.length; index++) {
            
            const livro = document.createElement("div");
            livro.className = "livro";
            livro.innerHTML = `
                <div class="sobreLiv">
                    <img src="${img_langs[index]}" alt="${img_alt}">
                </div>
                <div class="descr">
                    <p>
                        ${contents_langs[index]}
                    </p>
                    <div class="descrButtons">
                        <button type="button" class="prevButton">Pre-visualização</button>
                        <a href="${buyLinks[index]}" class="buyButton">Comprar já</a>
                    </div>
                </div>
            `;
            
            const openPreview = () => aboutBook(img_langs[index], img_alt, prevLinks[index], contents_langs[index]);
            livro.querySelector(".sobreLiv img").addEventListener("click", openPreview);
            livro.querySelector(".prevButton").addEventListener("click", openPreview);
            this.whereToPut.appendChild(livro);
        }
    }
};

// Regras:
/*
A imagem em pt deve ter o sufixo <<-pt>>
As suas variantes em inglês devem ter <<-en>>
Caso contrário Um erro ocorra.
NB: As imagens devem ter o mesmo Nome e devem estar na mesma Pasta, com sufixos <<-pt>> para português e <<-en>> para inglês 
*/
fetch("json/books.json")
    .then(response => {
        if (!response.ok) throw new Error(`Não foi possível carregar books.json (status ${response.status})`);
        return response.json();
    })
    .then(books => {
        const BooksContent = new True_content(sectLiv);
        books.forEach(book => {
            BooksContent.add_more(
                book.img_src_pt,
                book.img_alt,
                book.prevLink,
                book.conteudo_pt,
                book.conteudo_en,
                book.buyLink_pt,
                book.buyLink_en
            );
        });
    })
    .catch(error => console.error("Erro ao carregar os livros:", error));

// Carrossel de imagens de fundo do hero (crossfade automático)
const heroImages = document.querySelectorAll(".hero-bg");
if (heroImages.length > 1) {
    let heroIndex = 0;
    setInterval(() => {
        heroImages[heroIndex].classList.remove("active");
        heroIndex = (heroIndex + 1) % heroImages.length;
        heroImages[heroIndex].classList.add("active");
    }, 5000); // troca de imagem a cada 5 segundos
}