function toggleMode() {
  // pegando o html
  const html = document.documentElement

  // fazendo as trocas das classes de duas maneiras.

  //  if(html.classList.contains('light')) {
  //    html.classList.remove('light')
  // } else {
  //    html.classList.add('li')
  //  }
  // Substitui tudo isso acima, por
  html.classList.toggle("light")

  // pegar a tag img
  // querySelector é uma função que está no document. (pesquisa pelo seletor)
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    // setAttribute (ajustar, add, modificar uma atributo)
    img.setAttribute('src', './assets/Avatar.png')
    img.setAttribute(
      "alt",
      "Foto de Eddy Hinckel, de boné branco, com o fundo preto"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/Avatar - light.png')
    img.setAttribute(
      "alt",
      "Foto de Eddy Hinckel, de boné branco, com o fundo branco."
    )
  }
}
