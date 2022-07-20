import 'core-js/stable'; // P/ o código (Promise) ser carregado mesmo em navegadores antigos 
import 'regenerator-runtime/runtime'; //Funcionou normal sem isso
import executa from './modules/promises';
import './assets/css/style.css';

executa();