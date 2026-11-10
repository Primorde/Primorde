(() => {
  "use strict";

  const WHATSAPP = "https://wa.me/5573999868244?text=";

  // Descrições institucionais e neutras com os caminhos das imagens para cada equipamento.
  const CATEGORIAS = {
    "motores-portao-automatico": {
      nome: "Motores para portões automáticos",
      resumo: "Soluções de automatização que contribuem para tornar a abertura e o fechamento de portões mais práticos no dia a dia.",
      oQueE: "Equipamentos eletromecânicos utilizados para movimentar portões de forma automatizada.",
      paraQueServe: "Permitem abrir e fechar portões por acionamento, reduzindo a necessidade de movimentação manual.",
      problemas: "Podem ajudar quando se busca mais praticidade no acesso de veículos, ou quando o portão exige esforço frequente para ser movimentado.",
      beneficios: "Podem ser aplicados em acessos residenciais e comerciais. A escolha da solução depende das características do portão, do peso, das dimensões e da frequência de uso.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre motores para portões automáticos.",
      imagem: "img/galeria/instalacao-manutencao/motores-portao-automatico/motores-portao-automatico-rossi.webp"
    },
    "porteiros-eletronicos": {
      nome: "Porteiros eletrônicos",
      resumo: "Sistemas que facilitam a comunicação entre a entrada do imóvel e os ambientes internos.",
      oQueE: "Equipamentos de comunicação utilizados para permitir a identificação e o contato com visitantes antes da liberação de acesso.",
      paraQueServe: "Permitem conversar com quem está na entrada do imóvel e, conforme o sistema, acionar a abertura de uma fechadura ou portão.",
      problemas: "Podem ajudar a reduzir a necessidade de deslocamento até a entrada e melhorar a comunicação no controle de visitantes.",
      beneficios: "São aplicáveis em residências, condomínios e estabelecimentos comerciais, contribuindo para a praticidade e o controle de acesso.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre porteiros eletrônicos.",
      imagem: "img/galeria/instalacao-manutencao/porteiros-eletronicos/porteiros-eletronicos-video-porteiro-teixeira-de-freitas.webp"
    },
    "fechaduras-eletronicas": {
      nome: "Fechaduras eletrônicas",
      resumo: "Alternativas de controle de acesso que utilizam recursos eletrônicos para liberar portas.",
      oQueE: "Dispositivos de travamento que utilizam mecanismos eletrônicos, podendo operar por senha, cartão, biometria, aplicativo ou outros métodos, conforme o modelo.",
      paraQueServe: "Permitem controlar a abertura de portas por meios eletrônicos, de acordo com os recursos disponíveis no equipamento.",
      problemas: "Podem ajudar a modernizar o acesso, reduzir a dependência de chaves físicas e organizar permissões de entrada.",
      beneficios: "Podem ser utilizadas em portas residenciais e comerciais. A compatibilidade depende do tipo de porta, da fechadura e da alimentação elétrica necessária.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre fechaduras eletrônicas.",
      imagem: "img/galeria/instalacao-manutencao/fechaduras-eletronicas/fechaduras-eletronicas-instalacao-e-materiais-inclusos.webp"
    },
    "padroes-de-entrada": {
      nome: "Padrões de entrada",
      resumo: "Conjunto de componentes destinados à entrada e à medição de energia elétrica em um imóvel.",
      oQueE: "Estrutura que reúne os elementos necessários para a conexão da instalação do imóvel à rede de distribuição e para a medição do consumo, conforme as normas aplicáveis.",
      paraQueServe: "Organiza o ponto de entrada de energia e permite a instalação do sistema de medição da unidade consumidora.",
      problemas: "Pode ser necessário em novas ligações, adequações, reformas ou substituições de estruturas que não atendam às condições técnicas exigidas.",
      beneficios: "A configuração pode variar conforme o padrão de fornecimento, a carga prevista e as exigências da concessionária de energia.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre padrões de energia.",
      imagem: "img/galeria/instalacao-manutencao/padroes-de-entrada/padroes-de-entrada-instalacao-coelba-neoenergia.webp"
    },
    "coifas-depuradores": {
      nome: "Coifas e depuradores",
      resumo: "Equipamentos utilizados para auxiliar no tratamento do ar em cozinhas, especialmente durante o preparo de alimentos.",
      oQueE: "A coifa normalmente capta e conduz o ar para fora do ambiente ou opera com filtragem, conforme a instalação. O depurador filtra o ar e o devolve ao ambiente.",
      paraQueServe: "Ajudam a reduzir fumaça, partículas de gordura e odores gerados durante o preparo dos alimentos.",
      problemas: "Podem ajudar em cozinhas com acúmulo de fumaça, vapores e odores, desde que o equipamento seja adequado ao ambiente e esteja corretamente instalado.",
      beneficios: "São utilizados em cozinhas residenciais e comerciais. O tipo de equipamento e a forma de instalação dependem do espaço e das condições de ventilação.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre coifas e depuradores.",
      imagem: "img/galeria/instalacao-manutencao/coifas-depuradores/coifa-primorde.webp"
    },
    "cooktops-fogoes-inducao": {
      nome: "Cooktops e fogões de indução",
      resumo: "Equipamentos de cocção que oferecem diferentes configurações para cozinhas residenciais e comerciais.",
      oQueE: "Cooktops são superfícies de cocção instaladas em bancadas. Os modelos por indução aquecem panelas compatíveis por meio de um campo eletromagnético.",
      paraQueServe: "Permitem preparar alimentos com diferentes formatos de instalação e controle de aquecimento, conforme a tecnologia do aparelho.",
      problemas: "Podem atender projetos de cozinha que precisam otimizar espaço, atualizar equipamentos ou adotar uma forma específica de cocção.",
      beneficios: "A escolha requer atenção às dimensões do nicho, à compatibilidade das panelas nos modelos de indução e aos requisitos elétricos indicados pelo fabricante.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre cooktops e fogões de indução.",
      imagem: "img/galeria/instalacao-manutencao/cooktops-fogoes-inducao/cooktops-fogoes-inducao-instalacao-primorde.webp"
    },
    "caixas-dagua": {
      nome: "Caixas d’água",
      resumo: "Reservatórios destinados ao armazenamento de água para utilização no imóvel.",
      oQueE: "Recipientes próprios para armazenar água e manter uma reserva para o abastecimento dos pontos de consumo.",
      paraQueServe: "Ajudam a manter disponibilidade de água durante interrupções ou oscilações no abastecimento da rede, conforme a capacidade e o sistema hidráulico do imóvel.",
      problemas: "Podem atender necessidades de armazenamento, substituição de reservatórios ou adequação de sistemas de abastecimento.",
      beneficios: "São utilizados em imóveis residenciais e comerciais. Capacidade, local de instalação, base de apoio, limpeza e vedação devem ser considerados.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre caixas d’água.",
      imagem: "img/galeria/instalacao-manutencao/caixas-dagua/caixas-dagua-instalacao-primorde-teixeira-de-freitas.webp"
    },
    "chuveiros-eletricos": {
      nome: "Chuveiros elétricos",
      resumo: "Equipamentos que aquecem a água do banho por meio de resistência elétrica ou tecnologia própria do modelo.",
      oQueE: "Aparelhos instalados no ponto de banho, projetados para aquecer a água durante a passagem pelo equipamento.",
      paraQueServe: "Permitem ajustar a temperatura da água do banho de acordo com os recursos e as especificações do modelo.",
      problemas: "Podem estar relacionados a situações como aquecimento insuficiente, falhas de funcionamento, vazamentos ou necessidade de adequação da instalação.",
      beneficios: "A instalação deve considerar tensão, potência, circuito elétrico, aterramento, pressão e recomendações do fabricante.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre chuveiros elétricos.",
      imagem: "img/galeria/instalacao-manutencao/chuveiros-eletricos/chuveiros-eletricos-primorde.webp"
    },
    "pressurizadores": {
      nome: "Pressurizadores",
      resumo: "Equipamentos utilizados para auxiliar no aumento ou na estabilização da pressão da água em sistemas hidráulicos.",
      oQueE: "Dispositivos que utilizam uma bomba e controles associados para elevar a pressão da água em determinadas condições do sistema.",
      paraQueServe: "Podem melhorar o desempenho de pontos de consumo quando a pressão disponível é insuficiente, respeitando os limites do sistema hidráulico.",
      problemas: "Podem ajudar em situações de baixa pressão em chuveiros, torneiras e outros pontos, após avaliação da origem do problema.",
      beneficios: "A aplicação depende da origem da água, da vazão necessária, da altura manométrica, da tubulação e das características do imóvel.",
      mensagem: "Olá! Gostaria de solicitar atendimento sobre pressurizadores.",
      imagem: "img/galeria/instalacao-manutencao/pressurizador/pressurizador-instalacao-materiais-inclusos-teixeira-de-freitas.webp"
    }
  };

  function iniciarAcordeao() {
    const botao = document.querySelector(".equipamento-acordeao-botao");
    const painel = document.getElementById("painel-equipamento");
    if (!botao || !painel) return;

    botao.addEventListener("click", () => {
      const aberto = botao.getAttribute("aria-expanded") === "true";
      botao.setAttribute("aria-expanded", String(!aberto));
      painel.hidden = aberto;
      const icone = botao.querySelector(".equipamento-acordeao-icone");
      if (icone) icone.textContent = aberto ? "＋" : "−";
    });
  }

  function iniciarCategoria() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("categoria");
    const item = CATEGORIAS[id];

    if (!item) {
      document.title = "Categoria não encontrada | Primorde";
      const titulo = document.querySelector("[data-titulo-categoria]");
      if (titulo) titulo.textContent = "Categoria não encontrada";
      const descricao = document.querySelector("[data-descricao-categoria]");
      if (descricao) descricao.textContent = "Não foi possível localizar esta categoria. Volte ao catálogo e selecione uma das categorias disponíveis.";
      const conteudo = document.querySelector(".categoria-conteudo");
      if (conteudo) conteudo.hidden = true;
      return;
    }

    document.title = `${item.nome} | Catálogo de Equipamentos | Primorde`;
    const preencher = (seletor, valor) => {
      const elemento = document.querySelector(seletor);
      if (elemento) elemento.textContent = valor;
    };

    preencher("[data-titulo-categoria]", item.nome);
    preencher("[data-breadcrumb]", item.nome);
    preencher("[data-descricao-categoria]", item.resumo);
    preencher("[data-titulo-equipamento]", item.nome);
    preencher("[data-resumo]", item.resumo);
    preencher("[data-o-que-e]", item.oQueE);
    preencher("[data-para-que-serve]", item.paraQueServe);
    preencher("[data-problemas]", item.problemas);
    preencher("[data-beneficios]", item.beneficios);
    preencher("[data-texto-atendimento]", `Solicitar atendimento sobre ${item.nome.toLowerCase()} pelo WhatsApp da Primorde.`);

    // Inserção da imagem dentro da tag <small> conforme solicitado
    const containerImagem = document.querySelector(".categoria-imagem");
    if (containerImagem && item.imagem) {
      let elementoSmall = containerImagem.querySelector("small");
      if (!elementoSmall) {
        elementoSmall = document.createElement("small");
        containerImagem.appendChild(elementoSmall);
      }
      elementoSmall.innerHTML = `<img src="${item.imagem}" alt="${item.nome}" loading="lazy" decoding="async" style="max-width:100%; height:auto; display:block; margin:0 auto;">`;
    }

    const link = document.querySelector("[data-link-atendimento]");
    if (link) {
      link.href = WHATSAPP + encodeURIComponent(item.mensagem);
      link.setAttribute("aria-label", `Solicitar atendimento sobre ${item.nome} pelo WhatsApp da Primorde`);
    }

    iniciarAcordeao();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarCategoria, { once: true });
  } else {
    iniciarCategoria();
  }
})();