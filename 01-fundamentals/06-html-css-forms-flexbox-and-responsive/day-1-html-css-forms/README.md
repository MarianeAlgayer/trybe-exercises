## Exercise

### Criando um formulário de currículo

* Crie um arquivo **HTML** chamado **form.html** para o formulário.

* Caso julgue necessário, crie estilos **CSS** para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo **style.css**.

* Crie também um arquivo **script.js** para seu código **JavaScript**.

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:

* Faça as validações inicialmente pelo HTML.

1. Crie um `<fieldset>` para os seguintes dados pessoais:

* Nome - Texto:
    * Limite de 40 caracteres;
    * Campo obrigatório.

* Email - Texto:
    * Limite de 50 caracteres;
    * Campo obrigatório.

* CPF - Texto:
    * Limite de 11 caracteres;
    * Campo obrigatório.

* Endereço - Texto:
    * Limite de 200 caracteres;
    * Campo obrigatório.

* Cidade - Texto:
    * Limite de 28 caracteres;
    * Campo obrigatório.

* Estado - Select:
    * Todos os estados do Brasil;
    * Utilize estruturas de repetição via **JavaScript** para gerar os `<option>`;
    * Campo obrigatório.
    
* Tipo - Radio Button:
    * Casa, Apartamento;
    * Campo obrigatório.

2. Crie outro `<fieldset>` para dados do seu último emprego:

* Resumo do currículo - TextArea:
    * Limite de 1000 caracteres;
    * Campo obrigatório.

* Cargo - Texto:
    * Limite de 40 caracteres;
    * Campo obrigatório.

* Descrição do cargo - Texto:
    * Limite de 500 caracteres;
    * Campo obrigatório.

* Data de início - Texto:
    * Formato da data **dd/mm/aaaa**;
    * Campo obrigatório.

3. Crie um botão **Limpar** que limpa todos os campos do formulário.
