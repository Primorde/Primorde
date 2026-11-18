/* PRIMORDE — GALERIA UNIFICADA
   Catálogo incorporado ao JS: não depende de fetch/galeria.json.
*/
(() => {
  'use strict';
  const LOTE = 5;
  const CATALOGO = {"construcao-reforma":{"alvenaria":["img/galeria/construcao-reforma/alvenaria/alvenaria-bitorneira.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-compactador-solo.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-bases-fundacoes-pilares-colunas-vigas-vergas-muros-paredes.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-bases-fundacoes-pilares-colunas-vigas-vergas.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-bases-fundacoes.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-calcada.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-colunas-pilares-vigas-vergas.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-colunas-pilares.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-colunas-vigas.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-paredes-muros.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-construcao-sapatas.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-demolicao.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-piso-lona-plastico-malha-pop.webp","img/galeria/construcao-reforma/alvenaria/alvenaria-remocao-residuos.webp"],"cobertura":["img/galeria/construcao-reforma/cobertura/cobertura-construcao-telhado-teixeira-de-freitas.webp","img/galeria/construcao-reforma/cobertura/cobertura-construcao-telhado.webp","img/galeria/construcao-reforma/cobertura/cobertura-inseticida-manutencao-limpeza-telhado.webp","img/galeria/construcao-reforma/cobertura/cobertura-inseticida-manutencao-telhado.webp","img/galeria/construcao-reforma/cobertura/cobertura-manutencao-telhado.webp","img/galeria/construcao-reforma/cobertura/cobertura-rufos-pingadeiras.webp","img/galeria/construcao-reforma/cobertura/cobertura-torca-calha-manutecao-telhado.webp"],"eletrica":["img/galeria/construcao-reforma/eletrica/eletrica-iluminacao-fita-de-led-sobrepor-dom-decor.webp","img/galeria/construcao-reforma/eletrica/eletrica-iluminacao-fita-de-led-sobrepor.webp","img/galeria/construcao-reforma/eletrica/eletrica-iluminacao-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-arandela-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-arandela-teixeira-defreitas-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-arandela-teixeira-defreitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-arandela.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-balizadoes-de-led-jardim-teixeira-de-freitas-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-balizadoes-de-led-jardim-teixeira-de-freitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-canhao-de-led-teixeira-de-freitas-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-canhao-de-led-teixeira-de-freitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-canhao-de-led-teixeira-defreitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-canhao-de-led.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-espeto-de-led-jardim-teixeira-de-freitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-espeto-de-led-teixeira-de-freitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-interruptores.webp","img/galeria/construcao-reforma/eletrica/eletrica-instalacao-tomadas.webp","img/galeria/construcao-reforma/eletrica/eletrica-montagem-quadro-disjuntores.webp","img/galeria/construcao-reforma/eletrica/eletrica-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-protecao-teixeira-de-freitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-quadro-disjuntores-monofasico-teixeira-de-freitas.webp","img/galeria/construcao-reforma/eletrica/eletrica-quadro-disjuntores-monofasico.webp","img/galeria/construcao-reforma/eletrica/eletrica-quadro-disjuntores-trifasico-primorde.webp","img/galeria/construcao-reforma/eletrica/eletrica-quadro-disjuntores-trifasico.webp","img/galeria/construcao-reforma/eletrica/eletrica-quadro-disjuntores.webp","img/galeria/construcao-reforma/eletrica/eletrica-reforma-quadro-disjuntores.webp"],"hidraulica":["img/galeria/construcao-reforma/hidraulica/hidraulica-construcao-rede-esgoto.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-instalacao-caixa-de-inspecao-caixa-de-gordura.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-instalacao-filtro-para-caixa-dagua-primorde.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-instalacao-filtro-para-caixa-dagua.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-instalacao-rede-esgoto.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-instalacao-torneira-monocomando.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-instalacao-torneira.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-manutencao-caixa-de-gordura-caixa-de-inspecao.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-manutencao-caixa-de-inspecao-caixa-de-gordura.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-sistema-de-filtracao.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-tubulacao-esgoto.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-vaso-aclopado-monobloco.webp","img/galeria/construcao-reforma/hidraulica/hidraulica-vaso-sanitario.webp"],"acabamento":["img/galeria/construcao-reforma/acabamento/acabamento-envernizacao-porta-madeira.webp","img/galeria/construcao-reforma/acabamento/acabamento-envernizacao-telhado-primorde.webp","img/galeria/construcao-reforma/acabamento/acabamento-envernizacao-telhado.webp","img/galeria/construcao-reforma/acabamento/acabamento-instalacao-inox-primorde.webp","img/galeria/construcao-reforma/acabamento/acabamento-instalacao-inox.webp","img/galeria/construcao-reforma/acabamento/acabamento-pintura-recidencial-teixeira-de-freitas-primorde.webp","img/galeria/construcao-reforma/acabamento/acabamento-pintura-recidencial.webp","img/galeria/construcao-reforma/acabamento/acabamento-pintura.webp","img/galeria/construcao-reforma/acabamento/acabamento-revestimento-piso-reforma.webp","img/galeria/construcao-reforma/acabamento/acabamento-textura-arenato-arenito-pedras-naturais.webp"]},"instalacao-manutencao":{"motores-portao-automatico":["img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-basculante-instalacao-materiais-inclusos.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-garantia.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-instalacao-materiais-inclusos-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-instalacao-materiais-inclusos.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-manutencao.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-ppa.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-rossi.webp","img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-teixeira-de-freitas.webp"],"porteiros-eletronicos":["img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-coletivo-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-monofone-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-primorde.webp","img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-teixeira-de-freitas-primorde.webp","img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-tela-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-video-porteiro-teixeira-de-freitas.webp"],"fechaduras-eletronicas":["img/galeria/instalacao-manutencao/fechaduras-eletronicas/fechaduras-eletronicas-instalacao-e-materiais-inclusos-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/fechaduras-eletronicas/fechaduras-eletronicas-instalacao-e-materiais-inclusos.webp","img/galeria/instalacao-manutencao/fechaduras-eletronicas/fechaduras-eletronicas-instalacao.webp","img/galeria/instalacao-manutencao/fechaduras-eletronicas/fechaduras-eletronicas-trava-eletrica-primorde.webp","img/galeria/instalacao-manutencao/fechaduras-eletronicas/fechaduras-eletronicas-trava-eletrica.webp"],"padroes-de-entrada":["img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-instalacao-coelba-neoenergia.webp","img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-instalacao-monofasico.webp","img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-instalacao-montagem.webp","img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-instalacao-primorde-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-instalacao.webp","img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-manutencao-trifasico-teixeira-de-freitas-primorde.webp","img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-manutencao-trifasico.webp"],"coifas-depuradores":["img/galeria/instalacao-manutencao/coifas-depuradores/coifa-exaustor-instalacao-chanine-inox-materiais-inclusos.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-exaustor-instalacao-chanine-inox.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-exaustor.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-exaustores-churrasqueiras.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-ilha-instalacao.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-ilha-primorde.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-ilha-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-ilha.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-instalacao-materiais-inclusos.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-instalacao-primorde.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-parede-instalacao.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-parede.webp","img/galeria/instalacao-manutencao/coifas-depuradores/coifa-primorde.webp"],"cooktops-fogoes-inducao":["img/galeria/instalacao-manutencao/cooktops-fogoes-inducao/cooktops-fogoes-inducao-instalacao-primorde.webp","img/galeria/instalacao-manutencao/cooktops-fogoes-inducao/cooktops-fogoes-inducao-instalacao-teixeira-de-freitas-primorde.webp","img/galeria/instalacao-manutencao/cooktops-fogoes-inducao/cooktops-fogoes-inducao-instalacao.webp"],"caixas-dagua":["img/galeria/instalacao-manutencao/caixas-dagua/caixas-dagua-instalacao-primorde-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/caixas-dagua/caixas-dagua-instalacao-primorde.webp","img/galeria/instalacao-manutencao/caixas-dagua/caixas-dagua-manutencao-primorde.webp"],"chuveiros-eletricos":["img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-instalacao.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-manutencao.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-primorde.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-teixeira-de-freitas-ba-primorde.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-teixeira-de-freitas-primorde-instalacao.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-teixeira-de-freitas-primorde.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-teixeira-de-freitas-regiao-primorde.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos.webp"],"pressurizador":["img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-manutencao-teixeira-de-freitas-ba.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-manutencao-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-materiais-inclusos-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-pl-20.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-teixeira-de-freitas-regiao.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-teixeira-de-freitas.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao.webp","img/galeria/instalacao-manutencao/pressurizador/pressurizador.webp"]}};
  const scriptEl = document.currentScript;
  const SITE_ROOT = scriptEl && scriptEl.src
    ? new URL('../', scriptEl.src)
    : new URL('./', window.location.href);

  const GRUPOS = {
    'construcao-reforma': {
      titulo: 'Construção e Reformas',
      categorias: {
        alvenaria: 'Alvenaria', cobertura: 'Cobertura', eletrica: 'Elétrica',
        hidraulica: 'Hidráulica', acabamento: 'Acabamento'
      }
    },
    'instalacao-manutencao': {
      titulo: 'Instalação e Manutenção',
      categorias: {
        'motores-portao-automatico': 'Motores para Portão Automático',
        'porteiros-eletronicos': 'Porteiros Eletrônicos',
        'fechaduras-eletronicas': 'Fechaduras Eletrônicas',
        'padroes-de-entrada': 'Padrões de Entrada',
        'coifas-depuradores': 'Coifas e Depuradores',
        'cooktops-fogoes-inducao': 'Cooktops e Fogões de Indução',
        'caixas-dagua': 'Caixas d’Água',
        'chuveiros-eletricos': 'Chuveiros Elétricos',
        pressurizador: 'Pressurizadores'
      }
    }
  };

  const embaralhar = lista => {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  };

  function montarImagem(caminho, categoria) {
    const src = new URL(caminho, SITE_ROOT).href;
    const link = document.createElement('a');
    link.className = 'g-photo-link';
    link.href = src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const img = document.createElement('img');
    img.className = 'g-photo';
    img.src = src;
    img.alt = categoria + ' — serviço realizado pela Primorde';
    img.loading = 'eager';
    img.decoding = 'async';
    img.onerror = () => {
      console.error('[Primorde] Imagem não encontrada:', src);
      link.classList.add('g-photo-error');
      img.alt = 'Imagem indisponível: ' + categoria;
    };
    link.appendChild(img);
    return link;
  }

  function iniciarGrupo(grupoId) {
    const cfg = GRUPOS[grupoId];
    const catalogo = CATALOGO[grupoId] || {};
    const grade = document.querySelector(`[data-preview="${grupoId}"]`);
    const botao = document.querySelector(`[data-load-more="${grupoId}"]`);
    const lista = document.querySelector(`[data-category-list="${grupoId}"]`);
    const total = document.querySelector(`[data-total-remaining="${grupoId}"]`);
    if (!grade || !botao || !lista || !total) {
      console.error('[Primorde] Estrutura HTML incompleta para:', grupoId);
      return;
    }

    const categorias = Object.entries(cfg.categorias).map(([id,nome]) => ({
      id, nome, restantes: embaralhar(Array.isArray(catalogo[id]) ? catalogo[id].filter(Boolean) : [])
    }));

    function atualizar() {
      const qtd = categorias.reduce((s,c) => s + c.restantes.length, 0);
      total.textContent = `${qtd} ${qtd === 1 ? 'foto ainda disponível' : 'fotos ainda disponíveis'}`;
      lista.replaceChildren();
      categorias.forEach(cat => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'g-category-card';
        card.disabled = cat.restantes.length === 0;
        card.setAttribute('aria-label', `Carregar até 5 fotos de ${cat.nome}. ${cat.restantes.length} restantes.`);
        const h3 = document.createElement('h3');
        h3.className = 'g-category-heading';
        h3.textContent = cat.nome;
        const p = document.createElement('p');
        p.className = 'g-category-count';
        p.textContent = `${cat.restantes.length} ${cat.restantes.length === 1 ? 'foto restante' : 'fotos restantes'}`;
        card.append(h3,p);
        card.addEventListener('click', () => carregarCategoria(cat));
        lista.appendChild(card);
      });
      botao.hidden = qtd === 0;
      botao.disabled = qtd === 0;
    }

    function anexarFotos(itens) {
      embaralhar(itens).forEach(item => grade.appendChild(montarImagem(item.caminho,item.categoria.nome)));
      atualizar();
      if (!grade.children.length) {
        const aviso = document.createElement('p');
        aviso.className = 'g-empty-message';
        aviso.textContent = 'Nenhuma foto cadastrada nesta seção.';
        grade.appendChild(aviso);
      }
    }

    function carregarCategoria(cat) {
      const lote = [];
      for (let i = 0; i < LOTE && cat.restantes.length; i++) {
        lote.push({categoria:cat, caminho:cat.restantes.shift()});
      }
      anexarFotos(lote);
    }

    function carregarLote(inicial) {
      const lote = [];
      if (inicial) {
        embaralhar(categorias.filter(c => c.restantes.length)).slice(0,LOTE)
          .forEach(c => lote.push({categoria:c, caminho:c.restantes.shift()}));
      }
      while (lote.length < LOTE) {
        const disponiveis = categorias.filter(c => c.restantes.length);
        if (!disponiveis.length) break;
        const c = disponiveis[Math.floor(Math.random()*disponiveis.length)];
        lote.push({categoria:c, caminho:c.restantes.shift()});
      }
      anexarFotos(lote);
    }

    atualizar();
    carregarLote(true);
    botao.addEventListener('click', () => carregarLote(false));
  }

  function iniciar() {
    Object.keys(GRUPOS).forEach(id => {
      const lista = document.querySelector(`[data-category-list="${id}"]`);
      if (lista) {
        lista.replaceChildren();
        Object.values(GRUPOS[id].categorias).forEach(nome => {
          const card=document.createElement('button'); card.type='button'; card.className='g-category-card'; card.disabled=true;
          const h3=document.createElement('h3'); h3.className='g-category-heading'; h3.textContent=nome;
          const p=document.createElement('p'); p.className='g-category-count'; p.textContent='Preparando fotos…';
          card.append(h3,p); lista.appendChild(card);
        });
      }
    });
    Object.keys(GRUPOS).forEach(iniciarGrupo);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, {once:true});
  else iniciar();
})();
