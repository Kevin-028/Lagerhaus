
$(document).ready(function () {
    
    
    $(window).scroll(function () { 

        var altura_viewport = $(window).height(); // Tamanho da tela
        var altura_Elemento = $(document).height(); // Altura do meu documento
        var distancia_topo  = $("#main").offset().top; // Altura da minha teg mãe
        var diferenca       = altura_Elemento - altura_viewport; // diferença da altura da tela para o documento

        
        var posicao_scroll = $(window).scrollTop();  // em queponto do documento o campo visivel esta
        /* Verificando se eles estão dentro do seu campo de aparição */ 
        var rodape_on1;
        var rodape_on2;
        if (10 >= posicao_scroll){
            rodape_on1 = true;
        }else{
            rodape_on1 = false;
        }
        if (posicao_scroll >= (-400-distancia_topo + diferenca)){
            rodape_on2 = true;

        }else{
            rodape_on2 = false;
        }
        /* fim da verificação */

        var tipo = $("#RodapeFixo").css("display"); //estou verificando oque esta sendo atribuido a ID referente a display
        if ((rodape_on1 || rodape_on2) == true){
            if ( tipo != "flex"){
                $("#RodapeFixo").slideDown();
                $("#RodapeFixo").show();
            }

        }else{
            if ( tipo != "none"){
                $("#RodapeFixo").slideUp();
                $("#RodapeFixo").show();
            }
        };
        

    /* console.log("("+posicao_scroll +" >= "+"("+distancia_topo+ " + ("+ altura_Elemento + " - " + altura_viewport + ")))");*/
    });

});
$("#ancoracoworking ").click(function() {
    let posicao = $(".Coworking ").offset().top - $("nav ").height() + 10;
    $(window).scrollTop(posicao);
})

$("#ancoraendereco ").click(function() {
    let posicao = $(".EnderecoFiscal ").offset().top - $("nav ").height() - 15;
    $(window).scrollTop(posicao);
})

$("#ancorastorage ").click(function() {
    let posicao = $(".Storage ").offset().top - $("nav ").height() - 15;
    $(window).scrollTop(posicao);
})


$("#ancoraplanos ").click(function() {
    let posicao = $(".NossosPlanos ").offset().top - $("nav ").height() - 15;
    $(window).scrollTop(posicao);
})

$("#ancorareduza").click(function(){
    let posicao = $(".ReduzaCustos").offset().top - $("nav").height() -15;
    $(window).scrollTop(posicao);
});

$("#ancoraespaco").click(function(){
    let posicao = $(".ReduzaCustos").offset().top - $("nav").height() -15;
    $(window).scrollTop(posicao);
});

$("#ancoramissao").click(function(){
    let posicao = $(".Missao").offset().top - $("nav").height() -0;
    $(window).scrollTop(posicao);
});
