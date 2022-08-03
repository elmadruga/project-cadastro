var dados = []

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Idade}</td>
                </tr>`)

        })
    }
}

$(function () {
    //EXECUTA NO CARREGAR DA TELA
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }


    $("btnSalvar").click(function () {
        //EVENTO CLICK DO BOTÃO "SALVAR"

        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })
        let Idade = $("#txtIdade").val()


        let registro = {}

        registro.Nome = Nome
        registro.Sobrenome = Sobrenome
        registro.DtNascimento = DtNascimento
        registro.Idade = Idade

        registro.ID = dados.length + 1

        dados.push(registro)

        alert("Registro salvo com sucesso!")
        $("#modalRegistro").modal("hide")

        //LIMPEZA DOS CAMPOS COM TEXTO VAZIO ("")
        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNascimento").val("")
        $("#txtIdade").val("")

        PopulaTabela()
    })
})