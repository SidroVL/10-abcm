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
  addItem(item:ShoppingItem){
    return this.refListaCompra.push(item);
  }
}
