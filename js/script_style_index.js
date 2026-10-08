$(document).on('contextmenu dragstart', 'img, .card-img', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});

$(window).on("load", function () {

        /* =====================================================
       CARREGAMENTO TARDIO DO FUNDO DO BANNER
       =====================================================
       O banner permanece cinza durante todo o carregamento inicial.
       Somente depois do evento window.load o navegador começa a
       baixar a imagem do fundo. A imagem só é aplicada ao header
       depois que terminou de carregar.
    */

    (function carregarFundoBannerDepoisDoLoad() {

        const headerBanner = document.querySelector("header");

        if (!headerBanner) {
            return;
        }

        const imagemBanner = new Image();

        imagemBanner.onload = function () {
            headerBanner.classList.add("banner-bg-ready");
        };

        imagemBanner.src = "img/header/fundo_banner_top.webp";

    })();

    const elementos = {
        logotipo: $(".logotipo img"),
        tituloBanner: $(".titulo_header"),
        slogan: $(".slogan_header"),
        btnsBanner: $(".btn_solicitar_orcamento_header, .btn_galeria_header"),
        btnGaleria: $(".btn_galeria_header"),
        main: $("main"),
        servicos: $(".carrocel_servicos img"),
        btnsTopo: $(".btn_whatszapp img, .btn_localizacao img"),
        iframe: $(".section_atendimento iframe"),
        btnAvaliacao: $(".section_avaliacao .btn_avaliacao img"),
        estrelas: $(".section_avaliacao .estrelas_avaliacao img"),
        carrosseisTexto: $(
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


    function aplicarConfiguracoes(config) {

        elementos.logotipo.css(
            "width",
            config.logotipoWidth
        );


        elementos.tituloBanner.css({
            width: config.tituloBannerWidth,
            maxWidth: "100%",
            fontSize: config.tituloBannerFontSize,
            boxSizing: "border-box",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "normal"
        });


        elementos.slogan.css({
            width: config.sloganWidth,
            maxWidth: "100%",
            fontSize: config.sloganFontSize,
            boxSizing: "border-box",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "normal",
            letterSpacing: "0.04em"
        });


        elementos.btnsBanner.css(
            "width",
            config.btnsBannerWidth
        );


        elementos.btnGaleria.css(
            "margin-left",
            config.btnsBannerMargin
        );


        elementos.main.css({
            width: config.mainWidth,
            marginLeft: config.mainMarginLeft
        });


        elementos.servicos.css(
            "width",
            config.servicosWidth
        );


        elementos.carrosseisTexto.css(
            "width",
            config.carrosseisTextoWidth
        );
    }


    function configurarBlocoAtendimentoDesktop(config) {

        $(".section_atendimento .bloco_atendimento").css({
            width: config.carrosseisTextoWidth,
            marginLeft: "6%",
            boxSizing: "border-box"
        });


        $(".section_atendimento .bloco1, .section_atendimento .bloco2")
            .css({
                width: "48%",
                marginLeft: "0%",
                boxSizing: "border-box"
            });


        $(".section_atendimento .bloco2").css({
            marginLeft: "4%",
            marginTop: "0vw"
        });


        $(".section_atendimento .texto_atendimento").each(function () {

            this.style.setProperty(
                "width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "max-width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "margin-left",
                "0",
                "important"
            );

            this.style.setProperty(
                "margin-right",
                "0",
                "important"
            );

            this.style.setProperty(
                "box-sizing",
                "border-box",
                "important"
            );

            this.style.setProperty(
                "display",
                "block",
                "important"
            );
        });


        $(".section_atendimento .texto_atendimento p").each(function () {

            this.style.setProperty(
                "width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "max-width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "margin-left",
                "0",
                "important"
            );

            this.style.setProperty(
                "margin-right",
                "0",
                "important"
            );

            this.style.setProperty(
                "box-sizing",
                "border-box",
                "important"
            );

            this.style.setProperty(
                "display",
                "block",
                "important"
            );
        });


        $(".section_atendimento .menu_atendimento").css({
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box"
        });
    }


    function configurarBlocoAtendimentoMobile() {

        $(".section_atendimento .bloco_atendimento").css({
            width: "96%",
            marginLeft: "2%"
        });


        $(".section_atendimento .bloco1, .section_atendimento .bloco2")
            .css({
                width: "100%",
                marginLeft: "0%"
            });


        $(".section_atendimento .bloco2").css({
            marginTop: "5vw"
        });


        $(".section_atendimento .texto_atendimento").each(function () {

            this.style.setProperty(
                "width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "max-width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "margin-left",
                "0",
                "important"
            );

            this.style.setProperty(
                "margin-right",
                "0",
                "important"
            );

            this.style.setProperty(
                "box-sizing",
                "border-box",
                "important"
            );

            this.style.setProperty(
                "display",
                "block",
                "important"
            );

            this.style.setProperty(
                "align-self",
                "stretch",
                "important"
            );
        });


        $(".section_atendimento .texto_atendimento p").each(function () {

            this.style.setProperty(
                "width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "max-width",
                "100%",
                "important"
            );

            this.style.setProperty(
                "margin-left",
                "0",
                "important"
            );

            this.style.setProperty(
                "margin-right",
                "0",
                "important"
            );

            this.style.setProperty(
                "box-sizing",
                "border-box",
                "important"
            );

            this.style.setProperty(
                "display",
                "block",
                "important"
            );
        });
    }


    function configurarMenuAtendimentoDesktop() {

        $(".menu_atendimento").css(
            "flex-wrap",
            "nowrap"
        );


        $(".btn_solicitar_atendimento").css({
            marginLeft: "3%",
            marginTop: "0vw"
        });
    }


    function configurarMenuAtendimentoPequeno() {

        $(".menu_atendimento").css(
            "flex-wrap",
            "wrap"
        );


        $(".btn_solicitar_atendimento").css({
            marginLeft: "0%",
            marginTop: "1vw"
        });
    }


    function configurarBotoesAtendimento(pequeno = false) {

        const sufixo =
            pequeno
                ? "_pequeno"
                : "";


        $(".btn_ver_no_google_maps img").attr(
            "src",
            `img/main/section_atendimento/btn_ver_no_google_maps${sufixo}.webp`
        );


        $(".btn_solicitar_atendimento img").attr(
            "src",
            `img/main/section_atendimento/btn_solicitar_atendimento${sufixo}.webp`
        );
    }


    function configurarBotoesAvaliacao(sufixo = "") {

        $(".btn_avaliacao img").attr(
            "src",
            `img/main/section_avaliacao/btn_avaliacao${sufixo}.webp`
        );


        $(".btn_voltar_ao_topo img").attr(
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
            $(".estrelas_avaliacao");


        const imagem =
            $(".estrelas_avaliacao img");


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

                            $(this).css(
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

        $(".banner_top").css({
            paddingTop,
            paddingBottom
        });
    }


    /* =====================================================
       INTERVENÇÃO RESPONSIVA ORIGINAL
       ===================================================== */

    function intervencao(
        tl,
        config
    ) {

        const elementosMargem = $(
            ".banner_top, .titulo_servicos, .catalogo_servicos, .texto_servicos, " +
            ".titulo_produtos, .carrossel_produtos, .titulo_atendimento, " +
            ".bloco_atendimento, .titulo_avaliacao, .catalogo_avaliacao, " +
            ".texto_avaliacao, .menu_avaliacao, .titulo_redes_sociais, " +
            ".catalogo_redes_sociais"
        );


        if (tl > 595) {

            elementosMargem.css(
                "margin-left",
                "6%"
            );


            configurarBlocoAtendimentoDesktop(
                config
            );


            configurarBotoesAvaliacao();

        } else {

            const elementosMargemMobile = $(
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


            $(".banner_top").css(
                "margin-left",
                "4%"
            );
        }


        /* =================================================
           ACIMA DE 880px
           ================================================= */

        if (tl > 880) {

            configurarEstrelas(
                true,
                false
            );


            $(".menu_avaliacao div").css(
                "width",
                "33.3333%"
            );


            /*
             * Quando entra nessa faixa depois de outra faixa,
             * restaura também a largura das estrelas.
             */

            $(".estrelas_avaliacao").css(
                "width",
                "33.3333%"
            );


            $(".btn_avaliacao").css(
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

        if (tl > 785) {

            configurarEstrelas(
                true,
                true
            );


            $(".menu_avaliacao div").css(
                "width",
                "45%"
            );


            $(".estrelas_avaliacao").css(
                "width",
                "20%"
            );


            $(".btn_avaliacao").css(
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

        if (tl > 700) {

            configurarEstrelas(
                true,
                true
            );


            $(".menu_avaliacao div").css(
                "width",
                "40%"
            );


            $(".estrelas_avaliacao").css(
                "width",
                "20%"
            );


            $(".btn_avaliacao").css(
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

        if (tl > 595) {

            configurarEstrelas(
                false
            );


            $(".menu_avaliacao div").css(
                "width",
                "45%"
            );


            $(".estrelas_avaliacao").css(
                "width",
                "10%"
            );


            $(".btn_avaliacao").css(
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


        $(".menu_avaliacao div").css(
            "width",
            "50%"
        );


        $(".estrelas_avaliacao").css(
            "width",
            "0%"
        );


        $(".btn_avaliacao").css(
            "margin-right",
            "0%"
        );


        $(".menu_atendimento").css(
            "flex-wrap",
            "nowrap"
        );


        $(".btn_solicitar_atendimento").css({
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

    function ajustarAlturas(
        ap,
        tl,
        config
    ) {

        intervencao(
            tl,
            config
        );


        if (ap === "desktop") {

            const alturaCabecalho =
                elementos.logotipo.height() + 15;


            elementos.btnsTopo.css({
                height: alturaCabecalho
            });


            if (
                elementos.estrelas.length &&
                elementos.btnAvaliacao.length &&
                !$(".estrelas_avaliacao").hasClass("hidden")
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

    function setSizeCards(
        tl,
        ap
    ) {

        const card =
            $(".card-img");


        let width =
            "100%";


        if (ap === "desktop") {

            if (tl >= 975) {

                width =
                    "16.6%";


                $(".copyright img").css({
                    width: "50%",
                    marginLeft: "25%"
                });

            } else if (tl >= 880) {

                width =
                    "16.6%";


                $(".copyright img").css({
                    width: "60%",
                    marginLeft: "20%"
                });

            } else if (tl >= 785) {

                width =
                    "21.82115%";


                $(".copyright img").css({
                    width: "70%",
                    marginLeft: "15%"
                });

            } else if (tl >= 595) {

                width =
                    "21.82115%";


                $(".copyright img").css({
                    width: "80%",
                    marginLeft: "10%"
                });

            } else if (tl >= 405) {

                width =
                    "44%";


                $(".copyright img").css({
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
            $(".cabecalho").height() +
            "px";


        $(".banner_top").css(
            "margin-top",
            alturaCabecalho
        );
    }


    /* =====================================================
       EXECUÇÃO PRINCIPAL
       ===================================================== */

    function setSizeElements() {

        const tela =
            $(window).width();


        const config =
            configuracoesResponsivas.find(
                configuracao =>
                    tela >= configuracao.min
            );


        if (config) {

            aplicarConfiguracoes(
                config
            );
        }


        ajustarAlturas(
            "desktop",
            tela,
            config
        );


        setSizeCards(
            tela,
            "desktop"
        );
    }


    /* =====================================================
       EXECUÇÃO INICIAL
       ===================================================== */

    setSizeElements();


    /* =====================================================
       ALTURA DAS ESTRELAS APÓS O CARREGAMENTO DO ASSET
       ===================================================== */

    elementos.estrelas
        .off("load.avaliacaoFinal")
        .on(
            "load.avaliacaoFinal",
            function () {

                if (
                    !$(".estrelas_avaliacao").hasClass(
                        "hidden"
                    ) &&
                    elementos.btnAvaliacao.length
                ) {

                    $(this).css(
                        "height",
                        elementos.btnAvaliacao.height()
                    );
                }
            }
        );


    /* =====================================================
       RESPONSIVIDADE AO REDIMENSIONAR A JANELA
       ===================================================== */

    let resizeTimeout = null;
    let resizeTimeout1 = null;
    let resizeTimeout2 = null;
    let resizeTimeout3 = null;


    $(window).on(
        "resize",
        function () {

            clearTimeout(
                resizeTimeout
            );

            clearTimeout(
                resizeTimeout1
            );

            clearTimeout(
                resizeTimeout2
            );

            clearTimeout(
                resizeTimeout3
            );


            setSizeElements();


            resizeTimeout1 =
                setTimeout(
                    function () {

                        setSizeElements();

                    },
                    50
                );


            resizeTimeout2 =
                setTimeout(
                    function () {

                        setSizeElements();

                    },
                    150
                );


            resizeTimeout3 =
                setTimeout(
                    function () {

                        setSizeElements();

                    },
                    300
                );


            resizeTimeout =
                setTimeout(
                    function () {

                        setSizeElements();

                    },
                    400
                );
        }
    );

});
