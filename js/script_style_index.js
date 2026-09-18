$(document).on('contextmenu dragstart', 'img, .card-img', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});

$(window).on("load", function () {

    /* =====================================================
       CONFIGURAÇÃO INICIAL
    ===================================================== */
    $("header").css({
        backgroundImage:
            "radial-gradient(circle,rgba(0,0,0,.71) 0%, rgba(0,0,0,.56) 0%, rgba(0,0,0,.70) 0%), url('img/header/fundo_banner_top.jpg')"
    });

    /* =====================================================
       ELEMENTOS (Cache do jQuery)
    ===================================================== */
    const elementos = {
        logotipo: $(".logotipo img"),
        tituloBanner: $(".titulo_header img"),
        slogan: $(".slogan_header img"),
        btnsBanner: $(".btn_solicitar_orcamento_header, .btn_galeria_header"),
        btnGaleria: $(".btn_galeria_header"),
        main: $("main"),
        servicos: $(".carrocel_servicos img"),
        titulosGerais: $(
            ".titulo_servicos img, " +
            ".titulo_produtos img, " +
            ".titulo_atendimento img, " +
            ".titulo_avaliacao img, " +
            ".titulo_redes_sociais img"
        ),
        btnsTopo: $(".btn_whatszapp img, .btn_localizacao img"),
        iframe: $(".section_atendimento iframe"),
        btnAvaliacao: $(".section_avaliacao .btn_avaliacao img"),
        estrelas: $(".section_avaliacao .estrelas_avaliacao img"),
        carrosseisTexto: $(
            ".section_servicos .catalogo_servicos, " +
            ".section_servicos .texto_servicos img, " +
            ".carrossel_produtos, " +
            ".bloco_atendimento, " +
            ".catalogo_avaliacao, " +
            ".section_avaliacao .texto_avaliacao img, " +
            ".menu_avaliacao, " +
            ".catalogo_redes_sociais"
        )
    };

    /* =====================================================
       CONFIGURAÇÕES DE TAMANHO
    ===================================================== */
    const configuracoesDesktop = [
        { min: 1070, logotipoWidth: "45%", tituloBannerWidth: "45%", sloganWidth: "47%", btnsBannerWidth: "21%", btnsBannerMargin: "1%", mainWidth: "95%", mainMarginLeft: "2.5%", servicosWidth: "10vw", titulosGeraisWidth: "52%", carrosseisTextoWidth: "88%" },
        { min: 975, logotipoWidth: "45.5%", tituloBannerWidth: "52%", sloganWidth: "54%", btnsBannerWidth: "23.8%", btnsBannerMargin: "1.14%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "10.8vw", titulosGeraisWidth: "56.71%", carrosseisTextoWidth: "88.85%" },
        { min: 880, logotipoWidth: "46%", tituloBannerWidth: "58%", sloganWidth: "60%", btnsBannerWidth: "26.6%", btnsBannerMargin: "1.28%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "11.6vw", titulosGeraisWidth: "61.42%", carrosseisTextoWidth: "89.70%" },
        { min: 785, logotipoWidth: "46.5%", tituloBannerWidth: "64%", sloganWidth: "66%", btnsBannerWidth: "29.4%", btnsBannerMargin: "1.42%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "12.8vw", titulosGeraisWidth: "66.13%", carrosseisTextoWidth: "90.55%" },
        { min: 690, logotipoWidth: "48%", tituloBannerWidth: "70%", sloganWidth: "72%", btnsBannerWidth: "32.2%", btnsBannerMargin: "1.56%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "14vw", titulosGeraisWidth: "70.84%", carrosseisTextoWidth: "91.40%" },
        { min: 595, logotipoWidth: "48.5%", tituloBannerWidth: "76%", sloganWidth: "78%", btnsBannerWidth: "35%", btnsBannerMargin: "1.7%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "15vw", titulosGeraisWidth: "80%", carrosseisTextoWidth: "92.25%" },
        { min: 500, logotipoWidth: "50.5%", tituloBannerWidth: "84%", sloganWidth: "86%", btnsBannerWidth: "39.8%", btnsBannerMargin: "1.84%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "20vw", titulosGeraisWidth: "87.26%", carrosseisTextoWidth: "95.10%" },
        { min: 0, logotipoWidth: "65%", tituloBannerWidth: "96%", sloganWidth: "96%", btnsBannerWidth: "47.8%", btnsBannerMargin: "1.84%", mainWidth: "100%", mainMarginLeft: "0%", servicosWidth: "26vw", titulosGeraisWidth: "95%", carrosseisTextoWidth: "96%" }
    ];

    function aplicarConfiguracoes(config) {
        elementos.logotipo.css("width", config.logotipoWidth);
        elementos.tituloBanner.css("width", config.tituloBannerWidth);
        elementos.slogan.css("width", config.sloganWidth);
        elementos.btnsBanner.css("width", config.btnsBannerWidth);
        elementos.btnGaleria.css("margin-left", config.btnsBannerMargin);
        elementos.main.css({ width: config.mainWidth, marginLeft: config.mainMarginLeft });
        elementos.servicos.css("width", config.servicosWidth);
        elementos.titulosGerais.css("width", config.titulosGeraisWidth);
        elementos.carrosseisTexto.css("width", config.carrosseisTextoWidth);
    }

    function configurarTextosDesktop() {
        $(".texto_avaliacao img").attr("src", "img/main/section_avaliacao/texto_avaliacao.webp");
        $(".texto_atendimento img").attr("src", "img/main/section_atendimento/texto_atendimento.webp");
        $(".texto_servicos img").attr("src", "img/main/section_servicos/texto_servicos.webp");
    }

    function configurarBlocoAtendimentoDesktop() {
        $(".section_atendimento .bloco1, .section_atendimento .bloco2").css("width", "48%");
        $(".section_atendimento .bloco2").css({ marginLeft: "4%", marginTop: "0vw" });
    }

    function configurarMenuAtendimentoDesktop() {
        $(".menu_atendimento").css("flex-wrap", "nowrap");
        $(".btn_solicitar_atendimento").css({ marginLeft: "3%", marginTop: "0vw" });
    }

    function configurarMenuAtendimentoPequeno() {
        $(".menu_atendimento").css("flex-wrap", "wrap");
        $(".btn_solicitar_atendimento").css({ marginLeft: "0%", marginTop: "1vw" });
    }

    function configurarBotoesAtendimento(pequeno = false) {
        const sufixo = pequeno ? "_pequeno" : "";
        $(".btn_ver_no_google_maps img").attr("src", `img/main/section_atendimento/btn_ver_no_google_maps${sufixo}.webp`);
        $(".btn_solicitar_atendimento img").attr("src", `img/main/section_atendimento/btn_solicitar_atendimento${sufixo}.webp`);
    }

    function configurarBotoesAvaliacao(sufixo = "") {
        $(".btn_avaliacao img").attr("src", `img/main/section_avaliacao/btn_avaliacao${sufixo}.webp`);
        $(".btn_voltar_ao_topo img").attr("src", `img/main/section_avaliacao/btn_voltar_ao_topo${sufixo}.webp`);
    }

    function configurarEstrelas(exibir, pequena = false) {
        const estrelas = $(".estrelas_avaliacao");
        if (exibir) {
            estrelas.removeClass("hidden");
            $(".estrelas_avaliacao img").attr(
                "src",
                pequena
                    ? "img/main/section_avaliacao/estrelas_avaliacao_pequeno.webp"
                    : "img/main/section_avaliacao/estrelas_avaliacao.webp"
            );
        } else {
            estrelas.addClass("hidden");
        }
    }

    function configurarBanner(paddingTop, paddingBottom) {
        $(".banner_top").css({ paddingTop, paddingBottom });
    }

    /* =====================================================
       INTERVENÇÃO RESPONSIVA
    ===================================================== */
    function intervencao(tl) {
        const elementosMargem = $(
            ".banner_top, .titulo_servicos img, .catalogo_servicos, .texto_servicos img, " +
            ".titulo_produtos img, .carrossel_produtos, .titulo_atendimento img, " +
            ".bloco_atendimento, .titulo_avaliacao img, .catalogo_avaliacao, " +
            ".texto_avaliacao img, .menu_avaliacao, .titulo_redes_sociais img, .catalogo_redes_sociais"
        );

        if (tl > 595) {
            elementosMargem.css("margin-left", "6%");
            configurarTextosDesktop();
            configurarBlocoAtendimentoDesktop();
            configurarBotoesAvaliacao();
        }

        if (tl > 880) {
            configurarEstrelas(true, false);
            $(".menu_avaliacao div").css("width", "33.3333%");
            $(".btn_avaliacao").css("margin-right", "0%");
            configurarMenuAtendimentoDesktop();
            configurarBotoesAtendimento(false);
            configurarBanner("2vw", "5vw");
            return;
        }

        if (tl > 785) {
            configurarEstrelas(true, true);
            $(".menu_avaliacao div").css("width", "45%");
            $(".estrelas_avaliacao").css("width", "20%");
            $(".btn_avaliacao").css("margin-right", "0%");
            configurarMenuAtendimentoPequeno();
            configurarBotoesAtendimento(true);
            configurarBanner("2vw", "8vw");
            return;
        }

        if (tl > 700) {
            $(".menu_avaliacao div").css("width", "40%");
            configurarEstrelas(true, true);
            $(".estrelas_avaliacao").css("width", "20%");
            $(".btn_avaliacao").css("margin-right", "0%");
            configurarMenuAtendimentoPequeno();
            configurarBotoesAtendimento(true);
            configurarBanner("4vw", "12vw");
            return;
        }

        if (tl > 595) {
            $(".menu_avaliacao div").css("width", "45%");
            configurarEstrelas(false);
            $(".btn_avaliacao").css("margin-right", "10%");
            configurarMenuAtendimentoPequeno();
            configurarBotoesAtendimento(true);
            configurarBotoesAvaliacao("_2");
            configurarBanner("4vw", "12vw");
            return;
        }

        // Até 595px
        elementosMargem.css("margin-left", "2%");
        $(".texto_avaliacao img").attr("src", "img/main/section_avaliacao/texto_avaliacao_pequeno.webp");
        $(".texto_atendimento img").attr("src", "img/main/section_atendimento/texto_atendimento_pequeno.webp");
        $(".texto_servicos img").attr("src", "img/main/section_servicos/texto_servicos_pequeno.webp");

        $(".section_atendimento .bloco1, .section_atendimento .bloco2").css("width", "100%");
        $(".section_atendimento .bloco2").css({ marginLeft: "0%", marginTop: "5vw" });

        $(".menu_avaliacao div").css("width", "50%");
        configurarEstrelas(false);
        $(".btn_avaliacao").css("margin-right", "0%");

        $(".menu_atendimento").css("flex-wrap", "nowrap");
        $(".btn_solicitar_atendimento").css({ marginLeft: "3%", marginTop: "0vw" });

        configurarBotoesAtendimento(false);
        configurarBotoesAvaliacao("_3");
        configurarBanner("4vw", "12vw");
    }

    function ajustarAlturas(ap, tl) {
        intervencao(tl);

        if (ap === "descktop") {
            const alturaCabecalho = elementos.logotipo.height() + 15;
            elementos.btnsTopo.css({ height: alturaCabecalho });
            elementos.logotipo.css("margin-top", "7.5px");
            elementos.estrelas.css({ height: elementos.btnAvaliacao.height() });
        }
    }

    function setSizeCards(tl, ap) {
        const card = $(".card-img");
        let width = "100%"; // Valor padrão para telas menores que 405px

        if (ap === "descktop") {
            if (tl >= 975) {
                width = "16.6%";
                $(".copyright img").css({ width: "50%", marginLeft: "25%" });
            } else if (tl >= 880) {
                width = "16.6%";
                $(".copyright img").css({ width: "60%", marginLeft: "20%" });
            } else if (tl >= 785) {
                width = "21.82115%";
                $(".copyright img").css({ width: "70%", marginLeft: "15%" });
            } else if (tl >= 595) {
                width = "21.82115%";
                $(".copyright img").css({ width: "80%", marginLeft: "10%" });
            } else if (tl >= 405) {
                width = "44%";
                $(".copyright img").css({ width: "95%", marginLeft: "2.5%" });
            }
        }

        card.css("width", width);

        const alturaCabecalho = $(".cabecalho").height() + "px";
        $(".banner_top").css("margin-top", alturaCabecalho);
    }

    function setSizeElements() {
        const tela = $(window).width();
        const config = configuracoesDesktop.find(configuracao => tela >= configuracao.min);

        if (config) {
            aplicarConfiguracoes(config);
        }

        ajustarAlturas("descktop", tela);
        setSizeCards(tela, "descktop");
    }

    /* Execução inicial direta (sem múltiplos setTimeout) */
    setSizeElements();

    /* Evento de Resize com Debounce */
    let timeout;
    $(window).on("resize", function () {
        clearTimeout(timeout);
        timeout = setTimeout(setSizeElements, 100);
    });
});
