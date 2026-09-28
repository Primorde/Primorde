$(document).on('contextmenu dragstart', 'img, .card-img', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});

$(window).on("load", function () {

    $("header").css({
        backgroundImage:
            "radial-gradient(circle,rgba(0,0,0,.71) 0%, rgba(0,0,0,.56) 0%, rgba(0,0,0,.70) 0%), url('img/header/fundo_banner_top.jpg')"
    });

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


const configuracoesDesktop = [

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
        titulosGeraisWidth: "52%",
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
        titulosGeraisWidth: "55.82%",
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
        titulosGeraisWidth: "59.64%",
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
        titulosGeraisWidth: "63.45%",
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
        titulosGeraisWidth: "67.27%",
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
        titulosGeraisWidth: "71.09%",
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
        titulosGeraisWidth: "74.91%",
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
        titulosGeraisWidth: "95%",
        carrosseisTextoWidth: "96%"
    }
];




    function aplicarConfiguracoes(config) {

        /*
         * =====================================================
         * LOGOTIPO
         * =====================================================
         */

        elementos.logotipo.css(
            "width",
            config.logotipoWidth
        );


        /*
         * =====================================================
         * BANNER — H1
         * =====================================================
         */

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


        /*
         * =====================================================
         * BANNER — P / SLOGAN
         * =====================================================
         */

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


        /*
         * =====================================================
         * BOTÕES DO BANNER
         * =====================================================
         */

        elementos.btnsBanner.css(
            "width",
            config.btnsBannerWidth
        );

        elementos.btnGaleria.css(
            "margin-left",
            config.btnsBannerMargin
        );


        /*
         * =====================================================
         * MAIN
         * =====================================================
         */

        elementos.main.css({
            width: config.mainWidth,
            marginLeft: config.mainMarginLeft
        });


        /*
         * =====================================================
         * SERVIÇOS
         * =====================================================
         */

        elementos.servicos.css(
            "width",
            config.servicosWidth
        );


        /*
         * =====================================================
         * DEMAIS ELEMENTOS
         * =====================================================
         */

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


        /*
         * Faz o menu ocupar toda a largura
         * disponível dentro do bloco2.
         */

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


    function configurarEstrelas(exibir, pequena = false) {

        const estrelas =
            $(".estrelas_avaliacao");

        if (exibir) {

            estrelas.removeClass(
                "hidden"
            );

            $(".estrelas_avaliacao img").attr(
                "src",
                pequena
                    ? "img/main/section_avaliacao/estrelas_avaliacao_pequeno.webp"
                    : "img/main/section_avaliacao/estrelas_avaliacao.webp"
            );

        } else {

            estrelas.addClass(
                "hidden"
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


    function intervencao(tl, config) {

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

            configurarBlocoAtendimentoDesktop(config);

            configurarBotoesAvaliacao();

        } else {

            /*
             * MOBILE
             *
             * Remove o margin-left aplicado no desktop
             * e garante 2% nos elementos principais.
             */

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


        /*
         * =====================================================
         * TELAS GRANDES
         * =====================================================
         */

        if (tl > 880) {

            configurarEstrelas(true, false);

            $(".menu_avaliacao div").css(
                "width",
                "33.3333%"
            );

            $(".btn_avaliacao").css(
                "margin-right",
                "0%"
            );

            configurarMenuAtendimentoDesktop();

            configurarBotoesAtendimento(false);

            configurarBanner(
                "2vw",
                "5vw"
            );

            return;
        }


        /*
         * =====================================================
         * TABLET
         * =====================================================
         */

        if (tl > 785) {

            configurarEstrelas(true, true);

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

            configurarBotoesAtendimento(true);

            configurarBanner(
                "2vw",
                "8vw"
            );

            return;
        }


        /*
         * =====================================================
         * TABLET PEQUENO
         * =====================================================
         */

        if (tl > 700) {

            $(".menu_avaliacao div").css(
                "width",
                "40%"
            );

            configurarEstrelas(true, true);

            $(".estrelas_avaliacao").css(
                "width",
                "20%"
            );

            $(".btn_avaliacao").css(
                "margin-right",
                "0%"
            );

            configurarMenuAtendimentoPequeno();

            configurarBotoesAtendimento(true);

            configurarBanner(
                "4vw",
                "12vw"
            );

            return;
        }


        /*
         * =====================================================
         * TABLET / MOBILE GRANDE
         * =====================================================
         */

        if (tl > 595) {

            $(".menu_avaliacao div").css(
                "width",
                "45%"
            );

            configurarEstrelas(false);

            $(".btn_avaliacao").css(
                "margin-right",
                "10%"
            );

            configurarMenuAtendimentoPequeno();

            configurarBotoesAtendimento(true);

            configurarBotoesAvaliacao("_2");

            configurarBanner(
                "4vw",
                "12vw"
            );

            return;
        }


        /*
         * =====================================================
         * MOBILE
         * =====================================================
         */

        configurarBlocoAtendimentoMobile();

        $(".menu_avaliacao div").css(
            "width",
            "50%"
        );

        configurarEstrelas(false);

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

        configurarBotoesAtendimento(false);

        configurarBotoesAvaliacao("_3");

        configurarBanner(
            "4vw",
            "12vw"
        );
    }


    function ajustarAlturas(ap, tl, config) {

        intervencao(tl, config);

        if (ap === "descktop") {

            const alturaCabecalho =
                elementos.logotipo.height() + 15;

            elementos.btnsTopo.css({
                height: alturaCabecalho
            });

            elementos.logotipo.css(
                "margin-top",
                "7.5px"
            );

            elementos.estrelas.css({
                height:
                    elementos.btnAvaliacao.height()
            });
        }
    }


    function setSizeCards(tl, ap) {

        const card =
            $(".card-img");

        let width = "100%";


        if (ap === "descktop") {

            if (tl >= 975) {

                width = "16.6%";

                $(".copyright img").css({
                    width: "50%",
                    marginLeft: "25%"
                });

            } else if (tl >= 880) {

                width = "16.6%";

                $(".copyright img").css({
                    width: "60%",
                    marginLeft: "20%"
                });

            } else if (tl >= 785) {

                width = "21.82115%";

                $(".copyright img").css({
                    width: "70%",
                    marginLeft: "15%"
                });

            } else if (tl >= 595) {

                width = "21.82115%";

                $(".copyright img").css({
                    width: "80%",
                    marginLeft: "10%"
                });

            } else if (tl >= 405) {

                width = "44%";

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
            $(".cabecalho").height() + "px";


        $(".banner_top").css(
            "margin-top",
            alturaCabecalho
        );
    }


    function setSizeElements() {

        const tela =
            $(window).width();


        const config =
            configuracoesDesktop.find(
                configuracao =>
                    tela >= configuracao.min
            );


        if (config) {

            aplicarConfiguracoes(
                config
            );
        }


        ajustarAlturas(
            "descktop",
            tela,
            config
        );


        setSizeCards(
            tela,
            "descktop"
        );
    }


    /*
     * =========================================================
     * EXECUÇÃO INICIAL
     * =========================================================
     */

    setSizeElements();


    /*
     * =========================================================
     * RESPONSIVIDADE AO REDIMENSIONAR A JANELA
     * =========================================================
     */

    let resizeTimeout = null;
    let resizeTimeout1 = null;
    let resizeTimeout2 = null;
    let resizeTimeout3 = null;


    $(window).on("resize", function () {

        /*
         * Cancela as execuções pendentes do resize anterior.
         */

        clearTimeout(resizeTimeout);
        clearTimeout(resizeTimeout1);
        clearTimeout(resizeTimeout2);
        clearTimeout(resizeTimeout3);


        /*
         * =====================================================
         * 1ª EXECUÇÃO
         *
         * Executa imediatamente usando a nova largura.
         * =====================================================
         */

        setSizeElements();


        /*
         * =====================================================
         * 2ª EXECUÇÃO
         *
         * Pequeno atraso para permitir que o navegador
         * conclua o primeiro recálculo do layout.
         * =====================================================
         */

        resizeTimeout1 = setTimeout(function () {

            setSizeElements();

        }, 50);


        /*
         * =====================================================
         * 3ª EXECUÇÃO
         *
         * Reconfere dimensões dependentes.
         * =====================================================
         */

        resizeTimeout2 = setTimeout(function () {

            setSizeElements();

        }, 150);


        /*
         * =====================================================
         * 4ª EXECUÇÃO
         *
         * Nova conferência depois das mudanças anteriores.
         * =====================================================
         */

        resizeTimeout3 = setTimeout(function () {

            setSizeElements();

        }, 300);


        /*
         * =====================================================
         * 5ª EXECUÇÃO
         *
         * Conferência final depois que o redimensionamento
         * praticamente terminou.
         * =====================================================
         */

        resizeTimeout = setTimeout(function () {

            setSizeElements();

        }, 400);
    });

});

