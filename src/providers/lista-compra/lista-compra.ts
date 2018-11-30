import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingItem } from './../../models/shopping item/shopping item interfaz';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// *.18 genero este servicio 
@Injectable()
export class ListaCompraProvider {

   // *.20 creamos la referencia de la lista
  private refListaCompra= this.db.list<ShoppingItem>('listaCompra');
  // *.19 inyectamos un angularFireDatabase
 
  constructor(private db:AngularFireDatabase) {
   
  }
  // *.21 subo el item a la base de datos
  addItem(item:ShoppingItem){
    return this.refListaCompra.push(item);
  }

  // *.24 
  getItemList(){
    return this.refListaCompra;
  }

  // *.36 
  editItem(item:ShoppingItem){
    return this.refListaCompra.update(item.key,item);// 2 metodos , primero la clave y luego los datos
  }

  // *.36
  deleteItem(item:ShoppingItem){
    return this.refListaCompra.remove(item.key);
  }

}
