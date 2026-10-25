/*
 * Conversão para JavaScript puro (sem dependência do jQuery).
 *
 * Esta pequena camada reproduz os métodos jQuery usados neste arquivo:
 * seleção múltipla, css, attr, width, height, classes, each e eventos
 * com namespaces. O código responsivo abaixo mantém os valores e a ordem
 * da lógica original.
 */
const eventosDOM = new WeakMap();
function normalizarNomeCSS(nome) {
    return nome.replace(/[A-Z]/g, letra => `-${letra.toLowerCase()}`);
}


const cabecalho = document.querySelector(".cabecalho");
const bottom_header = document.getElementById("bottom_header");

function atualizarMargem() {
    bottom_header.style.marginTop =
        `${cabecalho.getBoundingClientRect().height + 30}px`;
}




const PROPRIEDADES_CSS_SEM_UNIDADE = new Set([
        "animation-iteration-count",
        "column-count",
        "fill-opacity",
        "flex",
        "flex-grow",
        "flex-shrink",
        "font-weight",
        "grid-area",
        "grid-column",
        "grid-column-end",
        "grid-column-span",
        "grid-column-start",
        "grid-row",
        "grid-row-end",
        "grid-row-span",
        "grid-row-start",
        "line-height",
        "opacity",
        "order",
        "orphans",
        "scale",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "tab-size",
        "widows",
        "z-index",
        "zoom"
]);
function valorCSSSemUnidade(nome) {
    return PROPRIEDADES_CSS_SEM_UNIDADE.has(nome);
}

function selecionar(seletor, contexto = document) {
    if (typeof seletor === "string") {
        return new ColecaoDOM(Array.from(contexto.querySelectorAll(seletor)));
    }
    if (seletor == null) {
        return new ColecaoDOM([]);
    }
    if (
        seletor === window ||
        seletor === document ||
        (typeof Element !== "undefined" && seletor instanceof Element)
    ) {
        return new ColecaoDOM([seletor]);
    }
    if (seletor instanceof ColecaoDOM) {
        return new ColecaoDOM(seletor.elementos.slice());
    }
    if (typeof seletor.length === "number") {
        return new ColecaoDOM(Array.from(seletor));
    }
    return new ColecaoDOM([]);
}

class ColecaoDOM {
    constructor(elementos) {
        this.elementos = elementos;
        this.length = elementos.length;
        elementos.forEach((elemento, indice) => {
            this[indice] = elemento;
        });
    }
    css(propriedade, valor) {
        if (typeof propriedade === "string") {
            const nomeCSS = normalizarNomeCSS(propriedade);
            // O jQuery limpa a propriedade quando recebe uma string vazia
            // e acrescenta px a valores numéricos que exigem unidade.
            if (valor === "") {
                this.elementos.forEach(elemento => {
                    if (elemento.style) {
                        elemento.style.removeProperty(nomeCSS);
                    }
                });
                return this;
            }
            this.elementos.forEach(elemento => {
                if (!elemento.style) return;
                let valorCSS = valor;
                if (
                    typeof valorCSS === "number" &&
                    valorCSS !== 0 &&
                    !valorCSSSemUnidade(nomeCSS) &&
                    !nomeCSS.startsWith("--")
                ) {
                    valorCSS = `${valorCSS}px`;
                } else if (valorCSS == null) {
                    elemento.style.removeProperty(nomeCSS);
                    return;
                } else {
                    valorCSS = String(valorCSS);
                }
                elemento.style.setProperty(nomeCSS, valorCSS);
            });
        } else if (propriedade && typeof propriedade === "object") {
            Object.entries(propriedade).forEach(([nome, valorEstilo]) => {
                this.css(nome, valorEstilo);
            });
        }
        return this;
    }
    attr(nome, valor) {
        if (valor === undefined) {
            const elemento = this.elementos[0];
            return elemento ? (elemento.getAttribute(nome) ?? undefined) : undefined;
        }
        this.elementos.forEach(elemento => {
            if (valor === null) {
                elemento.removeAttribute(nome);
            } else {
                elemento.setAttribute(nome, String(valor));
            }
        });
        return this;
    }
    dimensao(tipo) {
        const elemento = this.elementos[0];
        // Assim como no jQuery, uma coleção vazia retorna undefined.
        if (!elemento) return undefined;
        // jQuery mede a área visível do viewport, excluindo a barra de rolagem.
        if (elemento === window) {
            return tipo === "width"
                ? document.documentElement.clientWidth
                : document.documentElement.clientHeight;
        }
        // Para document, o jQuery retorna a maior dimensão do documento.
        if (elemento === document) {
            const raiz = document.documentElement;
            const corpo = document.body;
            const propriedade = tipo === "width" ? "Width" : "Height";
            return Math.max(
                raiz[`client${propriedade}`],
                raiz[`scroll${propriedade}`],
                raiz[`offset${propriedade}`],
                corpo ? corpo[`scroll${propriedade}`] : 0,
                corpo ? corpo[`offset${propriedade}`] : 0
            );
        }
        const estilos = window.getComputedStyle(elemento);
        const propriedade = tipo === "width" ? "width" : "height";
        const valorComputado = parseFloat(estilos[propriedade]);
        if (!Number.isFinite(valorComputado)) {
            return elemento.getBoundingClientRect()[tipo];
        }
        // .width()/.height() do jQuery retornam o content-box.
        if (estilos.boxSizing === "border-box") {
            const lados = tipo === "width"
                ? ["Left", "Right"]
                : ["Top", "Bottom"];
            const padding = lados.reduce(
                (total, lado) => total + (parseFloat(estilos[`padding${lado}`]) || 0),
                0
            );
            const bordas = lados.reduce(
                (total, lado) => total + (parseFloat(estilos[`border${lado}Width`]) || 0),
                0
            );
            return Math.max(0, valorComputado - padding - bordas);
        }
        return valorComputado;
    }
    width() {
        return this.dimensao("width");
    }
    height() {
        return this.dimensao("height");
    }
    addClass(nome) {
        const classes = String(nome).match(/\S+/g) || [];
        this.elementos.forEach(elemento => elemento.classList.add(...classes));
        return this;
    }
    removeClass(nome) {
        const classes = String(nome).match(/\S+/g) || [];
        this.elementos.forEach(elemento => elemento.classList.remove(...classes));
        return this;
    }
    hasClass(nome) {
        return this.elementos.some(elemento => elemento.classList.contains(nome));
    }
    each(callback) {
        this.elementos.forEach((elemento, indice) => {
            callback.call(elemento, indice, elemento);
        });
        return this;
    }
    on(eventoNome, callback) {
        const [tipoEvento, ...namespacePartes] = eventoNome.split(".");
        const namespaces = namespacePartes.filter(Boolean).sort();
        this.elementos.forEach(elemento => {
            let registros = eventosDOM.get(elemento);
            if (!registros) {
                registros = [];
                eventosDOM.set(elemento, registros);
            }
            const manipulador = function (evento) {
                return callback.call(elemento, evento);
            };
            registros.push({
                tipoEvento,
                namespaces,
                callback,
                manipulador
            });
            elemento.addEventListener(tipoEvento, manipulador);
        });
        return this;
    }
    off(eventoNome) {
        const partes = eventoNome ? eventoNome.split(".") : [];
        const tipoSolicitado = partes[0] || "";
        const namespacesSolicitados = partes.slice(tipoSolicitado ? 1 : 1)
            .filter(Boolean)
            .sort();
        this.elementos.forEach(elemento => {
            const registros = eventosDOM.get(elemento) || [];
            const manter = [];
            registros.forEach(registro => {
                const tipoCorresponde =
                    !tipoSolicitado || registro.tipoEvento === tipoSolicitado;
                const namespacesCorrespondem = namespacesSolicitados.every(
                    namespace => registro.namespaces.includes(namespace)
                );
                const corresponde = tipoCorresponde && namespacesCorrespondem;
                if (corresponde) {
                    elemento.removeEventListener(
                        registro.tipoEvento,
                        registro.manipulador
                    );
                } else {
                    manter.push(registro);
                }
            });
            eventosDOM.set(elemento, manter);
        });
        return this;
    }
}

window.addEventListener("load", function () {
    const elementos = {
        logotipo: selecionar(".logotipo img"),
        tituloBanner: selecionar(".titulo_header"),
        slogan: selecionar(".slogan_header"),
        btnsBanner: selecionar(".btn_solicitar_orcamento_header, .btn_galeria_header"),
        btnGaleria: selecionar(".btn_galeria_header"),
        main: selecionar("main"),
        servicos: selecionar(".carrocel_servicos img"),
        btnsTopo: selecionar(".btn_whatszapp img, .btn_localizacao img"),
        iframe: selecionar(".section_atendimento iframe"),
        btnAvaliacao: selecionar(".section_avaliacao .btn_avaliacao img"),
        estrelas: selecionar(".section_avaliacao .estrelas_avaliacao img"),
        carrosseisTexto: selecionar(
            ".section_servicos .catalogo_servicos, " +
            ".section_servicos .texto_servicos, " +
            ".carrossel_produtos, " +
            ".catalogo_avaliacao, " +
            ".section_avaliacao .texto_avaliacao, " +
            ".menu_avaliacao, " +
            ".catalogo_redes_sociais"
        )
    };
    const configuracoesResponsivas = [
        {
            min: 1070,
            logotipoWidth: "30%",
            tituloBannerWidth: "45%",
            tituloBannerFontSize: "49px",
            sloganWidth: "47%",
            sloganFontSize: "16px",
            btnsBannerWidth: "20%",
            btnsBannerMargin: "2.5%",
            mainWidth: "95%",
            mainMarginLeft: "2.5%",
            servicosWidth: "10vw",
            carrosseisTextoWidth: "88%"
        },
        {
            min: 975,
            logotipoWidth: "34.44%",
            tituloBannerWidth: "49.53%",
            tituloBannerFontSize: "48.29px",
            sloganWidth: "51.35%",
            sloganFontSize: "15.73px",
            btnsBannerWidth: "22.04%",
            btnsBannerMargin: "2.5%",
            mainWidth: "95.44%",
            mainMarginLeft: "2.28%",
            servicosWidth: "11.42vw",
            carrosseisTextoWidth: "88.71%"
        },
        {
            min: 880,
            logotipoWidth: "38.88%",
            tituloBannerWidth: "54.06%",
            tituloBannerFontSize: "47.58px",
            sloganWidth: "55.70%",
            sloganFontSize: "15.47px",
            btnsBannerWidth: "24.08%",
            btnsBannerMargin: "2.5%",
            mainWidth: "95.89%",
            mainMarginLeft: "2.06%",
            servicosWidth: "12.84vw",
            carrosseisTextoWidth: "89.42%"
        },
        {
            min: 785,
            logotipoWidth: "43.32%",
            tituloBannerWidth: "58.58%",
            tituloBannerFontSize: "46.87px",
            sloganWidth: "60.05%",
            sloganFontSize: "15.20px",
            btnsBannerWidth: "26.13%",
            btnsBannerMargin: "2.5%",
            mainWidth: "96.33%",
            mainMarginLeft: "1.83%",
            servicosWidth: "14.26vw",
            carrosseisTextoWidth: "90.13%"
        },
        {
            min: 690,
            logotipoWidth: "47.76%",
            tituloBannerWidth: "63.11%",
            tituloBannerFontSize: "46.16px",
            sloganWidth: "64.40%",
            sloganFontSize: "14.93px",
            btnsBannerWidth: "28.17%",
            btnsBannerMargin: "2.5%",
            mainWidth: "96.78%",
            mainMarginLeft: "1.61%",
            servicosWidth: "15.68vw",
            carrosseisTextoWidth: "90.84%"
        },
        {
            min: 595,
            logotipoWidth: "52.20%",
            tituloBannerWidth: "67.64%",
            tituloBannerFontSize: "45.45px",
            sloganWidth: "68.75%",
            sloganFontSize: "14.67px",
            btnsBannerWidth: "30.21%",
            btnsBannerMargin: "2.5%",
            mainWidth: "97.22%",
            mainMarginLeft: "1.39%",
            servicosWidth: "17.10vw",
            carrosseisTextoWidth: "91.55%"
        },
        {
            min: 500,
            logotipoWidth: "56.64%",
            tituloBannerWidth: "72.17%",
            tituloBannerFontSize: "44.74px",
            sloganWidth: "73.10%",
            sloganFontSize: "14.40px",
            btnsBannerWidth: "32.25%",
            btnsBannerMargin: "2.5%",
            mainWidth: "97.66%",
            mainMarginLeft: "1.17%",
            servicosWidth: "18.52vw",
            carrosseisTextoWidth: "92.26%"
        },
        {
            min: 0,
            logotipoWidth: "80%",
            tituloBannerWidth: "96%",
            tituloBannerFontSize: "clamp(35px, 8.7vw, 41px)",
            sloganWidth: "96%",
            sloganFontSize: "clamp(11px, 2.9vw, 13px)",
            btnsBannerWidth: "43%",
            btnsBannerMargin: "2.5%",
            mainWidth: "100%",
            mainMarginLeft: "0%",
            servicosWidth: "28vw",
            carrosseisTextoWidth: "96%"
        }
    ];
    function aplicarConfiguracaoResponsiva(configuracao) {
        elementos.logotipo.css(
            "width",
            configuracao.logotipoWidth
        );
        elementos.tituloBanner.css({
            width: configuracao.tituloBannerWidth,
            maxWidth: "100%",
            fontSize: configuracao.tituloBannerFontSize,
            boxSizing: "border-box",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "normal"
        });
        elementos.slogan.css({
            width: configuracao.sloganWidth,
            maxWidth: "100%",
            fontSize: configuracao.sloganFontSize,
            boxSizing: "border-box",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "normal",
            letterSpacing: "0.04em"
        });
        elementos.btnsBanner.css(
            "width",
            configuracao.btnsBannerWidth
        );
        elementos.btnGaleria.css(
            "margin-left",
            configuracao.btnsBannerMargin
        );
        elementos.main.css({
            width: configuracao.mainWidth,
            marginLeft: configuracao.mainMarginLeft
        });
        elementos.servicos.css(
            "width",
            configuracao.servicosWidth
        );
        elementos.carrosseisTexto.css(
            "width",
            configuracao.carrosseisTextoWidth
        );
    }
    // Aplica estilos compartilhados aos textos do atendimento.
    function ajustarTextoAtendimento(seletor, incluirAlignSelf = false) {
        selecionar(seletor).each(function () {
            const estilo = this.style;
            estilo.setProperty("width", "100%", "important");
            estilo.setProperty("max-width", "100%", "important");
            estilo.setProperty("margin-left", "0", "important");
            estilo.setProperty("margin-right", "0", "important");
            estilo.setProperty("box-sizing", "border-box", "important");
            estilo.setProperty("display", "block", "important");
            if (incluirAlignSelf) estilo.setProperty("align-self", "stretch", "important");
        });
    }
    function configurarBlocoAtendimentoDesktop(configuracao) {
        selecionar(".section_atendimento .bloco_atendimento").css({
            width: configuracao.carrosseisTextoWidth,
            marginLeft: "6%",
            boxSizing: "border-box"
        });
        selecionar(".section_atendimento .bloco1, .section_atendimento .bloco2").css({
            width: "48%",
            marginLeft: "0%",
            boxSizing: "border-box"
        });
        selecionar(".section_atendimento .bloco2").css({ marginLeft: "4%", marginTop: "0vw" });
        ajustarTextoAtendimento(".section_atendimento .texto_atendimento");
        ajustarTextoAtendimento(".section_atendimento .texto_atendimento p");
        selecionar(".section_atendimento .menu_atendimento").css({
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box"
        });
    }
    function configurarBlocoAtendimentoMobile() {
        selecionar(".section_atendimento .bloco_atendimento").css({ width: "96%", marginLeft: "2%" });
        selecionar(".section_atendimento .bloco1, .section_atendimento .bloco2").css({
            width: "100%",
            marginLeft: "0%"
        });
        selecionar(".section_atendimento .bloco2").css({ marginTop: "5vw" });
        ajustarTextoAtendimento(".section_atendimento .texto_atendimento", true);
        ajustarTextoAtendimento(".section_atendimento .texto_atendimento p");
    }
    function configurarMenuAtendimentoDesktop() {
        selecionar(".menu_atendimento").css(
            "flex-wrap",
            "nowrap"
        );
        selecionar(".btn_solicitar_atendimento").css({
            marginLeft: "3%",
            marginTop: "0vw"
        });
    }
    function configurarMenuAtendimentoPequeno() {
        selecionar(".menu_atendimento").css(
            "flex-wrap",
            "wrap"
        );
        selecionar(".btn_solicitar_atendimento").css({
            marginLeft: "0%",
            marginTop: "1vw"
        });
    }
    function configurarBotoesAtendimento(pequeno = false) {
        const sufixo =
            pequeno
                ? "_pequeno"
                : "";
        selecionar(".btn_ver_no_google_maps img").attr(
            "src",
            `img/main/section_atendimento/btn_ver_no_google_maps${sufixo}.webp`
        );
        selecionar(".btn_solicitar_atendimento img").attr(
            "src",
            `img/main/section_atendimento/btn_solicitar_atendimento${sufixo}.webp`
        );
    }
    function configurarBotoesAvaliacao(sufixo = "") {
        selecionar(".btn_avaliacao img").attr(
            "src",
            `img/main/section_avaliacao/btn_avaliacao${sufixo}.webp`
        );
        selecionar(".btn_voltar_ao_topo img").attr(
            "src",
            `img/main/section_avaliacao/btn_voltar_ao_topo${sufixo}.webp`
        );
    }
    /* =====================================================
       AVALIAÇÃO — ESTRELAS
       ===================================================== */
    function configurarEstrelas(
        exibir,
        pequena = false
    ) {
        const estrelas =
            selecionar(".estrelas_avaliacao");
        const imagem =
            selecionar(".estrelas_avaliacao img");
        if (
            !estrelas.length ||
            !imagem.length
        ) {
            return;
        }
        if (exibir) {
            estrelas.removeClass(
                "hidden"
            );
            const novoSrc =
                pequena
                    ? "img/main/section_avaliacao/estrelas_avaliacao_pequeno.webp"
                    : "img/main/section_avaliacao/estrelas_avaliacao.webp";
            const srcAtual =
                imagem.attr("src") || "";
            if (!srcAtual.endsWith(novoSrc)) {
                imagem.attr(
                    "src",
                    novoSrc
                );
            }
            /*
             * Aguarda o novo asset terminar de carregar
             * antes de recalcular a altura.
             */
            imagem
                .off("load.avaliacao")
                .on(
                    "load.avaliacao",
                    function () {
                        if (
                            elementos.btnAvaliacao.length
                        ) {
                            selecionar(this).css(
                                "height",
                                elementos.btnAvaliacao.height()
                            );
                        }
                    }
                );
            /*
             * Caso a imagem já esteja em cache.
             */
            if (
                imagem[0] &&
                imagem[0].complete &&
                elementos.btnAvaliacao.length
            ) {
                imagem.css(
                    "height",
                    elementos.btnAvaliacao.height()
                );
            }
        } else {
            estrelas.addClass(
                "hidden"
            );
            imagem.off(
                "load.avaliacao"
            );
        }
    }
    function configurarBanner(
        paddingTop,
        paddingBottom
    ) {
        selecionar(".banner_top").css({
            paddingTop,
            paddingBottom
        });
    }
    /* =====================================================
       INTERVENÇÃO RESPONSIVA ORIGINAL
       ===================================================== */
    function aplicarAjustesResponsivos(
        larguraTela,
        configuracao
    ) {
        const elementosMargem = selecionar(
            ".banner_top, .titulo_servicos, .catalogo_servicos, .texto_servicos, " +
            ".titulo_produtos, .carrossel_produtos, .titulo_atendimento, " +
            ".bloco_atendimento, .titulo_avaliacao, .catalogo_avaliacao, " +
            ".texto_avaliacao, .menu_avaliacao, .titulo_redes_sociais, " +
            ".catalogo_redes_sociais"
        );
        if (larguraTela > 595) {
            elementosMargem.css(
                "margin-left",
                "6%"
            );
            configurarBlocoAtendimentoDesktop(
                configuracao
            );
            configurarBotoesAvaliacao();
        } else {
            const elementosMargemMobile = selecionar(
                ".titulo_servicos, .catalogo_servicos, .texto_servicos, " +
                ".titulo_produtos, .carrossel_produtos, .titulo_atendimento, " +
                ".bloco_atendimento, .titulo_avaliacao, .catalogo_avaliacao, " +
                ".texto_avaliacao, .menu_avaliacao, .titulo_redes_sociais, " +
                ".catalogo_redes_sociais"
            );
            elementosMargemMobile.css(
                "margin-left",
                "2%"
            );
            selecionar(".banner_top").css(
                "margin-left",
                "4%"
            );
        }
        /* =================================================
           ACIMA DE 880px
           ================================================= */
        if (larguraTela > 880) {
            configurarEstrelas(
                true,
                false
            );
            selecionar(".menu_avaliacao div").css(
                "width",
                "33.3333%"
            );
            /*
             * Quando entra nessa faixa depois de outra faixa,
             * restaura também a largura das estrelas.
             */
            selecionar(".estrelas_avaliacao").css(
                "width",
                "33.3333%"
            );
            selecionar(".btn_avaliacao").css(
                "margin-right",
                "0%"
            );
            configurarMenuAtendimentoDesktop();
            configurarBotoesAtendimento(
                false
            );
            configurarBanner(
                "2vw",
                "5vw"
            );
            return;
        }
        /* =================================================
           ACIMA DE 785px
           ================================================= */
        if (larguraTela > 785) {
            configurarEstrelas(
                true,
                true
            );
            selecionar(".menu_avaliacao div").css(
                "width",
                "45%"
            );
            selecionar(".estrelas_avaliacao").css(
                "width",
                "20%"
            );
            selecionar(".btn_avaliacao").css(
                "margin-right",
                "0%"
            );
            configurarMenuAtendimentoPequeno();
            configurarBotoesAtendimento(
                true
            );
            configurarBanner(
                "2vw",
                "8vw"
            );
            return;
        }
        /* =================================================
           ACIMA DE 700px
           ================================================= */
        if (larguraTela > 700) {
            configurarEstrelas(
                true,
                true
            );
            selecionar(".menu_avaliacao div").css(
                "width",
                "40%"
            );
            selecionar(".estrelas_avaliacao").css(
                "width",
                "20%"
            );
            selecionar(".btn_avaliacao").css(
                "margin-right",
                "0%"
            );
            configurarMenuAtendimentoPequeno();
            configurarBotoesAtendimento(
                true
            );
            configurarBanner(
                "4vw",
                "12vw"
            );
            return;
        }
        /* =================================================
           ACIMA DE 595px
           ================================================= */
        if (larguraTela > 595) {
            configurarEstrelas(
                false
            );
            selecionar(".menu_avaliacao div").css(
                "width",
                "45%"
            );
            selecionar(".estrelas_avaliacao").css(
                "width",
                "10%"
            );
            selecionar(".btn_avaliacao").css(
                "margin-right",
                "10%"
            );
            configurarMenuAtendimentoPequeno();
            configurarBotoesAtendimento(
                true
            );
            configurarBotoesAvaliacao(
                "_2"
            );
            configurarBanner(
                "4vw",
                "12vw"
            );
            return;
        }
        /* =================================================
           ATÉ 595px
           ================================================= */
        configurarBlocoAtendimentoMobile();
        configurarEstrelas(
            false
        );
        selecionar(".menu_avaliacao div").css(
            "width",
            "50%"
        );
        selecionar(".estrelas_avaliacao").css(
            "width",
            "0%"
        );
        selecionar(".btn_avaliacao").css(
            "margin-right",
            "0%"
        );
        selecionar(".menu_atendimento").css(
            "flex-wrap",
            "nowrap"
        );
        selecionar(".btn_solicitar_atendimento").css({
            marginLeft: "3%",
            marginTop: "0vw"
        });
        configurarBotoesAtendimento(
            false
        );
        configurarBotoesAvaliacao(
            "_3"
        );
        configurarBanner(
            "4vw",
            "12vw"
        );
    }
    /* =====================================================
       ALTURAS DINÂMICAS
       ===================================================== */
    function ajustarAlturasDinamicas(
        dispositivo,
        larguraTela,
        configuracao
    ) {
        aplicarAjustesResponsivos(
            larguraTela,
            configuracao
        );
        if (dispositivo === "desktop") {
            const alturaCabecalho =
                elementos.logotipo.height() + 15;
            elementos.btnsTopo.css({
                height: alturaCabecalho
            });
            if (
                elementos.estrelas.length &&
                elementos.btnAvaliacao.length &&
                !selecionar(".estrelas_avaliacao").hasClass("hidden")
            ) {
                elementos.estrelas.css({
                    height:
                        elementos.btnAvaliacao.height()
                });
            }
        }
    }
    /* =====================================================
       TAMANHO DOS CARDS
       ===================================================== */
    function ajustarTamanhoCards(
        larguraTela,
        dispositivo
    ) {
        const card =
            selecionar(".card-img");
        let width =
            "44%";
        if (dispositivo === "desktop") {
            if (larguraTela >= 975) {
                width =
                    "16.6%";
                selecionar(".copyright img").css({
                    width: "50%",
                    marginLeft: "25%"
                });
            } else if (larguraTela >= 880) {
                width =
                    "16.6%";
                selecionar(".copyright img").css({
                    width: "60%",
                    marginLeft: "20%"
                });
            } else if (larguraTela >= 785) {
                width =
                    "21.82115%";
                selecionar(".copyright img").css({
                    width: "70%",
                    marginLeft: "15%"
                });
            } else if (larguraTela >= 595) {
                width =
                    "21.82115%";
                selecionar(".copyright img").css({
                    width: "80%",
                    marginLeft: "10%"
                });
            } else if (larguraTela >= 405) {
                width =
                    "44%";
                selecionar(".copyright img").css({
                    width: "95%",
                    marginLeft: "2.5%"
                });
            }
        }
        card.css(
            "width",
            width
        );
        const alturaCabecalho =
            selecionar(".cabecalho").height() +
            "px";
        selecionar(".banner_top").css(
            "margin-top",
            alturaCabecalho
        );
    }
    /* =====================================================
       EXECUÇÃO PRINCIPAL
       ===================================================== */
    function atualizarLayoutResponsivo() {
        const tela =
            selecionar(window).width();
        const configuracao =
            configuracoesResponsivas.find(
                configuracao =>
                    tela >= configuracao.min
            );
        if (configuracao) {
            aplicarConfiguracaoResponsiva(
                configuracao
            );
        }
        ajustarAlturasDinamicas(
            "desktop",
            tela,
            configuracao
        );
        ajustarTamanhoCards(
            tela,
            "desktop"
        );
    }
    /* =====================================================
       EXECUÇÃO INICIAL
       ===================================================== */
    atualizarLayoutResponsivo();
    window.addEventListener("resize", atualizarMargem);
    atualizarMargem();
    /* =====================================================
       ALTURA DAS ESTRELAS APÓS O CARREGAMENTO DO ASSET
       ===================================================== */
    elementos.estrelas
        .off("load.avaliacaoFinal")
        .on(
            "load.avaliacaoFinal",
            function () {
                if (
                    !selecionar(".estrelas_avaliacao").hasClass(
                        "hidden"
                    ) &&
                    elementos.btnAvaliacao.length
                ) {
                    selecionar(this).css(
                        "height",
                        elementos.btnAvaliacao.height()
                    );
                }
            }
        );
    
/* =====================================================
   RESPONSIVIDADE AO REDIMENSIONAR A JANELA
   ===================================================== */

let resizeAtualizacaoTimeout = null;
let resizeFinalTimeout = null;

const INTERVALO_ATUALIZACAO_RESIZE = 100;
const INTERVALO_FINAL_RESIZE = 250;

selecionar(window).on("resize", function () {
    // Limita as atualizações durante o redimensionamento.
    if (resizeAtualizacaoTimeout === null) {
        resizeAtualizacaoTimeout = setTimeout(function () {
            resizeAtualizacaoTimeout = null;
            atualizarLayoutResponsivo();

            window.addEventListener("resize", atualizarMargem);
            atualizarMargem();
        }, INTERVALO_ATUALIZACAO_RESIZE);
    }

    // Reinicia o temporizador para detectar o fim do redimensionamento.
    clearTimeout(resizeFinalTimeout);

    resizeFinalTimeout = setTimeout(function () {
        // Cancela uma atualização intermediária ainda pendente.
        if (resizeAtualizacaoTimeout !== null) {
            clearTimeout(resizeAtualizacaoTimeout);
            resizeAtualizacaoTimeout = null;
        }

        // Aplica o resultado final após a janela estabilizar.
        atualizarLayoutResponsivo();
        window.addEventListener("resize", atualizarMargem);
        atualizarMargem();

        resizeFinalTimeout = null;
    }, INTERVALO_FINAL_RESIZE);
});

});
