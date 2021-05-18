
$(document).ready(function () {
    var altura_viewport = $(window).height();
    var altura_Elemento = $(document).height();
    var distancia_topo  = $("#main").offset().top;
    var diferenca       = altura_Elemento - altura_viewport;
    
    $(window).scroll(function () { 
        var posicao_scroll = $(window).scrollTop();
        
        /* Verificando se eles estão dentro do seu campo de aparição */ 
        var rodape_on1;
        var rodape_on2;
        if (10 >= posicao_scroll){
            rodape_on1 = true;
        }else{
            rodape_on1 = false;
        }
        if (posicao_scroll >= (50-distancia_topo + diferenca)){
            rodape_on2 = true;
        }else{
            rodape_on2 = false;
        }
        /* fim da verificação */


        var tipo = $("#RodapeFixo").css("display");


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
