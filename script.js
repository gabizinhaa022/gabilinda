document.addEventlistener('DOMContentLoaded',function)(){
    const aumentaFonteBotao=document.getElementByld("aumentar-fonte");
    constdiminuiFonteBotao=document.getElementByld("diminuir-fonte");
    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', functoin(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize='${tamanhoAtualFonte}rem'

    })
        diminuiFonteBotao.addEventListener('click', function ) {
            tamanhoAtualFonte -=0.1;
            document.body.style.fontSize = '$ {tamanhaAtualFonte}rem`
        }) 

        })
        
      
  
