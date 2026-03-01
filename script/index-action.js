$(document).ready(function () {

    // ==============================
    // MAPA DE LINKS
    // ==============================
    const links = {

        // HEADER
        header_btn_whatszappp: "https://wa.me/5573999868244?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Primorde.",
        header_btn_localizacao: "https://www.google.com/maps/place/Primorde/@-17.540859,-39.733496,11z/data=!4m6!3m5!1s0x62b70bb8034828bd:0x23beee8b855f4e4!8m2!3d-17.5408594!4d-39.7334956!16s%2Fg%2F11xlzdrxdk?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",

        // CATÁLOGO
        btn_motores_portoes: "https://wa.me/5573999868244?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20instalação%20ou%20manutenção%20de%20motores%20para%20portões%20pela%20Primorde.",
        btn_intefone_video_porteiro: "https://wa.me/5573999868244?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20instalação%20ou%20manutenção%20de%20interfone%20e%20vídeo%20porteiro%20pela%20Primorde.",
        btn_fechadura_eletronica: "https://wa.me/5573999868244?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20instalação%20ou%20manutenção%20de%20fechadura%20eletrônica%20pela%20Primorde.",
        btn_coifas: "https://wa.me/5573999868244?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20instalação%20de%20coifas%20pela%20Primorde.",
        btn_padroes: "https://wa.me/5573999868244?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20instalação%20de%20padrões%20elétricos%20monofásico%2C%20bifásico%20ou%20trifásico%20pela%20Primorde.",
        btn_pressurizadores: "https://wa.me/5573999868244?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20instalação%20de%20pressurizadores%20pela%20Primorde.",

        // GOOGLE
        btn_google_maps: "https://g.page/r/CeT0Vbjo7jsCEBE/review",

        // RODAPÉ
        btn_instagram: "https://www.instagram.com/primordeservicosgerais?igsh=OHo4cjU0aGNocmVw",
        btn_facebook: "https://www.facebook.com/share/1K6aefjQEd/",
        btn_whatsapp: "https://wa.me/5573999868244",
        btn_youtube: "https://youtube.com/@primordeoficial?si=Gg3CDJNCGGVK09wY",
        btn_tiktok: "https://www.tiktok.com/@primorde.oficial?_r=1&_t=ZS-94KT9kvvlEj"
    };


    // ==============================
    // FUNÇÃO GLOBAL DE CLIQUE
    // ==============================
    $("[class*='btn_'], [class*='header_btn_']").on("click", function () {

        let classes = $(this).attr("class").split(" ");

        let btnClass = classes.find(c => c.startsWith("btn_") || c.startsWith("header_btn_"));

        if (btnClass && links[btnClass]) {

            window.open(links[btnClass], "_blank");

        }

    });
	
	 let botoes;
	 botoes = $("[class*='btn_'], [class*='header_btn_']");

    // Adiciona apenas transição fixa
    botoes.css({
        cursor: "pointer",
        transition: "transform 0.15s ease, filter 0.15s ease"
    });


    // Clique (pressionar)
    botoes.on("mousedown touchstart", function () {
        $(this).css("transform", "scale(0.95)");
    });

    // Soltar clique → remove estilo
    botoes.on("mouseup touchend", function () {
        $(this).css("transform", "");
    });
	
	botoes = $("[class*='btn_']:not([class*='header_btn_'])");
	
	// Hover
    botoes.on("mouseenter", function () {
        $(this).css({
            transform: "scale(1.05)",
            filter: "brightness(0.9)"
        });
    });

    // Quando sai o mouse → REMOVE os estilos aplicados
    botoes.on("mouseleave", function () {
        $(this).css({
            transform: "",
            filter: ""
        });
    });

});