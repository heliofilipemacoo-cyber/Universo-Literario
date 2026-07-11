const overlay = document.querySelector(".overlay");

function aboutBook(img_src, img_alt, prevLink, conteudo) {
    overlay.classList.add("show");
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
    // Regra - A imagem a ser adicionada deve ser em pt inicialmente, a imagem em pt e en devem estar na mesma pasta e a diverenca ente elas deve ser apenas a ulimacao pt ou en
    constructor(whereToPut) {
        this.whereToPut = whereToPut;
    }
    add_more(img_src_pt, img_alt, prevLink, conteudo, conteudo_en) {
        const img_pt = img_src_pt;
        const img_en = img_src_pt.replace(`pt`, `en`);
        const img_langs = [img_pt, img_en];
        const contents_langs = [conteudo, conteudo_en];
        for (let index = 0; index < img_langs.length; index++) {
            this.whereToPut.innerHTML += `
            <div class="livro"> 
                <div class="sobreLiv">
                    <img src="${img_langs[index]}" alt="${img_alt}" onclick="aboutBook('${img_langs[index]}', '${img_alt}', '${prevLink}', '${contents_langs[index]}')">
                </div>
                <div class="descr">
                    <p>
                        ${contents_langs[index]}
                    </p>
                    <div class="descrButtons">
                        <button type="button" class="prevButton" onclick="aboutBook('${img_langs[index]}', '${img_alt}', '${prevLink}', '${contents_langs[index]}')">Pre-visualização</button>
                        <a href="#" class="buyButton">Comprar já</a>
                    </div>
                </div>
            </div>
            `;
        }
    }
};

popUpLivro = {
    n: [
        {
            img_src_pt: `imagens/books_capa/between_mirrors-pt.webp`,
            img_alt: `Between Mirrors`,
            prevLink: `#`,
            conteudo_pt: `O livro e intenso cheio de misterios e suspense, cada paguina e um terror cada palavra e um explandor de historias, e um livro que vai te prender do inicio ao fim, e um livro que vai te fazer refletir sobre a vida e o mundo, e um livro que vai te fazer chorar e rir, e um livro que vai te fazer sentir tudo ao mesmo tempo, e um livro que vai te fazer sentir vivo.`,
            conteudo_en: `The book is intense, full of mystery and suspense. Every page is terrifying, every word is an unfolding of stories. It's a book that will captivate you from beginning to end. It's a book that will make you reflect on life and the world. It's a book that will make you cry and laugh. It's a book that will make you feel everything at once. It's a book that will make you feel alive.`
        },
        {
            img_src_pt: `imagens/books_capa/d_317-pt.webp`,
            img_alt: `D-317`,
            prevLink: `#`,
            conteudo_pt: `Este livro apresenta uma história envolvente, com personagens marcantes e uma narrativa que mistura reflexão e suspense.`,
            conteudo_en: `This book offers an engaging story, memorable characters, and a narrative that blends reflection with suspense.`
        },
        {
            img_src_pt: `imagens/books_capa/the_world_is_not_for_the_clever-pt.webp`,
            img_alt: `The World Is Not for the Clever`,
            prevLink: `#`,
            conteudo_pt: `Uma obra intrigante que desafia a percepção do leitor e explora temas profundos com linguagem envolvente.`,
            conteudo_en: `An intriguing work that challenges the reader's perception and explores deep themes with engaging language.`
        },]
}

const BooksContent = new True_content(sectLiv);
for (let index = 0; index < popUpLivro.n.length; index++) {
    BooksContent.add_more(
        popUpLivro.n[index].img_src_pt,
        popUpLivro.n[index].img_alt,
        popUpLivro.n[index].prevLink,
        popUpLivro.n[index].conteudo_pt,
        popUpLivro.n[index].conteudo_en
    );
}









/* <div class="livro">
    <div class="sobreLiv">
        <picture>
            <source srcset="imagens/between_mirrors-en.webp" lang="en">
            <source srcset="imagens/between_mirrors-pt.webp" lang="pt">
            <img src="imagens/between_mirrors-pt.webp" alt="Between mirrors">
        </picture>
    </div>
    <div class="descr">
        <p>
             Facilis exercitationem quod voluptatibus veniam illum unde eum vero eius soluta itaque modi quos facere amet laudantium, placeat optio consectetur cumque enim.
        </p>
        <div class="descrButtons">
            <button type="button" class="prevButton">Pre-visualização</button>
            <button type="button" class="buyButton">Comprar já</button>
        </div>
    </div>
</div>
*/