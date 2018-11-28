import { ShoppingItem } from './../../models/shopping item/shopping item interfaz';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

    // *.14 añado item
  item:ShoppingItem={
    name:"",
    quantity:0,
    price: 0
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // *.17 creo el metodo que atiende el clic, pero antes tengo que crear el servicio lista-compra
  addItem(item: ShoppingItem){

  }

 

}
