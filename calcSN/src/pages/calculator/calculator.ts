import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  result: string = '';

  addValue(input): void {

    switch (input) {
      case 'CE':
        this.result = '';
        break;
      
      case '=':
        if (this.result == '') {
          return;
        }
        
        try {
          this.result = eval(this.result);
        } catch (error) {
          this.showMessage();
          this.result = '';
        }
        break;
      
      case '.':
        let emptyResult: boolean;
        let lastCharacter: string;
        let lastDigitIsOperator: boolean;
      
        emptyResult = this.result == '';        
        lastCharacter = this.result.charAt(this.result.length - 1);
        lastDigitIsOperator = lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/';
        this.result += emptyResult || lastDigitIsOperator ? '0.' : input;
        break;

      default:
        this.result += input;
        break;
    }
  }

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
