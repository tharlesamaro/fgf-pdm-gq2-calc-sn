import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  // variável "result" do tipo String. Recebe o valor concatenado da entrada do usuário e também guarda o valor dos cálculos
  result: string = '';

  /*
   * A função "addValue" vai receber como parametro o valor do botão que foi digitado.
   * Irá fazer o tratamento para alocar o valor na variável "result", o que vai variar dependendo da entrada
  */
  addValue(input): void {

    switch (input) {
      // Caso o usuário digite a entrada "CE" o valor da variável result será definido como "vazio"
      case 'CE':
        this.result = '';
        break;

      // Caso a entrada seha "=" a função irá realizar a operação e guardar o resultado na variável "result"
      // Antes irá fazer algumas validações
      case '=':
        // caso a variável result estiver com o valor "vazio", não irá retornar nada
        if (this.result == '') {
          return;
        }
        // a função eval vai avaliar e retornar o resultado a expressão passada como uma string
        try {
          this.result = eval(this.result);
        } catch (error) {
          // caso a expressão não possa ser avaliada pela função, irá chamar a mensagem de erro e deixar o valor da variável "result" vazio
          this.showMessage();
          this.result = '';
        }
        break;

      // tratando a entrada "."
      case '.':
        // a variável "emptyResult" vai ter o valor booleano de acordo com o valor da variável "result", se a mesma for vazia ou não
        let emptyResult: boolean;
       // variável que vai guardar o valor do último caractere digitado pelo usuário
        let lastCharacter: string;
        // vai ter um valor booleano dependendo se o ultimo valor digitado foi um Operador aritmético ou não
        let lastDigitIsOperator: boolean;
        // caso "result" estiver vazio, a variável emptyResult recebe true
        emptyResult = this.result == '';
        /* A função "charArt" vai pegar um único caractere em uma posição específica que é passada por parametro
         * "length - 1" que é aplicado a variável "result", pega sempre o último caractere digitado
        */
        lastCharacter = this.result.charAt(this.result.length - 1);
        // se o último caractere digitado for um dos operadores "+, -, *, /", vai retornar true para a variável "lastDigitIsOperator
        lastDigitIsOperator = lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/';
        //Operador Ternário. Caso a variável emptyResul for for true ou lastDigitIsOperator for true, vai concatenar result com "0.", caso contrário concatena com o valor de input(entrada do usuário)
        this.result += emptyResult || lastDigitIsOperator ? '0.' : input;
        break;

      // por padrão se nenhum dos cases for atendidos, irá concatenar o valor da variavel "result" com a entrada atual do usuário
      default:
        this.result += input;
        break;
    }
  }

  // função que mostra a mensagem de erro caso a operação seja inválida
  showMessage(): void {
    this.alertCtrl.create({
      title: 'Operação inválida.',
      subTitle: 'Por favor, tente novamente.',
      buttons: ['Ok']
    }).present();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
}
