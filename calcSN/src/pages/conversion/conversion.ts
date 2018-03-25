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
   
  buttonDisplay = () => {
    
    if (this.currentBase == "2") {

      let btnNoBinary = document.getElementsByClassName("no-binary");
      let btnIsBinary = document.getElementsByClassName("binary");

      for(let i = 0; i < btnNoBinary.length; i++){
        btnNoBinary[i].style.display = "none";
      }

      for(let i = 0; i < btnIsBinary.length; i++) {
        btnIsBinary[i].style.display = "inline-block";
      }
    }
    
    if (this.currentBase == "8") {

      let btnNoOctal = document.getElementsByClassName("no-octal");
      let btnIsOctal = document.getElementsByClassName("octal");

      for(let i = 0; i < btnNoOctal.length; i++) {
        btnNoOctal[i].style.display = "none";
      }

      for(let i = 0; i < btnIsOctal.length; i++) {
        btnIsOctal[i].style.display = "inline-block";
      }
    }

    if (this.currentBase == "10") {

      let btnNoDecimal = document.getElementsByClassName("no-decimal");
      let btnIsDecimal = document.getElementsByClassName("decimal");

      for(let i = 0; i < btnNoDecimal.length; i++) {
        btnNoDecimal[i].style.display = "none";
      }

      for(let i = 0; i < btnIsDecimal.length; i++) {
        btnIsDecimal[i].style.display = "inline-block";
      }
    }

    if (this.currentBase == "16") {

      let btnIsHexadecimal = document.getElementsByClassName("hexadecimal");

      for(let i = 0; i < btnIsHexadecimal.length; i++) {
        btnIsHexadecimal[i].style.display = "inline-block";
      }
    }

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionPage');
  }

}
