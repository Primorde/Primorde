/**
 * =========================================================
 * TELA DE CARREGAMENTO INICIAL - PRIMORDE
 * =========================================================
 *
 * Funciona:
 * - Online
 * - Offline
 * - Com ou sem jQuery carregado
 *
 * A tela permanece por até 5 segundos e aguarda
 * o carregamento da página antes de revelar o site.
 * =========================================================
 */

(function () {

    'use strict';


    /* =====================================================
       CONFIGURAÇÕES
    ===================================================== */


    var tempoMinimo = 2500;


    /*
     * Caminho da GIF.
     *
     * IMPORTANTE:
     * Confira se este caminho corresponde ao local
     * onde você colocou sua GIF.
     */
    var caminhoGif = 'img/loading.gif';


    /*
     * Momento em que o carregamento começou.
     */
    var inicioCarregamento = Date.now();


    /* =====================================================
       CRIA O CSS DA TELA
    ===================================================== */

    var style = document.createElement('style');

    style.innerHTML = `
        #primorde-loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            z-index: 999999999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.6s ease, visibility 0.6s ease;
        }

        #primorde-loading-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #primorde-loading-gif {
            display: block;
            width: auto;
            height: auto;
            max-width: 70vw;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 1000vw;
        }

        #primorde-loading-screen.primorde-loading-hide {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
    `;

    document.head.appendChild(style);


    /* =====================================================
       CRIA A TELA DE LOADING
    ===================================================== */

    var loadingScreen = document.createElement('div');

    loadingScreen.id = 'primorde-loading-screen';


    var loadingContent = document.createElement('div');

    loadingContent.id = 'primorde-loading-content';


    var loadingGif = document.createElement('img');

    loadingGif.id = 'primorde-loading-gif';

    loadingGif.src = caminhoGif;

    loadingGif.alt = 'Carregando...';


    loadingContent.appendChild(loadingGif);

    loadingScreen.appendChild(loadingContent);


    /* =====================================================
       COLOCA O LOADING NO INÍCIO DO BODY
    ===================================================== */

    function iniciarLoading() {

        if (!document.body) {
            return;
        }

        /*
         * Coloca a tela de loading no início.
         */
        document.body.insertBefore(
            loadingScreen,
            document.body.firstChild
        );


        /* =================================================
           ESCONDE O RESTANTE DO SITE
        ================================================= */

        var elementos = document.body.children;

        for (var i = 0; i < elementos.length; i++) {

            if (elementos[i] !== loadingScreen) {

                elementos[i].style.visibility = 'hidden';

            }

        }

    }


    /* =====================================================
       INICIA ASSIM QUE O HTML ESTIVER DISPONÍVEL
    ===================================================== */

    if (document.readyState === 'loading') {

        document.addEventListener(
            'DOMContentLoaded',
            iniciarLoading
        );

    } else {

        iniciarLoading();

    }


    /* =====================================================
       FINALIZA O LOADING
    ===================================================== */

    function finalizarLoading() {

        /*
         * Calcula quanto tempo já passou.
         */
        var tempoDecorrido = Date.now() - inicioCarregamento;


        /*
         * Calcula quanto falta para completar
         * os 5 segundos.
         */
        var tempoRestante =
            tempoMinimo - tempoDecorrido;


        /*
         * Se já passaram 5 segundos,
         * não espera mais.
         */
        if (tempoRestante < 0) {

            tempoRestante = 0;

        }


        /* =================================================
           AGUARDA O TEMPO RESTANTE
        ================================================= */

        setTimeout(function () {


            /* =============================================
               MOSTRA O SITE
            ============================================= */

            if (document.body) {

                var elementos =
                    document.body.children;

                for (var i = 0; i < elementos.length; i++) {

                    if (elementos[i] !== loadingScreen) {

                        elementos[i].style.visibility =
                            'visible';

                    }

                }

            }


            /* =============================================
               FADE OUT DO LOADING
            ============================================= */

            loadingScreen.classList.add(
                'primorde-loading-hide'
            );


            /* =============================================
               REMOVE O LOADING COMPLETAMENTE
               DEPOIS DA ANIMAÇÃO
            ============================================= */

            setTimeout(function () {

                if (
                    loadingScreen &&
                    loadingScreen.parentNode
                ) {

                    loadingScreen.parentNode.removeChild(
                        loadingScreen
                    );

                }

            }, 700);


        }, tempoRestante);

    }


    /* =====================================================
       QUANDO A PÁGINA TERMINAR DE CARREGAR
    ===================================================== */

    if (document.readyState === 'complete') {

        finalizarLoading();

    } else {

        window.addEventListener(
            'load',
            finalizarLoading
        );

    }


})();
