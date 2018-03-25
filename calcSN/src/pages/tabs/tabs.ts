import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CalculatorPage } from '../calculator/calculator';
import { ConversionPage } from '../conversion/conversion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalculatorPage;
  tab2Root = ConversionPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() { }
}
