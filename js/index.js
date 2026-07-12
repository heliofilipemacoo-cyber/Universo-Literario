const overlay = document.querySelector(".overlay");

function aboutBook(img_src, img_alt, prevLink, conteudo) {
    overlay.classList.add("show");
    const prev = document.querySelector(".bookPrevClass");
    prev.classList.add("show");
    prev.innerHTML = `
        <a href="#"><img src="${img_src}" alt="${img_alt}"></a>
            <p class="prevLink">Ver <a href="${prevLink}">Pre-Visualização</a></p>
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
    add_more(img_src_pt, img_alt, prevLink, conteudo_pt, conteudo_en, buyLink_pt, buyLink_en) {
        const img_pt = img_src_pt;
        const img_en = img_src_pt.replace(`pt`, `en`);
        
        const img_langs = [img_pt, img_en];
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
            
            const openPreview = () => aboutBook(img_langs[index], img_alt, prevLink, contents_langs[index]);
            livro.querySelector(".sobreLiv img").addEventListener("click", openPreview);
            livro.querySelector(".prevButton").addEventListener("click", openPreview);
            this.whereToPut.appendChild(livro);
        }
    }
};

popUpLivro = {
    n: [
    {
        // Between Mirrors
        img_src_pt: `imagens/books_capa/between_mirrors-pt.webp`,
        img_alt: `Between Mirrors`,
        prevLink: `#`,
        conteudo_pt: `Lúcifer construiu uma vida que muitos invejariam. Aos 28 anos, é financeiramente bem-sucedido, frequenta ambientes elitistas e está cercado por pessoas que representam tudo aquilo que ele acredita ser sinônimo de sucesso. Para ele, a vida é simples: afastar-se de tudo que possa lembrá-lo de suas origens e provar, todos os dias, que é diferente daqueles que ele aprendeu a desprezar. 
            <br><br> 
            Criado em um ambiente dominado por padrões que não refletiam sua própria identidade, Lúcifer passou a enxergar a própria existência como algo que precisava ser corrigido.Ao longo dos anos, ele moldou sua personalidade, seus hábitos e até suas relações sociais para se aproximar de um mundo que ele acredita ser superior.Mas quanto mais ele tenta se encaixar, mais distante ele se torna de si mesmo.
            <br><br>
            Laynel, seu amigo de longa data, observa essa transformação com preocupação.Diferente de Lúcifer, ele carrega orgulho da própria história e acredita que negar quem somos cobra um preço alto demais.Entre conversas tensas, confrontos emocionais e silêncios carregados de significado, Laynel tenta mostrar ao amigo que algumas batalhas não podem ser vencidas fugindo do espelho.
            <br><br>
            Enquanto isso, Richard, símbolo do mundo que Lúcifer deseja pertencer, reforça de forma sutil e cruel os limites invisíveis que separam aceitação e rejeição.Em meio a luxos, status e relações superficiais, Lúcifer se vê cada vez mais preso a uma realidade construída sobre aparência e negação.
            <br><br>
            Mas tudo muda quando um episódio de humilhação racial o coloca frente a frente com a verdade que ele passou a vida inteira tentando evitar.A partir desse momento, Lúcifer inicia uma jornada silenciosa e dolorosa, onde cada escolha o aproxima ou o afasta daquilo que ele realmente é.
            <br><br>
            Entre Espelhos e Mentiras é uma narrativa intensa sobre identidade, pertencimento e os conflitos invisíveis que podem existir dentro de um homem.Uma história que mergulha na mente de alguém que escolheu negar suas raízes, e que agora precisa enfrentar as consequências dessa decisão.
            <br><br>
            Uma obra que provoca, incomoda e convida o leitor a refletir sobre até onde alguém pode ir para ser aceito, e qual é o verdadeiro custo de abandonar a própria essência.
            `,
        conteudo_en: `Lucifer has built a life that many would envy. At twenty-eight, he is financially successful, moves in elite circles, and is surrounded by people who embody everything he equates with success. To him, life is simple: distance himself from anything that might remind him of his origins and prove, day after day, that he is different from those he learned to despise. <br><br> Raised in an environment dominated by standards that did not reflect his own identity, Lucifer came to view his very existence as something that needed to be corrected. Over the years, he has molded his personality, habits, and even his social connections to align with a world he deems superior. Yet, the harder he tries to fit in, the further he drifts from his true self. <br><br> Laynel, his longtime friend, watches this transformation with concern. Unlike Lucifer, he takes pride in his own history and believes that denying who we are comes at too high a price. Through tense conversations, emotional confrontations, and silence heavy with meaning, Laynel tries to show his friend that some battles cannot be won by running away from the mirror. <br><br> Meanwhile, Richard—the embodiment of the world Lucifer longs to belong to—subtly and cruelly reinforces the invisible boundaries separating acceptance from rejection. Amidst luxury, status, and superficial relationships, Lucifer finds himself increasingly trapped in a reality built on appearances and denial. <br><br> But everything changes when an incident of racial humiliation forces him to confront the truth he has spent his entire life trying to avoid. From that moment on, Lucifer embarks on a quiet, painful journey where every choice brings him either closer to, or further away from, who he truly is. <br><br> *Entre Espelhos e Mentiras* is an intense narrative about identity, belonging, and the invisible conflicts that can exist within a man. It is a story that delves into the mind of someone who chose to deny his roots and must now face the consequences of that decision. <br><br> A work that provokes and unsettles, inviting the reader to reflect on how far one might go to be accepted—and the true cost of abandoning one's own essence.`,
        buyLink_pt: `https://laynel.gumroad.com/l/gbmqr`,
        buyLink_en: `https://laynel.gumroad.com/l/hbnycb`,
    },
    {
        // 317
        img_src_pt: `imagens/books_capa/d_317-pt.webp`,
        img_alt: `D-317`,
        prevLink: `#`,
        conteudo_pt: ``,
        conteudo_en: `This book offers an engaging story, memorable characters, and a narrative that blends reflection with suspense.`,
        buyLink_pt: `https://laynel.gumroad.com/l/ukiaji`,
        buyLink_en: `https://laynel.gumroad.com/l/zspjdq`,
    },
    {
        //is not for the claver
        img_src_pt: `imagens/books_capa/the_world_is_not_for_the_clever-pt.webp`,
        img_alt: `The World Is Not for the Clever`,
        prevLink: `#`,
        conteudo_pt: `Uma obra intrigante que desafia a percepção do leitor e explora temas profundos com linguagem envolvente.`,
        conteudo_en: `An intriguing work that challenges the reader's perception and explores deep themes with engaging language.`,
        buyLink_pt: `https://loja.uiclap.com/titulo/ua172675`,
        buyLink_en: `https://loja.uiclap.com/titulo/ua172675`,
    }, ]
}

const BooksContent = new True_content(sectLiv);
for (let index = 0; index < popUpLivro.n.length; index++) {
    BooksContent.add_more(
        popUpLivro.n[index].img_src_pt,
        popUpLivro.n[index].img_alt,
        popUpLivro.n[index].prevLink,
        popUpLivro.n[index].conteudo_pt,
        popUpLivro.n[index].conteudo_en,
        popUpLivro.n[index].buyLink_pt,
        popUpLivro.n[index].buyLink_en,
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