import geraSenha from './geraSenha';

const senhaGeradaHTML = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd_caracteres');
const chkMaiusculas = document.querySelector('.chk_maiusculas');
const chkMinusculas = document.querySelector('.chk_minusculas');
const chkNumeros = document.querySelector('.chk_numeros');
const chkSimbolos = document.querySelector('.chk_simbolos');
const gerarSenha = document.querySelector('.gerar_senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGeradaHTML.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(qtdCaracteres.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked )
    return senha || 'Nada selecionado.';
}