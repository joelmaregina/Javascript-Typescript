function Calculadora() {
      this.display = document.querySelector('.display');
  
      this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaBackSpace();
        this.pressionaEnter();
      };
  
      this.pressionaBackSpace = () => {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            e.preventDefault();
            this.apagaTudo();
          }
        });
      };
  
      this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            this.realizaConta();
          }
        });
      }
  
      this.realizaConta = () => {  
        try {
          const conta = eval(this.display.value);
  
          if(!conta) {
            alert('Conta inválida');
            return;
          }

          this.display.value = String(conta);
        } catch(e) {
          alert('Conta inválida');
          return;
        }
      }
  
      
      this.cliqueBotoes = () => {
          document.addEventListener('click', e => {
              const el = e.target;
              
              if(el.classList.contains('btn-num')) this.addParaDisplay(el);
              if(el.classList.contains('btn-clear')) this.apagaTudo();
              if(el.classList.contains('btn-del')) this.apagaUm();
              if(el.classList.contains('btn-eq')) this.realizaConta();
              this.display.focus();
            });
        }
        
        this.apagaTudo = () => this.display.value = '';
        this.apagaUm = ()  => this.display.value = this.display.value.slice(0, -1); //apaga um
        this.addParaDisplay = (el) => this.display.value += el.innerText;
      
}

const cauculadora = new Calculadora();
cauculadora.inicia();
