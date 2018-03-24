import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author: tharlesamaro<contato@tharlesamaro.com>
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  result = '';

  addValue = (input) => {

    if (input == 'CE') { 
      this.result = '';
    }

    else if (input == '=') {
      if (this.result == '') {
        return;
      }
      try { 
        this.result = eval(this.result);
      } catch (error) {
        this.showMessage();
        this.result = '';
      }
    }

    else if (input == '.') {      
      
      let emptyResult = this.result == '';
      let lastCharacter = this.result.charAt(this.result.length - 1);
      let lastDigitIsOperator = (lastCharacter == '+') || (lastCharacter == '-') || (lastCharacter == '*') || (lastCharacter == '/');
      
      if (emptyResult || lastDigitIsOperator) {
        this.result += '0.';
      } else { 
        this.result += input;
      }      
    }

    else { this.result += input }
  }

  showMessage() {
    this.alertCtrl.create({
      title: 'Operação inválida',
      subTitle: 'Por favor, tente novamente...',
      buttons: ['Ok']
    }).present();
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
}
