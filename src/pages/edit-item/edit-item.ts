import { ListaCompraProvider } from './../../providers/lista-compra/lista-compra';
import { ShoppingItem } from './../../models/shopping item/shopping item interfaz';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioListaCompra:ListaCompraProvider, private toast:ToastController) {
    console.log(navParams.get("item"));
    //*.33 asingamos los datos que nos llegan
    this.item=navParams.get("item");
  }

  // *.37 metodo de guardarItem
  guardarItem(item:ShoppingItem){
    
    this.servicioListaCompra.editItem(item).then(()=>{
      this.navCtrl.setRoot("HomePage");
      this.mensaje("item cambiado");
    })
  }
  // *.40
  borrarItem(item:ShoppingItem){
    this.servicioListaCompra.deleteItem(item).then(()=>{ this.navCtrl.setRoot("HomePage");
     this.mensaje("item borrado");});

  }
  // *.41 mensaje toast
  mensaje (texto:string)
  {
    const toast = this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
