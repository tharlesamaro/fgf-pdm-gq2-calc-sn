import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CalculatorPage } from '../calculator/calculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalculatorPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
