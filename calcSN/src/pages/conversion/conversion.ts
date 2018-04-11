import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-conversion',
  templateUrl: 'conversion.html'
})
export class ConversionPage {
  
  private isBinary: boolean;
  private isOctal: boolean;
  private isDecimal: boolean;
  private isHexadecimal: boolean;
  public currentBase: string;
  public conversionInput: string;
  public resultBinary: string;
  public resultOctal: string;
  public resultDecimal: string;
  public resultHexadecimal: string;

  // a função irá ser chamada toda vez que o label do usuário for alterado
  // primeiro limpa os dados das variaveis de resultado e dados de entrada da conversão
  // em seguida verifica qual a base numérica escolhida(2,8,10,16) e atribui o valor true ou false para as variaveis correspondentes a base numerica escolhida
  buttonDisplay(): void {

    this.conversionInput = '';
    this.resultBinary = '';
    this.resultOctal = '';
    this.resultDecimal = '';
    this.resultHexadecimal = '';

    this.isBinary = this.currentBase == "2";
    this.isOctal = this.currentBase == "8";
    this.isDecimal = this.currentBase == "10";
    this.isHexadecimal = this.currentBase == "16";
  }

  //função que verifica se a base escolhida ainda não foi selecionada
  currentBaseNotNull(): boolean {
    return !(this.currentBase == "" || this.currentBase == null);
  }

  // as funções "showBtn" fazem algumas validações e retorna true ou false. Isso no HTML irá ser usado para definir se o botão
  // deve ser mostrado ou não em relação a base numérica escolhida
  showBtn0To1(): boolean {
    return this.isBinary || this.isOctal || this.isDecimal || this.isHexadecimal;
  }

  showBtn2To7(): boolean {
    return !this.isBinary && (this.isOctal || this.isDecimal || this.isHexadecimal);
  }

  showBtn8To9(): boolean {
    return !this.isBinary && !this.isOctal && (this.isDecimal || this.isHexadecimal);
  }

  showBtnAToF(): boolean {
    return !this.isBinary && !this.isOctal && !this.isDecimal && this.isHexadecimal;
  }

  //recebe a entrada do usuário como paramentro(input) e concatena o mesmo na variável "conversionInput"
  addValue(input): void {
    this.conversionInput += input;
  }

  // função que irá realizar as conversões de base numéricas
  conversion(): void {

    let currentBaseValueNotNull: boolean;
    let value: string;
    let decimal;

    currentBaseValueNotNull = this.currentBase == "2" || this.currentBase == "8" || this.currentBase == "10" || this.currentBase == "16";
    value = this.conversionInput;

    if (currentBaseValueNotNull) {
      if (value == '' || value == null) {
        this.resultBinary = '';
        this.resultDecimal = '';
        this.resultOctal = '';
        this.resultHexadecimal = '';
      } else {
        switch (this.currentBase) {
          case "2":
            decimal = parseInt(value, 2);
            break;

          case "10":
            decimal = parseInt(value);
            break;

          case "8":
            decimal = parseInt(value, 8);
            break;

          case "16":
            decimal = parseInt(value, 16);
            break;
        }

        this.resultBinary = decimal.toString(2);
        this.resultDecimal = decimal;
        this.resultOctal = decimal.toString(8);
        this.resultHexadecimal = decimal.toString(16);
      }
    }
  }

  // função que irá limpar a tela(valores do input e resultados)
  clear(): void {
    this.conversionInput = "";
    this.resultBinary = "";
    this.resultOctal = "";
    this.resultDecimal = "";
    this.resultHexadecimal = "";
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionPage');
  }
}
