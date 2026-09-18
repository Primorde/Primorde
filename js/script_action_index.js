$(document).ready(function () {

    /* =========================================================
       MAPEAMENTO DE LINKS (Mude/Adicione as URLs aqui)
    ========================================================= */
    const linksMap = {
        // --- BOTÕES FIXOS E HEADER ---
        ".btn_whatszapp": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.",
        ".btn_localizacao": "https://maps.app.goo.gl/hc1ik7ka9zkJVHed8",
        ".btn_solicitar_orcamento_header": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20or%C3%A7amentos.",
        ".btn_galeria_header": "#", // Insira o link para a galeria

        // --- BARRAS DE AÇÃO NAS SEÇÕES ---
        ".btn_ver_no_google_maps": "https://maps.app.goo.gl/hc1ik7ka9zkJVHed8",
        ".btn_solicitar_atendimento": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento.",
        ".btn_avaliacao": "https://maps.app.goo.gl/yCf2FJ5J5tBr1v4Z7",

        // --- CARROSSEL DE SERVIÇOS (HEADER) ---
        "img[src*='carrocel_servicos/construcao.jpg'], img[data-src*='carrocel_servicos/construcao.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20constru%C3%A7%C3%A3o.",
        "img[src*='carrocel_servicos/reforma.jpg'], img[data-src*='carrocel_servicos/reforma.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20reforma.",
        "img[src*='carrocel_servicos/alvenaria.jpg'], img[data-src*='carrocel_servicos/alvenaria.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20alvenaria.",
        "img[src*='carrocel_servicos/cobertura.jpg'], img[data-src*='carrocel_servicos/cobertura.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20cobertura.",
        "img[src*='carrocel_servicos/eletrica.jpg'], img[data-src*='carrocel_servicos/eletrica.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20el%C3%A9trica.",
        "img[src*='carrocel_servicos/hidralica.jpg'], img[data-src*='carrocel_servicos/hidralica.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20hidr%C3%A1ulica.",
        "img[src*='carrocel_servicos/acabamento.jpg'], img[data-src*='carrocel_servicos/acabamento.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20acabamento.",
        "img[src*='carrocel_servicos/instalacao.jpg'], img[data-src*='carrocel_servicos/instalacao.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20instala%C3%A7%C3%A3o.",
        "img[src*='carrocel_servicos/manutencao.jpg'], img[data-src*='carrocel_servicos/manutencao.jpg']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20manuten%C3%A7%C3%A3o.",

        // --- CARDS DA SEÇÃO DE SERVIÇOS ---
        "img[src*='section_servicos/Alvenaria.png'], img[data-src*='section_servicos/Alvenaria.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20alvenaria.",
        "img[src*='section_servicos/Cobertura.png'], img[data-src*='section_servicos/Cobertura.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20cobertura.",
        "img[src*='section_servicos/El%C3%A9trica.png'], img[data-src*='section_servicos/El%C3%A9trica.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20el%C3%A9trica.",
        "img[src*='section_servicos/Hidr%C3%A1lica.png'], img[data-src*='section_servicos/Hidr%C3%A1lica.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20hidr%C3%A1ulica.",
        "img[src*='section_servicos/Acabamento.png'], img[data-src*='section_servicos/Acabamento.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20acabamento.",
        "img[src*='section_servicos/Projetos.png'], img[data-src*='section_servicos/Projetos.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20projetos.",

        // --- CARDS DA SEÇÃO DE PRODUTOS ---
        "img[src*='section_produtos/Motores para portões.png'], img[data-src*='section_produtos/Motores para portões.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20motores%20para%20port%C3%B5es.",
        "img[src*='section_produtos/Intefones e vídeo porteiros.png'], img[data-src*='section_produtos/Intefones e vídeo porteiros.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20interfones%20e%20videoporteiros.",
        "img[src*='section_produtos/Fechadura eletrônica.png'], img[data-src*='section_produtos/Fechadura eletrônica.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20fechaduras%20eletr%C3%B4nicas.",
        "img[src*='section_produtos/Padrões de entrada.png'], img[data-src*='section_produtos/Padrões de entrada.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20padr%C3%B5es%20de%20entrada.",
        "img[src*='section_produtos/Coifas.png'], img[data-src*='section_produtos/Coifas.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20coifas.",
        "img[src*='section_produtos/Cooktops e fogões de indução.png'], img[data-src*='section_produtos/Cooktops e fogões de indução.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20cooktops%20e%20fog%C3%B5es%20de%20indu%C3%A7%C3%A3o.",
        "img[src*='section_produtos/Caixa d´ água.png'], img[data-src*='section_produtos/Caixa d´ água.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20caixa%20d%27%C3%A1gua.",
        "img[src*='section_produtos/Chuveiros Eletrônicos.png'], img[data-src*='section_produtos/Chuveiros Eletrônicos.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20chuveiros%20eletr%C3%B4nicos.",
        "img[src*='section_produtos/Pressurizadores.png'], img[data-src*='section_produtos/Pressurizadores.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20pressurizadores.",

        // --- CARDS DE REDES SOCIAIS ---
        "img[src*='1card_instagram.png'], img[data-src*='1card_instagram.png']": "https://www.instagram.com/primorde.oficial?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
        "img[src*='2card_facebook.png'], img[data-src*='2card_facebook.png']": "https://www.facebook.com/share/1C5QmnoZG8/",
        "img[src*='3card_whatszapp.png'], img[data-src*='3card_whatszapp.png']": "https://wa.me/5573999868244?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.",
        "img[src*='4card_youtube.png'], img[data-src*='4card_youtube.png']": "https://youtube.com/@primordeoficial?si=xCAwoVU9ymet0MbU",
        "img[src*='5card_tiktok.png'], img[data-src*='5card_tiktok.png']": "https://www.tiktok.com/@primorde.oficial?_r=1&_t=ZS-99bQ4WaaSUy"
    };

    /* =========================================================
       INICIALIZAÇÃO DOS EVENTOS DE CLIQUE
    ========================================================= */
    $.each(linksMap, function (seletor, url) {
        if (url && url !== "#") {
            $(seletor).css("cursor", "pointer").on("click", function (e) {
                e.preventDefault();
                // Abre em uma nova aba
                window.open(url, "_blank");
            });
        }
    });

    /* =========================================================
       AÇÃO ESPECIAL: VOLTAR AO TOPO
    ========================================================= */
    $(".btn_voltar_ao_topo").css("cursor", "pointer").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    /* =========================================================
       CARDS DE AVALIAÇÃO
    ========================================================= */

    $(".catalogo_avaliacao img").each(function () {

        $(this)
            .css("cursor", "pointer")
            .on("click", function (e) {

                e.preventDefault();
                e.stopPropagation();

                window.open(
                    "https://maps.app.goo.gl/hc1ik7ka9zkJVHed8",
                    "_blank",
                    "noopener,noreferrer"
                );

            });

    });


});