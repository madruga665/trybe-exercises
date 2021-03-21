function generateStates() {
  let states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const state = document.getElementById('state');

  for (let index = 0; index < states.length; index += 1) {
    const createOptions = document.createElement("option");
    state.appendChild(createOptions).innerHTML = states[index];
    state.appendChild(createOptions).value = states[index];
  }
}
window.onload = () => {
  generateStates();
};