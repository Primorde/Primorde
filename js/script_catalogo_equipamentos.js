/* Comportamento leve do catálogo: identifica imagens carregadas corretamente. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".equipamento-foto img").forEach((imagem) => {
    const marcarCarregada = () => imagem.classList.add("imagem-carregada");
    if (imagem.complete && imagem.naturalWidth > 0) marcarCarregada();
    else imagem.addEventListener("load", marcarCarregada, { once: true });
  });
});
