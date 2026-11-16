
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

  const CONTEUDO_CATEGORIAS = {
    "construcao-reforma|alvenaria": {
        "titulo": "Alvenaria",
        "description": "Fotos de serviços de alvenaria da Primorde em Teixeira de Freitas: fundações, pilares, vigas, paredes, muros, calçadas e outras etapas de construção.",
        "intro": "Esta seleção reúne registros de trabalhos de alvenaria, incluindo bases e fundações, pilares, colunas, vigas, vergas, paredes, muros, calçadas e atividades de demolição e preparação. As imagens mostram diferentes etapas de execução realizadas pela Primorde em Teixeira de Freitas e região."
    },
    "construcao-reforma|cobertura": {
        "titulo": "Cobertura",
        "description": "Veja fotos de construção e manutenção de telhados, calhas, rufos e pingadeiras realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Nesta categoria estão reunidos registros de serviços relacionados a coberturas, como construção e manutenção de telhados, instalação e manutenção de calhas, rufos e pingadeiras. Confira as imagens dos trabalhos realizados pela Primorde em Teixeira de Freitas e região."
    },
    "construcao-reforma|eletrica": {
        "titulo": "Elétrica",
        "description": "Fotos de instalações elétricas da Primorde: iluminação LED, arandelas, tomadas, interruptores e quadros de disjuntores em Teixeira de Freitas.",
        "intro": "A galeria apresenta registros de serviços elétricos, incluindo instalação de iluminação com LED, arandelas, balizadores e espetos para jardim, além de tomadas, interruptores, quadros de disjuntores e itens de proteção. São trabalhos realizados pela Primorde em Teixeira de Freitas e região."
    },
    "construcao-reforma|hidraulica": {
        "titulo": "Hidráulica",
        "description": "Confira fotos de instalações e manutenções hidráulicas: redes de esgoto, torneiras, filtros, caixas de inspeção e vasos sanitários.",
        "intro": "Nesta seleção você encontra registros de serviços hidráulicos, como instalação de tubulações e redes de esgoto, caixas de inspeção e de gordura, filtros para caixa d’água, torneiras e vasos sanitários. Veja exemplos de trabalhos realizados pela Primorde em Teixeira de Freitas e região."
    },
    "construcao-reforma|acabamento": {
        "titulo": "Acabamento",
        "description": "Fotos de serviços de acabamento da Primorde em Teixeira de Freitas, com pintura, envernização, revestimentos e instalação de elementos em inox.",
        "intro": "Esta categoria reúne imagens de etapas de acabamento, incluindo pintura residencial, envernização de portas e telhados, aplicação de revestimentos e instalação de elementos em inox. Confira os registros dos serviços realizados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|motores-portao-automatico": {
        "titulo": "Motores para Portão Automático",
        "description": "Veja fotos de instalação e manutenção de motores para portões automáticos realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Aqui estão reunidos registros de instalação e manutenção de motores para portões automáticos, incluindo modelos basculantes e equipamentos identificados nas imagens. Confira exemplos dos serviços realizados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|porteiros-eletronicos": {
        "titulo": "Porteiros Eletrônicos",
        "description": "Fotos de instalação de porteiros eletrônicos, sistemas coletivos, monofones e vídeo porteiros pela Primorde em Teixeira de Freitas.",
        "intro": "Esta galeria mostra registros de serviços com porteiros eletrônicos, incluindo equipamentos coletivos, modelos com monofone e vídeo porteiros com tela. Veja imagens de instalações realizadas pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|fechaduras-eletronicas": {
        "titulo": "Fechaduras Eletrônicas",
        "description": "Confira fotos de instalação de fechaduras eletrônicas e travas elétricas realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Nesta categoria você encontra registros de instalação de fechaduras eletrônicas e travas elétricas. As imagens documentam exemplos de equipamentos e materiais utilizados nos serviços realizados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|padroes-de-entrada": {
        "titulo": "Padrões de Entrada",
        "description": "Fotos de instalação e manutenção de padrões de entrada monofásicos e trifásicos realizadas pela Primorde em Teixeira de Freitas.",
        "intro": "A seleção reúne registros de montagem, instalação e manutenção de padrões de entrada de energia, incluindo configurações monofásicas e trifásicas. Confira exemplos dos serviços realizados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|coifas-depuradores": {
        "titulo": "Coifas e Depuradores",
        "description": "Veja fotos de instalação de coifas, exaustores e depuradores, incluindo modelos de parede e ilha, pela Primorde em Teixeira de Freitas.",
        "intro": "Nesta galeria estão reunidos registros de instalação de coifas e exaustores, com exemplos de modelos de parede e de ilha. Confira imagens dos equipamentos e dos serviços realizados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|cooktops-fogoes-inducao": {
        "titulo": "Cooktops e Fogões de Indução",
        "description": "Confira fotos de instalação de cooktops e fogões de indução realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Esta categoria apresenta registros fotográficos de instalações de cooktops e fogões de indução. Veja os exemplos de serviços documentados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|caixas-dagua": {
        "titulo": "Caixas d’Água",
        "description": "Fotos de instalação e manutenção de caixas d’água realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Aqui você encontra registros de serviços de instalação e manutenção de caixas d’água. As imagens mostram exemplos dos trabalhos realizados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|chuveiros-eletricos": {
        "titulo": "Chuveiros Elétricos",
        "description": "Veja fotos de instalação e manutenção de chuveiros elétricos realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Esta galeria reúne registros de instalação e manutenção de chuveiros elétricos, com imagens de diferentes serviços documentados pela Primorde em Teixeira de Freitas e região."
    },
    "instalacao-manutencao|pressurizador": {
        "titulo": "Pressurizadores",
        "description": "Confira fotos de instalação e manutenção de pressurizadores de água realizadas pela Primorde em Teixeira de Freitas e região.",
        "intro": "Nesta categoria estão reunidos registros de instalação e manutenção de pressurizadores, incluindo imagens de equipamentos e materiais utilizados nos serviços. Confira os trabalhos realizados pela Primorde em Teixeira de Freitas e região."
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


  function definirMeta(seletor, atributo, valor) {
    let elemento = document.querySelector(seletor);
    if (!elemento) {
      elemento = document.createElement('meta');
      const correspondencia = seletor.match(/\[(name|property)="([^"]+)"\]/);
      if (!correspondencia) return;
      elemento.setAttribute(correspondencia[1], correspondencia[2]);
      document.head.appendChild(elemento);
    }
    elemento.setAttribute(atributo, valor);
  }

  function definirCanonical(url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  function atualizarSeoCategoria(grupoId, categoriaId, categoria, grupo, conteudo, fotos) {
    const url = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('grupo', grupoId);
    url.searchParams.set('categoria', categoriaId);
    url.hash = '';
    const urlCanonica = url.href;

    const tituloSeo = `${categoria.nome} | Fotos de Serviços | Primorde`;
    const descricaoSeo = conteudo?.description ||
      `Confira fotos de serviços de ${categoria.nome.toLowerCase()} realizados pela Primorde em Teixeira de Freitas e região.`;

    document.title = tituloSeo;
    definirMeta('meta[name="description"]', 'content', descricaoSeo);
    definirCanonical(urlCanonica);

    definirMeta('meta[property="og:type"]', 'content', 'website');
    definirMeta('meta[property="og:locale"]', 'content', 'pt_BR');
    definirMeta('meta[property="og:site_name"]', 'content', 'Primorde');
    definirMeta('meta[property="og:title"]', 'content', tituloSeo);
    definirMeta('meta[property="og:description"]', 'content', descricaoSeo);
    definirMeta('meta[property="og:url"]', 'content', urlCanonica);
    definirMeta('meta[property="og:image"]', 'content', 'https://primorde.com.br/logotipo.webp');

    definirMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    definirMeta('meta[name="twitter:title"]', 'content', tituloSeo);
    definirMeta('meta[name="twitter:description"]', 'content', descricaoSeo);
    definirMeta('meta[name="twitter:image"]', 'content', 'https://primorde.com.br/logotipo.webp');

    definirMeta('meta[name="robots"]', 'content',
      fotos.length > 0 ? 'index,follow,max-image-preview:large' : 'noindex,follow');

    const paginaId = `${urlCanonica}#webpage`;
    const breadcrumbId = `${urlCanonica}#breadcrumb`;
    const dadosEstruturados = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': paginaId,
          url: urlCanonica,
          name: tituloSeo,
          description: descricaoSeo,
          inLanguage: 'pt-BR',
          isPartOf: { '@id': 'https://primorde.com.br/#website' },
          about: {
            '@type': 'Thing',
            name: `${categoria.nome} — ${grupo.titulo}`
          },
          publisher: { '@id': 'https://primorde.com.br/#empresa' },
          breadcrumb: { '@id': breadcrumbId },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: fotos.length,
            itemListElement: fotos.map((foto, indice) => ({
              '@type': 'ListItem',
              position: indice + 1,
              item: {
                '@type': 'ImageObject',
                contentUrl: new URL(foto.src, window.location.href).href,
                caption: foto.alt
              }
            }))
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: 'https://primorde.com.br/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Galeria de Fotos',
              item: 'https://primorde.com.br/galeria-servicos-equipamentos-primorde.html'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: grupo.titulo,
              item: 'https://primorde.com.br/galeria-categoria.html?grupo=' +
                encodeURIComponent(grupoId)
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: categoria.nome,
              item: urlCanonica
            }
          ]
        }
      ]
    };

    let scriptSchema = document.getElementById('dados-estruturados-categoria');
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.id = 'dados-estruturados-categoria';
      scriptSchema.type = 'application/ld+json';
      document.head.appendChild(scriptSchema);
    }
    scriptSchema.textContent = JSON.stringify(dadosEstruturados);
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
      definirMeta('meta[name="robots"]', 'content', 'noindex,follow');
      titulo.textContent = 'Categoria não encontrada';
      descricao.textContent =
        'Não foi possível localizar esta categoria. Volte à galeria principal e escolha uma categoria disponível.';
      breadcrumb.textContent = 'Categoria não encontrada';
      botao.hidden = true;
      vazio.hidden = false;
      return;
    }

    const conteudo = CONTEUDO_CATEGORIAS[`${grupoId}|${categoriaId}`];
    titulo.textContent = categoria.nome;
    breadcrumb.textContent = categoria.nome;

    const fotos = obterFotos(grupoId, categoriaId);
    descricao.textContent = conteudo?.intro ||
      `Confira registros fotográficos de ${categoria.nome.toLowerCase()} realizados pela Primorde em Teixeira de Freitas e região.`;

    const breadcrumbGrupo = document.querySelector('[data-breadcrumb-group]');
    if (breadcrumbGrupo) {
      breadcrumbGrupo.textContent = grupo.titulo;
      breadcrumbGrupo.hidden = false;
    }

    atualizarSeoCategoria(grupoId, categoriaId, categoria, grupo, conteudo, fotos);
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
