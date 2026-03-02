// =====================================================
// EXECUTA QUANDO O DOM ESTIVER PRONTO
// =====================================================
$(document).ready(function () {

    // -------------------------------
    // Função Debounce
    // Evita múltiplas execuções no resize
    // -------------------------------
    function debounce(func, delay) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    }

    // Executa ao iniciar
    for(let i = 0; i <= 5; i++){
		setWidthElements();
	}

    // Executa ao redimensionar (com debounce)
    $(window).on("resize", debounce(function () {
        for(let i = 0; i <= 5; i++){
			setWidthElements();
		}
    }, 100));

});


// =====================================================
// EXECUTA QUANDO A PÁGINA TERMINAR DE CARREGAR
// =====================================================
$(window).on("load", function () {

    setTimeout(function () {

        // Aplica gradiente no banner principal
        $(".section_banner_top").css(
            "background-image",
            "linear-gradient(to right, rgba(0,0,0,0.95) 35%, rgba(99,99,99,0.15)), url('style/img/section/banner_top/fundo_banner_top.png')"
        );

        // Mostra banners com fade suave
        $(".banner_servicos, .banner_top").fadeIn(1000);

    }, 100);
});


// =====================================================
// FUNÇÃO PRINCIPAL RESPONSIVA
// =====================================================
function setWidthElements() {

    const widthWindow = $(window).width();

    // Cache de seletores (melhora performance)
    const $logo = $("header .header_logotipo img");
    const $catalogos = $(".section_catalogos");
    const $logoRodape = $(".logo_rodape img");

    // -------------------------------------------------
    // AJUSTE PROGRESSIVO DO TAMANHO DO LOGO
    // -------------------------------------------------
    const logoWidth =
        widthWindow >= 1150 ? "10%" :
        widthWindow >= 1050 ? "12%" :
        widthWindow >= 950 ? "13%" :
        widthWindow >= 850 ? "14%" :
        widthWindow >= 750 ? "16%" :
        widthWindow >= 650 ? "18%" :
        widthWindow >= 600 ? "22%" :
        widthWindow >= 500 ? "28%" :
        widthWindow >= 400 ? "30%" :
        "32%";

    $logo.css("width", logoWidth);


    // =====================================================
    // MOBILE PEQUENO (<= 480px)
    // =====================================================
    if (widthWindow <= 480) {

        trocarImagensMobile();

        ajustarCatalogoMobile($catalogos, "45%", "70vw", "85%");
        ajustarGoogleMapsMobile();

        $logoRodape.css("width", "22vw");
    }

    // =====================================================
    // TABLET / MOBILE GRANDE (<= 750px)
    // =====================================================
    else if (widthWindow <= 750) {

        trocarImagensMobile();

        ajustarCatalogoTablet($catalogos, "25%", "55vw", "75%");
        ajustarGoogleMapsMobile();

        $logoRodape.css("width", "17vw");
    }

    // =====================================================
    // DESKTOP (> 750px)
    // =====================================================
    else {

        trocarImagensDesktop();

        ajustarCatalogoDesktop($catalogos, "15%", "45vw", "60%");
        ajustarGoogleMapsDesktop();

        $logoRodape.css("width", "12vw");
    }


    // =====================================================
    // AJUSTE REDES SOCIAIS (proporcional ao logo do rodapé)
    // =====================================================
    const logoHeight = $logoRodape.height();
    const socialSize = logoHeight / 2.8;

    $(".redes_sociais img").css({
        height: socialSize + "px",
        marginLeft: socialSize + "px",
        marginTop: ((logoHeight - socialSize) / 2) + "px"
    });


    // =====================================================
    // BOTÕES DO HEADER (altura igual ao logo)
    // =====================================================
    $("header .header_btn_whatszappp img, header .header_btn_localizacao img")
        .css("height", $logo.height() + "px");
}


// =====================================================
// FUNÇÕES DE TROCA DE IMAGEM
// =====================================================
function trocarImagensMobile() {

    $(".sd1img").attr("src", "style/img/section/descricao/section_descricao_1.png");
    $(".sd2img").attr("src", "style/img/section/descricao/section_descricao_2.png");

    $(".titulo_section_servicos img")
        .attr("src", "style/img/section/descricao/titulo_section_servicos_1.png");

    $(".titulo_section_catalogo img")
        .attr("src", "style/img/section/descricao/titulo_section_catalogo_1.png");

    $(".descricao_google_maps")
        .attr("src", "style/img/section/google_maps/descricao_google_maps 1.png");
}

function trocarImagensDesktop() {

    $(".sd1img").attr("src", "style/img/section/descricao/section_descricao_11.png");
    $(".sd2img").attr("src", "style/img/section/descricao/section_descricao_22.png");

    $(".titulo_section_servicos img")
        .attr("src", "style/img/section/descricao/titulo_section_servicos.png");

    $(".titulo_section_catalogo img")
        .attr("src", "style/img/section/descricao/titulo_section_catalogo.png");

    $(".descricao_google_maps")
        .attr("src", "style/img/section/google_maps/descricao_google_maps.png");
}


// =====================================================
// AJUSTES GOOGLE MAPS
// =====================================================
function ajustarGoogleMapsMobile() {

    $(".section_google_maps").css({
        width: "90%",
        marginLeft: "5%",
        marginBottom: "10vw"
    });

    $(".section_google_maps div").css({
        width: "100%",
        padding: "3vw 0 5vw 0"
    });
	
	$(".section_google_maps div .btn_google_maps").css({
			"width" : "28%",
			"margin-left" : "70%"
	});

    $(".section_google_maps iframe").css({
        width: "100%",
        border: "0",
        borderTop: "3vw solid white"
    });
}

function ajustarGoogleMapsDesktop() {

    $(".section_google_maps").css({
        width: "90%",
        marginLeft: "5%",
        marginBottom: "8vw"
    });

    $(".section_google_maps div").css({
        width: "40%",
        padding: "2vw 0 3vw 0"
    });
	
	$(".section_google_maps div .btn_google_maps").css({
			"width" : "42%",
			"margin-left" : "58%"
	});

    let largura = $(".section_google_maps").width() * 0.02;

    $(".section_google_maps iframe").css({
        width: "55%",
        border: "0",
        borderLeft: largura + "px solid white"
    });
}


// =====================================================
// AJUSTES DE CATÁLOGO
// =====================================================
function ajustarCatalogoMobile($catalogos, imgWidth, bannerWidth, barraWidth) {

    const itens = $catalogos.children();
    itens.removeClass("mg_direita mg_esquerda");

    itens.filter(":nth-child(odd)").addClass("mg_direita");
    itens.filter(":nth-child(even)").addClass("mg_esquerda");

    $(".mg_direita").css("margin", "0 5% 2vw 0");
    $(".mg_esquerda").css("margin", "0 0 2vw 5%");

    aplicarLarguras(imgWidth, bannerWidth, barraWidth);
}

function ajustarCatalogoTablet($catalogos, imgWidth, bannerWidth, barraWidth) {

    const itens = $catalogos.children();
    itens.removeClass("mg_direita mg_centro mg_esquerda");

    itens.filter(":nth-child(3n-2)").addClass("mg_direita");
    itens.filter(":nth-child(3n-1)").addClass("mg_centro");
    itens.filter(":nth-child(3n)").addClass("mg_esquerda");

    $(".mg_direita").css("margin", "0 6.25% 2vw 0");
    $(".mg_centro").css("margin", "0 6.25% 2vw 6.25%");
    $(".mg_esquerda").css("margin", "0 0 2vw 6.25%");

    aplicarLarguras(imgWidth, bannerWidth, barraWidth);
}

function ajustarCatalogoDesktop($catalogos, imgWidth, bannerWidth, barraWidth) {

    const itens = $catalogos.children();
    itens.removeClass("mg_direita mg_centro mg_esquerda");

    itens.filter(":nth-child(1)").addClass("mg_direita");
    itens.filter(":nth-child(n+2):nth-child(-n+5)").addClass("mg_centro");
    itens.filter(":nth-child(6)").addClass("mg_esquerda");

    $(".mg_direita").css("margin", "0 1% 2vw 0");
    $(".mg_centro").css("margin", "0 1% 2vw 1%");
    $(".mg_esquerda").css("margin", "0 0 2vw 1%");

    aplicarLarguras(imgWidth, bannerWidth, barraWidth);
}

function aplicarLarguras(imgWidth, bannerWidth, barraWidth) {
    $(".section_catalogos img").css("width", imgWidth);
    $(".banner_top, .banner_slogan").css("width", bannerWidth);
    $(".barra_top_servicos").css("width", barraWidth);

}
