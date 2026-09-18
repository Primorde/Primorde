/**
 * Lazy Loader - Otimização de Carregamento Gradual de Imagens
 * Autor: Primorde Web Dev
 */

  //alert("carregando 1");


(function ($) {
  'use strict';

  //alert("carregando 2");



  // Flag para controle do carregamento global
  window.isSiteFullyLoaded = false;

  // 1. Prepara as imagens antes da renderização visual
  function prepareImages() {
    $('img').each(function () {
      var $img = $(this);

      // Não altera imagens críticas de carregamento imediato no topo (Eager/High priority)
      if ($img.attr('loading') === 'eager' || $img.attr('fetchpriority') === 'high') {
        return;
      }

      // Salva o caminho real da imagem no atributo data-src
      if (!$img.attr('data-src')) {
        var realSrc = $img.attr('src');
        $img.attr('data-src', realSrc);

        // Define um SVG leve e transparente temporário para não quebrar o layout
        var placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%23f0f0f0"/></svg>';
        $img.attr('src', placeholder);
        $img.addClass('lazy-pending');
      }
    });
  }

  // 2. Função para carregar a imagem real
  function loadImage($img) {
    var realSrc = $img.attr('data-src');
    if (!realSrc) return;

    // Prepara carregamento em background para evitar flickering
    var tempImg = new Image();
    tempImg.src = realSrc;
    tempImg.onload = function () {
      $img.attr('src', realSrc);
      $img.removeClass('lazy-pending').addClass('lazy-loaded');
      $img.removeAttr('data-src');
    };
  }

  // 3. Verifica quais imagens estão na viewport do usuário
  function checkAndLoadVisible() {
    // Se o site já foi completamente carregado, carrega todas sem restrição
    if (window.isSiteFullyLoaded) {
      $('img.lazy-pending').each(function () {
        loadImage($(this));
      });
      return;
    }

    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var threshold = 300; // Carrega 300px antes da imagem aparecer na tela (anteposição)

    $('img.lazy-pending').each(function () {
      var $img = $(this);
      var imgTop = $img.offset().top;
      var imgBottom = imgTop + $img.outerHeight();

      // Se a imagem estiver na tela (ou quase entrando)
      if (imgBottom >= windowTop - threshold && imgTop <= windowBottom + threshold) {
        loadImage($img);
      }
    });

    // Se todas as imagens pendentes já foram carregadas, encerra a verificação gradual
    if ($('img.lazy-pending').length === 0) {
      window.isSiteFullyLoaded = true;
      $(window).off('scroll resize orientationchange', throttleCheck);
    }
  }

  // Controle de frequência (Throttle) para alta performance no scroll
  var scrollTimeout;
  function throttleCheck() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        checkAndLoadVisible();
        scrollTimeout = null;
      }, 50);
    }
  }

  // Executa antes dos outros scripts
  $(document).ready(function () {
    prepareImages();
    checkAndLoadVisible();

    // Eventos de rolagem e redimensionamento da tela
    $(window).on('scroll resize orientationchange', throttleCheck);

    // Quando o documento/recursos forem totalmente baixados em conexão rápida
    $(window).on('load', function () {
      setTimeout(function () {
        window.isSiteFullyLoaded = true;
        checkAndLoadVisible();
      }, 1000); // Aguarda 1s de folga para carregar o restante suavemente
    });
  });

})(jQuery);;