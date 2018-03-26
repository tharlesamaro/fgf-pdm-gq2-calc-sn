import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConversionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversion',
  templateUrl: 'conversion.html',
})
export class ConversionPage {

  public currentBase: string;
  public isBinary: boolean;
  public isOctal: boolean;
  public isDecimal: boolean;
  public isHexadecimal: boolean;
   
  buttonDisplay = () => {
    
    if (this.currentBase == "2") {
      this.isBinary =  true;
    } else {
      this.isBinary = false;
    }

    if (this.currentBase == "8") {
      this.isOctal =  true;
    } else {
      this.isOctal = false;
    }

    if (this.currentBase == "10") {
      this.isDecimal =  true;
    } else {
      this.isDecimal = false;
    }

    if (this.currentBase == "16") {
      this.isHexadecimal =  true;
    } else {
      this.isHexadecimal = false;
    }  

  }

  showBtn0To1 = () => {
    
    let allAreTrue = (this.isBinary == true) || (this.isOctal == true) || (this.isDecimal == true) || (this.isHexadecimal == true);
    
    if (allAreTrue) {
      return true;
    } else {
      return false;
    }
  }

  showBtn2To7 = () => {
    
    let binaryIsFalse = (this.isBinary == false) && ((this.isOctal == true) || (this.isDecimal == true) || (this.isHexadecimal == true));
    
    if (binaryIsFalse) {
      return true;  
    } else {
      return false;
    }
  }

  showBtn8To9 = () => {

    let binaryAndOctalAreFalse = (((this.isBinary == false) && (this.isOctal == false)) && ((this.isDecimal == true) || (this.isHexadecimal == true))); 

    if (binaryAndOctalAreFalse) {
      return true;
    } else {
      return false;
    }
  }

  showBtnAToF = () => {

    let hexadecimalIsTrue = (((this.isBinary == false) && (this.isOctal == false) && (this.isDecimal == false)) && (this.isHexadecimal == true));

    if (hexadecimalIsTrue) {
      return true;
    } else {
      return false;
    }
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionPage');
  }

}
