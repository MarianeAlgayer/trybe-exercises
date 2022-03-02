// importar o Redux
const Redux = require('redux');

// fazerLogin é uma actionCreator: uma função que retorna uma action
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});
  
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

// para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado

// inicialmente o state vem como undefined, então iremos atribuir a ele um valor padrão
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

// uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer
const store = Redux.createStore(reducer);

// conseguimos mudar o estado da store utilizando o dispatch. Ele despacha nossa action para dentro do reducer, para que nosso estado seja alterado
store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());
// { login: true, email: 'alguem@email.com' }
