// ========================================
// ECOENERGIA - ANIMAÇÕES E INTERAÇÕES
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // 1. ANIMAÇÃO DE ENTRADA
    // ========================================

    document.body.classList.add("pagina-carregada");


    // ========================================
    // 2. ELEMENTOS APARECENDO AO ROLAR
    // ========================================

    const elementos = document.querySelectorAll(
        "section, article, .hero, .card, footer"
    );

    elementos.forEach(elemento => {
        elemento.classList.add("animar-scroll");
    });

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");

                    // Depois que apareceu, não precisa observar novamente
                    observador.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elementos.forEach(elemento => {
        observador.observe(elemento);
    });


    // ========================================
    // 3. ANIMAÇÃO DOS CARDS EM SEQUÊNCIA
    // ========================================

    const cards = document.querySelectorAll("article");

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.12}s`;

    });


    // ========================================
    // 4. EFEITO NOS BOTÕES
    // ========================================

    const botoes = document.querySelectorAll(
        "button, a"
    );

    botoes.forEach(botao => {

        botao.addEventListener("mouseenter", () => {
            botao.classList.add("botao-hover");
        });

        botao.addEventListener("mouseleave", () => {
            botao.classList.remove("botao-hover");
        });

    });


    // ========================================
    // 5. EFEITO DE CLIQUE
    // ========================================

    botoes.forEach(botao => {

        botao.addEventListener("click", function () {

            this.classList.add("clicado");

            setTimeout(() => {
                this.classList.remove("clicado");
            }, 250);

        });

    });


    // ========================================
    // 6. ÍCONES FLUTUANDO
    // ========================================

    const icones = document.querySelectorAll(
        "section span, aside span"
    );

    icones.forEach((icone, index) => {

        if (
            icone.textContent.includes("💧") ||
            icone.textContent.includes("⚡") ||
            icone.textContent.includes("🌱")
        ) {

            icone.classList.add("icone-flutuante");

            icone.style.animationDelay =
                `${index * 0.25}s`;
        }

    });


    // ========================================
    // 7. EFEITO PARALLAX SUAVE
    // ========================================

    const elementosParallax = document.querySelectorAll(
        ".hero-visual, .visual, aside"
    );

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        elementosParallax.forEach(elemento => {

            if (window.innerWidth > 768) {

                elemento.style.transform =
                    `translateY(${scroll * 0.03}px)`;

            }

        });

    });


    // ========================================
    // 8. BOTÃO VOLTAR AO TOPO
    // ========================================

    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";

    botaoTopo.className = "botao-topo";

    botaoTopo.setAttribute(
        "aria-label",
        "Voltar ao topo"
    );

    document.body.appendChild(botaoTopo);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            botaoTopo.classList.add("mostrar");

        } else {

            botaoTopo.classList.remove("mostrar");

        }

    });


    botaoTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ========================================
    // 9. LINKS INTERNOS COM SCROLL SUAVE
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (evento) {

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if (destino) {

                evento.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ========================================
    // 10. EFEITO DE DESTAQUE AO CHEGAR
    // NO TESTE DE NÍVEL
    // ========================================

    const teste = document.querySelector("#teste");

    if (teste) {

        const observadorTeste = new IntersectionObserver(
            (entradas) => {

                entradas.forEach(entrada => {

                    if (entrada.isIntersecting) {

                        teste.classList.add(
                            "teste-destaque"
                        );

                        setTimeout(() => {

                            teste.classList.remove(
                                "teste-destaque"
                            );

                        }, 1200);

                        observadorTeste.unobserve(teste);

                    }

                });

            },
            {
                threshold: 0.4
            }
        );

        observadorTeste.observe(teste);

    }


    // ========================================
    // 11. CONFETES
    // ========================================

    window.comemorar = function () {

        const quantidade = 35;

        for (let i = 0; i < quantidade; i++) {

            const confete =
                document.createElement("div");

            confete.className = "confete";

            confete.style.left =
                Math.random() * 100 + "vw";

            confete.style.animationDelay =
                Math.random() * 0.5 + "s";

            confete.style.transform =
                `rotate(${Math.random() * 360}deg)`;

            document.body.appendChild(confete);

            setTimeout(() => {
                confete.remove();
            }, 3000);

        }

    };


    // ========================================
    // 12. MENSAGEM DE BOAS-VINDAS
    // ========================================

    const titulo =
        document.querySelector("#inicio h2");

    if (titulo) {

        titulo.classList.add("titulo-entrada");

    }

});