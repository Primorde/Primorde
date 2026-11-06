
/* ==========================================================
   GALERIA PRIMORDE
   Carrega as imagens cadastradas em galeria.json.
   ========================================================== */
(() => {
  'use strict';

  const ARQUIVO_JSON = './galeria.json';
  const LOTE = 6;

  const GRUPOS = {
    'construcao-reforma': {
      titulo: 'Construção e Reforma',
      categorias: {
        alvenaria: { nome: 'Alvenaria' },
        cobertura: { nome: 'Cobertura' },
        eletrica: { nome: 'Elétrica' },
        hidraulica: { nome: 'Hidráulica' },
        acabamento: { nome: 'Acabamento' }
      }
    },
    'instalacao-manutencao': {
      titulo: 'Instalação e Manutenção de Equipamentos',
      categorias: {
        'motores-portao-automatico': { nome: 'Motores para Portão Automático' },
        'porteiros-eletronicos': { nome: 'Porteiros Eletrônicos' },
        'fechaduras-eletronicas': { nome: 'Fechaduras Eletrônicas' },
        'padroes-de-entrada': { nome: 'Padrões de Entrada' },
        'coifas-depuradores': { nome: 'Coifas e Depuradores' },
        'cooktops-fogoes-inducao': { nome: 'Cooktops e Fogões de Indução' },
        'caixas-dagua': { nome: 'Caixas d’Água' },
        'chuveiros-eletricos': { nome: 'Chuveiros Elétricos' },
        pressurizador: { nome: 'Pressurizadores' }
      }
    }
  };

  let catalogo = null;

  function normalizarLista(valor) {
    if (!Array.isArray(valor)) return [];
    return valor.filter(item =>
      typeof item === 'string' && item.trim() !== ''
    );
  }

  async function carregarCatalogo() {
    const resposta = await fetch(ARQUIVO_JSON, { cache: 'no-cache' });

    if (!resposta.ok) {
      throw new Error(`Não foi possível carregar galeria.json (HTTP ${resposta.status}).`);
    }

    const dados = await resposta.json();

    if (!dados || typeof dados !== 'object' || Array.isArray(dados)) {
      throw new Error('O conteúdo de galeria.json não possui uma estrutura válida.');
    }

    return dados;
  }

  function nomeCategoria(grupoId, categoriaId) {
    return GRUPOS[grupoId]?.categorias[categoriaId]?.nome || categoriaId;
  }

  function descricaoArquivo(caminho) {
    const nome = caminho.split('/').pop().split('\\').pop();
    const semExtensao = nome.replace(/\.(avif|webp|jpe?g|png|gif)$/i, '');

    const descricao = semExtensao
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\b(img|dsc|dscn|photo|foto)\s*\d*\b/gi, '')
      .trim();

    return descricao && !/^\d+$/.test(descricao) ? descricao : '';
  }

  function obterFotos(grupoId, categoriaId) {
    const categoria = nomeCategoria(grupoId, categoriaId);

    return normalizarLista(catalogo?.[grupoId]?.[categoriaId]).map(caminho => {
      const detalhe = descricaoArquivo(caminho);

      const alt = detalhe
        ? `${categoria}: ${detalhe}. Serviço realizado pela Primorde em Teixeira de Freitas e região.`
        : `Registro fotográfico de ${categoria}, serviço realizado pela Primorde em Teixeira de Freitas e região.`;

      return { src: caminho, alt };
    });
  }

  function obterFotosDoGrupo(grupoId) {
    const categorias = Object.keys(GRUPOS[grupoId].categorias);
    const listas = categorias.map(categoriaId =>
      obterFotos(grupoId, categoriaId)
    );

    const resultado = [];
    const maiorLista = Math.max(0, ...listas.map(lista => lista.length));

    for (let indice = 0; indice < maiorLista; indice++) {
      listas.forEach(lista => {
        if (lista[indice]) resultado.push(lista[indice]);
      });
    }

    return resultado;
  }

  function criarFoto(foto) {
    const link = document.createElement('a');
    link.className = 'g-photo-link';
    link.href = foto.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute(
      'aria-label',
      `${foto.alt}. Abrir imagem em tamanho original`
    );

    const img = document.createElement('img');
    img.className = 'g-photo';
    img.src = foto.src;
    img.alt = foto.alt;
    img.width = 900;
    img.height = 1200;
    img.loading = 'lazy';
    img.decoding = 'async';

    img.addEventListener('error', () => {
      link.remove();
      link.dispatchEvent(
        new CustomEvent('galeria:imagem-invalida', { bubbles: true })
      );
    }, { once: true });

    link.appendChild(img);
    return link;
  }

  function criarCarregador(container, fotos, botao, mensagemVazia = null) {
    let indice = 0;

    function carregarLote() {
      const fragmento = document.createDocumentFragment();
      const fim = Math.min(indice + LOTE, fotos.length);

      for (; indice < fim; indice++) {
        fragmento.appendChild(criarFoto(fotos[indice]));
      }

      container.appendChild(fragmento);

      if (botao) botao.hidden = indice >= fotos.length;

      if (mensagemVazia && fotos.length === 0) {
        mensagemVazia.hidden = false;
      }
    }

    container.addEventListener('galeria:imagem-invalida', () => {
      window.setTimeout(() => {
        if (
          mensagemVazia &&
          indice >= fotos.length &&
          !container.querySelector('.g-photo-link')
        ) {
          mensagemVazia.hidden = false;
        }
      }, 0);
    });

    if (botao) {
      botao.addEventListener('click', carregarLote);
    }

    carregarLote();
  }

  function iniciarAcordeoes() {
    document.querySelectorAll('.g-accordion').forEach(botao => {
      if (botao.dataset.galeriaAtivo === 'true') return;
      botao.dataset.galeriaAtivo = 'true';

      botao.addEventListener('click', () => {
        const aberto = botao.getAttribute('aria-expanded') === 'true';
        const painelId = botao.getAttribute('aria-controls');
        const painel = document.getElementById(painelId);

        if (!painel) return;

        botao.setAttribute('aria-expanded', String(!aberto));
        painel.hidden = aberto;

        const icone = botao.querySelector('.g-chevron');
        if (icone) icone.textContent = aberto ? '＋' : '−';
      });
    });
  }

  function iniciarHome() {
    document.querySelectorAll('[data-preview]').forEach(container => {
      const grupoId = container.dataset.preview;
      if (!GRUPOS[grupoId]) return;

      const botao = document.querySelector(
        `[data-load-more="${grupoId}"]`
      );

      const fotos = obterFotosDoGrupo(grupoId);
      criarCarregador(container, fotos, botao);

      if (fotos.length === 0) {
        const aviso = document.createElement('p');
        aviso.className = 'g-empty-message';
        aviso.textContent = 'As fotos desta seção serão adicionadas em breve.';
        container.insertAdjacentElement('afterend', aviso);
      }
    });

    iniciarAcordeoes();
  }

  function iniciarPaginaCategoria() {
    const parametros = new URLSearchParams(window.location.search);
    const grupoId = parametros.get('grupo');
    const categoriaId = parametros.get('categoria');

    const grupo = GRUPOS[grupoId];
    const categoria = grupo?.categorias[categoriaId];

    const titulo = document.querySelector('[data-category-title]');
    const descricao = document.querySelector('[data-category-description]');
    const breadcrumb = document.querySelector('[data-breadcrumb-category]');
    const container = document.querySelector('[data-category-gallery]');
    const botao = document.querySelector('[data-category-load-more]');
    const vazio = document.querySelector('[data-empty-message]');

    if (!titulo || !descricao || !breadcrumb || !container || !botao || !vazio) {
      return;
    }

    if (!grupo || !categoria) {
      document.title = 'Categoria não encontrada | Galeria Primorde';
      titulo.textContent = 'Categoria não encontrada';
      descricao.textContent =
        'Não foi possível localizar esta categoria. Volte à galeria principal e escolha uma categoria disponível.';
      breadcrumb.textContent = 'Categoria não encontrada';
      botao.hidden = true;
      vazio.hidden = false;
      return;
    }

    document.title = `${categoria.nome} | Galeria de Fotos | Primorde`;
    titulo.textContent = categoria.nome;
    breadcrumb.textContent = categoria.nome;

    descricao.textContent =
      `Fotos de serviços de ${categoria.nome.toLowerCase()} realizados pela Primorde em Teixeira de Freitas e região.`;

    const fotos = obterFotos(grupoId, categoriaId);
    criarCarregador(container, fotos, botao, vazio);
  }

  async function iniciarGaleria() {
    try {
      catalogo = await carregarCatalogo();

      if (document.querySelector('[data-galeria-home]')) {
        iniciarHome();
      }

      if (document.querySelector('[data-category-gallery]')) {
        iniciarPaginaCategoria();
      }
    } catch (erro) {
      console.error('[Galeria Primorde]', erro);

      document.querySelectorAll(
        '[data-preview], [data-category-gallery]'
      ).forEach(container => {
        const aviso = document.createElement('p');
        aviso.className = 'g-empty-message';
        aviso.textContent =
          'Não foi possível carregar as fotos agora. Verifique o arquivo galeria.json.';
        container.appendChild(aviso);
      });

      const botaoCategoria =
        document.querySelector('[data-category-load-more]');

      if (botaoCategoria) botaoCategoria.hidden = true;

      document.querySelectorAll('[data-load-more]').forEach(botao => {
        botao.hidden = true;
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarGaleria, { once: true });
  } else {
    iniciarGaleria();
  }
})();
