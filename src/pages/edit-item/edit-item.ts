import { ShoppingItem } from './../../models/shopping item/shopping item interfaz';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
  // *.32 añadir el item
  item:ShoppingItem;
  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioListaCompra:ShoppingItem) {
    console.log(navParams.get("item"));
    //*.33 asingamos los datos que nos llegan
    this.item=navParams.get("item");
  }

  // *.37 metodo de guardarItem
  guardarItem(item:ShoppingItem){

  }
  

}
