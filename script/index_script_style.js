$(document).ready(function () {

    // ===============================
    // FUNÇÃO DE DEBOUNCE
    // Evita que o resize execute várias vezes seguidas
    // ===============================
	
    function debounce(func, delay) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    }
	
    // Executa ao iniciar
	
	for(let i = 0; i < 10; i++){ setTimeout(setWidthElements(), 100); }
	
    // Executa ajuste ao redimensionar janela (com debounce)
	
    $(window).on("resize", debounce(function () {
		for(let i = 0; i < 10; i++){ 
		setTimeout(setWidthElements(), 100);
		console.log(i);
		}
    }, 150));

});

	// ===============================
	// Evento disparado quando a página termina de carregar
	// ===============================

$(window).on("load", function () {

    setTimeout(function () {

        // Aplica gradiente no banner principal
        $(".section_banner_top").css("background-image",
            "linear-gradient(to right, rgba(0,0,0,0.95) 35%, rgba(99,99,99,0.15)), url('style/img/section/banner_top/fundo_banner_top.png')"
        );

        // Mostra banners com fade suave
        $(".banner_servicos, .banner_top").fadeIn(200);

    }, 300);
});


	// ===============================
	// FUNÇÃO PRINCIPAL DE AJUSTE RESPONSIVO
	// ===============================
	
function setWidthElements() {

    const $window = $(window);
    const widthWindow = $window.width();

    // Cache de seletores (melhora performance)
    const $logo = $("header .header_logotipo img");
    const $catalogos = $(".section_catalogos");
    const $catalogosImgs = $(".section_catalogos img");
    const $bannerTop = $(".banner_top");
    const $bannerSlogan = $(".banner_slogan");
    const $barraServicos = $(".barra_top_servicos");
    const $logoRodape = $(".logo_rodape img");

    console.log("Largura da janela:", widthWindow);

    // ===============================
    // AJUSTE DO TAMANHO DO LOGO (simplificado)
    // ===============================
	
    const logoWidth = widthWindow >= 1150 ? "11%" :
        widthWindow >= 1050 ? "12%" :
        widthWindow >= 950 ? "13%" :
        widthWindow >= 850 ? "14%" :
        widthWindow >= 750 ? "15%" :
        widthWindow >= 650 ? "16%" :
        widthWindow >= 600 ? "17%" :
        widthWindow >= 500 ? "18%" :
        widthWindow >= 400 ? "19%" : "20%";

    $logo.css("width", logoWidth);


    // ===============================
    // RESPONSIVO <= 480px (Mobile pequeno)
    // ===============================	
    if (widthWindow <= 480) {

        ajustarCatalogoMobile($catalogos, "45%", "70vw", "85%");
		$(".logo_rodape img").css("width", "22vw");
		$(".sd1img").attr("src", "style/img/section/descricao/section_descricao_1.png");
        $(".sd2img").attr("src", "style/img/section/descricao/section_descricao_2.png");
		$(".titulo_section_servicos img").attr("src", "style/img/section/descricao/titulo_section_servicos_1.png");
        $(".titulo_section_catalogo img").attr("src", "style/img/section/descricao/titulo_section_catalogo_1.png");
		
		
		// Ajuate em secao google maps(Mobile pequeno)
		$(".descricao_google_maps").attr("src", "style/img/section/google_maps/descricao_google_maps 1.png");
		
		$(".section_google_maps").css({
			"width" : "90%",
			"margin-left" : "5%",	
			"margin-bottom" : "10vw"
		});
		
		$(".section_google_maps div").css({
			"width" : "100%",
			"padding" : "3vw 0 5vw 0"
		});
		
		$(".section_google_maps div .descricao_google_maps").css({
			"width" : "100%",
			"margin" : "0"
		});
		
		$(".section_google_maps div .btn_google_maps").css({
			"width" : "28%",
			"margin-left" : "72%"
		});
		
		$(".section_google_maps iframe").css({
			"width" : "100%",
			"border" : "0",
			"border-top" : "3vw solid white"
		});

    }
    // ===============================
    // RESPONSIVO <= 750px (Tablet / Mobile)
    // ===============================
    else if (widthWindow <= 750) {

        ajustarCatalogoTablet($catalogos, "25%", "55vw", "75%");
		$(".logo_rodape img").css("width", "17vw");
		$(".sd1img").attr("src", "style/img/section/descricao/section_descricao_1.png");
        $(".sd2img").attr("src", "style/img/section/descricao/section_descricao_2.png");
        $(".titulo_section_servicos img").attr("src", "style/img/section/descricao/titulo_section_servicos_1.png");
        $(".titulo_section_catalogo img").attr("src", "style/img/section/descricao/titulo_section_catalogo_1.png");
		
		// Ajuate em secao google maps (Tablet / Mobile)
		$(".descricao_google_maps").attr("src", "style/img/section/google_maps/descricao_google_maps 1.png");
		
		$(".section_google_maps").css({
			"width" : "90%",
			"margin-left" : "5%",	
			"margin-bottom" : "10vw"
		});
		
		$(".section_google_maps div").css({
			"width" : "100%",
			"padding" : "3vw 0 5vw 0"
		});
		
		$(".section_google_maps div .descricao_google_maps").css({
			"width" : "100%",
			"margin" : "0"
		});
		
		$(".section_google_maps div .btn_google_maps").css({
			"width" : "28%",
			"margin-left" : "72%"
		});
		
		$(".section_google_maps iframe").css({
			"width" : "100%",
			"border" : "0",
			"border-top" : "3vw solid white"
		});

    }
    // ===============================
    // RESPONSIVO >= 750px (Desktop)
    // ===============================
    else {

        ajustarCatalogoDesktop($catalogos, "15%", "45vw", "60%");

        // Troca imagens versão desktop
		
        $(".sd1img").attr("src", "style/img/section/descricao/section_descricao_11.png");
        $(".sd2img").attr("src", "style/img/section/descricao/section_descricao_22.png");
        $(".titulo_section_servicos img").attr("src", "style/img/section/descricao/titulo_section_servicos.png");
        $(".titulo_section_catalogo img").attr("src", "style/img/section/descricao/titulo_section_catalogo.png");
		

        $(".logo_rodape img").css("width", "12vw");
		
		// Ajuate em secao google maps desktop
		$(".descricao_google_maps").attr("src", "style/img/section/google_maps/descricao_google_maps.png");
		
		$(".section_google_maps").css({
			"width" : "90%",
			"margin-left" : "5%",	
			"margin-bottom" : "8vw"
		});
		
		$(".section_google_maps div").css({
			"width" : "40%",
			"padding" : "2vw 0 3vw 0"
		});
		
		$(".section_google_maps div .descricao_google_maps").css({
			"width" : "100%",
			"margin" : "0"
		});
		
		$(".section_google_maps div .btn_google_maps").css({
			"width" : "42%",
			"margin-left" : "58%"
		});
		
		let width_section_google_maps = $(".section_google_maps").width();
		width_section_google_maps = width_section_google_maps / 100;
		width_section_google_maps = width_section_google_maps * 2;
		
		$(".section_google_maps iframe").css({
			"width" : "55%",
			"border" : "0",
			"border-left" : width_section_google_maps + "px solid white" 
		});
    }

    // ===============================
    // AJUSTE REDES SOCIAIS (proporcional ao logo do rodapé)
    // ===============================
    const logoHeight = $logoRodape.height();
    const socialSize = logoHeight / 2.8;

    $(".redes_sociais img").css({
        "height": socialSize + "px",
        "margin-left": socialSize + "px",
        "margin-top": ((logoHeight - socialSize) / 2) + "px"
    });

    // ===============================
    // BOTÕES DO HEADER (altura igual ao logo)
    // ===============================
    $("header .header_btn_whatszappp img, header .header_btn_localizacao img")
        .css("height", $logo.height() + "px");
}



	// ===============================
	// FUNÇÕES AUXILIARES RESPONSIVAS
	// ===============================

	// Mobile pequeno
function ajustarCatalogoMobile($catalogos, imgWidth, bannerWidth, barraWidth) {

    const itens = $catalogos.children();
    itens.removeClass("mg_direita mg_esquerda");

    itens.filter(":nth-child(odd)").addClass("mg_direita");
    itens.filter(":nth-child(even)").addClass("mg_esquerda");

    $(".mg_direita").css("margin", "0 5% 2vw 0");
    $(".mg_esquerda").css("margin", "0 0 2vw 5%");

    $(".section_catalogos img").css("width", imgWidth);
    $(".banner_top, .banner_slogan").css("width", bannerWidth);
    $(".barra_top_servicos").css("width", barraWidth);
}


	// Tablet
function ajustarCatalogoTablet($catalogos, imgWidth, bannerWidth, barraWidth) {

    const itens = $catalogos.children();
    itens.removeClass("mg_direita mg_centro mg_esquerda");

    itens.filter(":nth-child(3n)").addClass("mg_esquerda");
    itens.filter(":nth-child(3n-1)").addClass("mg_centro");
    itens.filter(":nth-child(3n-2)").addClass("mg_direita");

    $(".mg_direita").css("margin", "0 6.25% 2vw 0");
    $(".mg_centro").css("margin", "0 6.25% 2vw 6.25%");
    $(".mg_esquerda").css("margin", "0 0 2vw 6.25%");

    $(".section_catalogos img").css("width", imgWidth);
    $(".banner_top, .banner_slogan").css("width", bannerWidth);
    $(".barra_top_servicos").css("width", barraWidth);
}


	// Desktop
function ajustarCatalogoDesktop($catalogos, imgWidth, bannerWidth, barraWidth) {

    const itens = $catalogos.children();
    itens.removeClass("mg_direita mg_centro mg_esquerda");

    itens.filter(":nth-child(1)").addClass("mg_direita");
    itens.filter(":nth-child(n+2):nth-child(-n+5)").addClass("mg_centro");
    itens.filter(":nth-child(6)").addClass("mg_esquerda");

    $(".mg_direita").css("margin", "0 1% 2vw 0");
    $(".mg_centro").css("margin", "0 1% 2vw 1%");
    $(".mg_esquerda").css("margin", "0 0 2vw 1%");

    $(".section_catalogos img").css("width", imgWidth);
    $(".banner_top, .banner_slogan").css("width", bannerWidth);
    $(".barra_top_servicos").css("width", barraWidth);
}



