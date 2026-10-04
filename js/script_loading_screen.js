/**
 * =========================================================
 * TELA DE CARREGAMENTO INICIAL - PRIMORDE
 * =========================================================
 *
 * O HTML já contém a tela de loading.
 *
 * Este JavaScript NÃO cria a tela.
 * Ele apenas controla quando ela desaparece.
 *
 * Comportamento:
 *
 * 1. O loading aparece imediatamente.
 * 2. O restante do site permanece invisível.
 * 3. CSS, imagens, scripts e demais recursos continuam
 *    carregando normalmente por trás.
 * 4. O site só é revelado depois do evento "load".
 * 5. As fontes também são aguardadas quando disponíveis.
 * 6. O loading permanece por no mínimo 2.5 segundos.
 * 7. Depois desaparece com fade-out.
 * =========================================================
 */

(function () {

    'use strict';


    /* =====================================================
       CONFIGURAÇÕES
       ===================================================== */

    var tempoMinimo = 2500;


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    var loadingScreen =
        document.getElementById(
            'primorde-loading-screen'
        );


    /*
     * Se a tela de loading não existir,
     * não impede o site de funcionar.
     */
    if (!loadingScreen) {

        if (document.body) {
            document.body.classList.add(
                'primorde-site-ready'
            );
        }

        return;
    }


    /* =====================================================
       INÍCIO DA CONTAGEM
       ===================================================== */

    var inicioCarregamento =
        performance.now();


    /* =====================================================
       AGUARDA O CARREGAMENTO DA PÁGINA
       ===================================================== */

    function aguardarPagina() {

        if (document.readyState === 'complete') {

            return Promise.resolve();
        }


        return new Promise(function (resolve) {

            window.addEventListener(
                'load',
                resolve,
                {
                    once: true
                }
            );

        });
    }


    /* =====================================================
       AGUARDA AS FONTES
       ===================================================== */

    function aguardarFontes() {

        /*
         * Alguns navegadores não disponibilizam
         * document.fonts.
         */
        if (
            document.fonts &&
            document.fonts.ready
        ) {

            return document.fonts.ready;
        }


        return Promise.resolve();
    }


    /* =====================================================
       MOSTRA O SITE
       ===================================================== */

    function revelarSite() {

        /*
         * Calcula quanto tempo já passou
         * desde o início do loading.
         */
        var tempoDecorrido =
            performance.now() -
            inicioCarregamento;


        /*
         * Garante o tempo mínimo.
         */
        var tempoRestante =
            Math.max(
                0,
                tempoMinimo -
                tempoDecorrido
            );


        setTimeout(function () {

            /*
             * Revela todo o site.
             */
            if (document.body) {

                document.body.classList.add(
                    'primorde-site-ready'
                );
            }


            /*
             * Aguarda a próxima pintura do navegador
             * antes de iniciar o fade.
             */
            requestAnimationFrame(function () {

                loadingScreen.classList.add(
                    'primorde-loading-hide'
                );

            });


            /*
             * Remove completamente a tela
             * depois do fade-out.
             */
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
       ESPERA TUDO FICAR PRONTO
       ===================================================== */

    Promise.all([
        aguardarPagina(),
        aguardarFontes()
    ]).then(function () {

        revelarSite();

    });

})();
