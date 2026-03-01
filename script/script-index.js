$(document).ready(function () {
		
		$(window).on("resize", function () {
			setTimeout(function(){
				set_width_elemnts();
			}, 100);
			set_width_elemnts();
		});
		
		for(let i = 0; i < 10; i++){
			setTimeout(function(){
				set_width_elemnts();
			}, 200);
		}
		
  });
  
	$(window).on("load", function() {
		setTimeout(function(){
			$(".section_banner_top").css("background-image", 
				"linear-gradient(to right, rgba(0,0,0,0.95) 35%, rgba(99,99,99,0.15)), url('style/img/section/banner_top/fundo_banner_top.png')"
			);
			
			
			$(".banner_servicos, .banner_top").fadeIn(100);
		}, 300);
	});
  
	
    //funcao para ajustar tamnho de elementos
	function set_width_elemnts(){
		
		
		let width_window = 0;
		width_window = $(window).width();
		
		console.log(width_window);
		
		if(width_window >= 1150){
			$("header .header_logotipo img").css("width" , "11%");
		}
		else if(width_window >= 1050){
			$("header .header_logotipo img").css("width" , "12%");
		}
		else if(width_window >= 950){
			$("header .header_logotipo img").css("width" , "13%");
		}
		else if(width_window >= 850){
			$("header .header_logotipo img").css("width" , "14%");
		}
		else if(width_window >= 750){
			$("header .header_logotipo img").css("width" , "15%");
		}
		else if(width_window >= 650){
			$("header .header_logotipo img").css("width" , "16%");
		}
		else if(width_window >= 600){
			$("header .header_logotipo img").css("width" , "17%");
		}
		else if(width_window >= 500){
			$("header .header_logotipo img").css("width" , "18%");
		}
		else if(width_window >= 400){
			$("header .header_logotipo img").css("width" , "19%");
		}
		else if(width_window < 400){
			$("header .header_logotipo img").css("width" , "20%");
		}
		
		if(width_window <= 750){
			
			let itens = $(".section_catalogos").children();
			
			itens.removeClass("mg_direita mg_centro mg_esquerda");

			itens.filter(":nth-child(3), :nth-child(6)")
			.addClass("mg_esquerda");

			itens.filter(":nth-child(2), :nth-child(5)")
			.addClass("mg_centro");
			
			itens.filter(":nth-child(1), :nth-child(4)")
			.addClass("mg_direita");
			
			
			$(".mg_direita").css("margin" , "0 6.25% 2vw 0");
			$(".mg_centro").css("margin" , "0 6.25% 2vw 6.25%");
			$(".mg_esquerda").css("margin" , "0 0 2vw 6.25%");
						
			$(".section_catalogos img").css("width", "25%");
			
			$(".banner_top").css("width", "55vw");
			$(".banner_slogan").css("width", "55vw");
			$(".barra_top_servicos").css("width", "75%");
			
			
			$(".section_banner_top img").css("margin-left", "5%");
			
		}
		
		if(width_window >= 750){
			
			$(".section_catalogos :nth-child(n+2):nth-child(-n+5)")
			.removeClass("mg_direita mg_centro mg_esquerda")
			.addClass("mg_centro");
			
			$(".section_catalogos :nth-child(1)").addClass("mg_direita");
			$(".section_catalogos :nth-child(6)").addClass("mg_esquerda");
			
			$(".mg_direita").css("margin" , "0 1% 2vw 0");
			$(".mg_centro").css("margin" , "0 1% 2vw 1%");
			$(".mg_esquerda").css("margin" , "0 0 2vw 1%");
									
			
			$(".section_catalogos img").css("width", "15%");
			
			$(".banner_top").css("width", "45vw");
			$(".banner_slogan").css("width", "45vw");
			$(".barra_top_servicos").css("width", "60%");
			
			$(".section_banner_top img").css("margin-left", "5%");
			
			$(".sd1img").attr("src", "style/img/section/descricao/section_descricao_11.png");
			$(".sd2img").attr("src", "style/img/section/descricao/section_descricao_22.png");
			
			
		 
			$(".logo_rodape img").css("width", "15vw");
		} 
		else{
			$(".sd1img").attr("src", "style/img/section/descricao/section_descricao_1.png");
			$(".sd2img").attr("src", "style/img/section/descricao/section_descricao_2.png");
		}
		
		if(width_window <= 480){
			
			
			let itens = $(".section_catalogos").children();
			
			itens.removeClass("mg_direita mg_centro mg_esquerda");

			itens.filter(":nth-child(2), :nth-child(4), :nth-child(6)")
			.addClass("mg_esquerda");

			itens.filter(":nth-child(1), :nth-child(3), :nth-child(5)")
			.addClass("mg_direita");
			
			
			$(".mg_direita").css("margin" , "0 5% 2vw 0");
			$(".mg_esquerda").css("margin" , "0 0 2vw 5%");
									
			
			$(".section_catalogos img").css("width", "45%");
			
			$(".banner_top").css("width", "70vw");
			$(".banner_slogan").css("width", "70vw");
			$(".barra_top_servicos").css("width", "85%");
			
			$(".section_banner_top img").css("margin-left", "5%");
			
			
		}
		
		let a, b;
		
		a = $(".logo_rodape img").height() / 2.8 + 'px';
		$(".redes_sociais img").css({
			"height": a,
			"margin-left" : a
		});
		
		a = $(".logo_rodape img").height() / 2.8;
		
		b = $(".logo_rodape img").height() - a;
		
		b = b / 2;
		
		b = b + 'px';
		
		
		$(".redes_sociais img").css("margin-top", b);
		
		
		
		$("header .header_btn_whatszappp img, header .header_btn_localizacao img").css({
			"height" : $("header .header_logotipo img").height() + "px"
		});
		
		
	}