import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConversionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * @author: tharlesamaro<contato@tharlesamaro.com>
 */

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

  buttonDisplay() {

    this.conversionInput = '';
    this.resultBinary = '';
    this.resultOctal = '';
    this.resultDecimal = '';
    this.resultHexadecimal = '';

    if (this.currentBase == "2") {
      this.isBinary = true;
    } else {
      this.isBinary = false;
    }

    if (this.currentBase == "8") {
      this.isOctal = true;
    } else {
      this.isOctal = false;
    }

    if (this.currentBase == "10") {
      this.isDecimal = true;
    } else {
      this.isDecimal = false;
    }

    if (this.currentBase == "16") {
      this.isHexadecimal = true;
    } else {
      this.isHexadecimal = false;
    }

  }

  currentBaseNotNull() {
    if (this.currentBase == "" || this.currentBase == null) {
      return false;
    } else {
      return true;
    }
  }

  showBtn0To1() {
    let allAreTrue = (this.isBinary == true) || (this.isOctal == true) || (this.isDecimal == true) || (this.isHexadecimal == true);

    if (allAreTrue) {
      return true;
    } else {
      return false;
    }
  }

  showBtn2To7() {
    let binaryIsFalse = (this.isBinary == false) && ((this.isOctal == true) || (this.isDecimal == true) || (this.isHexadecimal == true));

    if (binaryIsFalse) {
      return true;
    } else {
      return false;
    }
  }

  showBtn8To9() {
    let binaryAndOctalAreFalse = (((this.isBinary == false) && (this.isOctal == false)) && ((this.isDecimal == true) || (this.isHexadecimal == true)));

    if (binaryAndOctalAreFalse) {
      return true;
    } else {
      return false;
    }
  }

  showBtnAToF() {
    let hexadecimalIsTrue = (((this.isBinary == false) && (this.isOctal == false) && (this.isDecimal == false)) && (this.isHexadecimal == true));

    if (hexadecimalIsTrue) {
      return true;
    } else {
      return false;
    }
  }

  addValue(input) {
    if (input == 'clear') {
      this.conversionInput = '';
    } else {
      this.conversionInput += input;
    }
  }

  conversion() {
    let value = this.conversionInput;
    let decimal;
    let currentBaseValue = this.currentBase == "2" || this.currentBase == "8" || this.currentBase == "10" || this.conversionInput == "16";

    if (currentBaseValue) {

      if (value == '' || value == null) {

        this.resultBinary = '';
        this.resultDecimal = '';
        this.resultOctal = '';
        this.resultHexadecimal = '';

      } else {

        if (this.currentBase == "2") {
          decimal = parseInt(value, 2);
        }
        if (this.currentBase == "10") {
          decimal = parseInt(value);
        }
        if (this.currentBase == "8") {
          decimal = parseInt(value, 8);
        }
        if (this.currentBase == "16") {
          decimal = parseInt(value, 16);
        }

        this.resultBinary = decimal.toString(2);
        this.resultDecimal = decimal;
        this.resultOctal = decimal.toString(8);
        this.resultHexadecimal = decimal.toString(16);
      }
    }
  }

  clear() {
    this.conversionInput = "";
    this.resultBinary = "";
    this.resultOctal = "";
    this.resultDecimal = "";
    this.resultHexadecimal = "";
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionPage');
  }
}
