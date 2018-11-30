
import { ListaCompraProvider } from './../../providers/lista-compra/lista-compra';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// *.26 importamos lo siguiente
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators'; 
import { ShoppingItem } from './../../models/shopping item/shopping item interfaz';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // *.27 creamos una lista
  listaCompra:Observable<ShoppingItem[]>

  // *.25 inyectar la listacompraprovider
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping:ListaCompraProvider) {
    //*.28 referencia github angular
      this.listaCompra=this.shopping.getItemList() //devuelve la DB list
                      .snapshotChanges() //valores de la lista
                      .pipe(map( changes=>{
                          return changes.map( c=>(
                            {
                              key: c.payload.key,
                              ...c.payload.val(),
                            }

                              )
                            )
                          }

                        )
                      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
