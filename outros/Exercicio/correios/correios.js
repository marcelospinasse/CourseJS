$(document).ready(function () {

       $("#inptCEP").focusout(function () {
        var cep = $("#inptCEP").val();
        cep = cep.replace("-" , "");

           var urlStr = "https://viacep.com.br/ws/" + cep + "/json/";


           
           $.ajax({
               url : urlStr,
               type : "get",
               dataType : "json",
               success : function(data){
                   console.log(data);

                    $("#inptCidade").val(data.localidade);
                   $("#inptEstado").val(data.uf);
                   $("#inptBairro").val(data.bairro);
                   $("#inptRua").val(data.logradouro);
                   $("#inptCompl").val(data.complemento);

              },
              error : function(erro){
                  console.log("CEP inválido!!!");
              }
            

            });

       
         });
    

});
