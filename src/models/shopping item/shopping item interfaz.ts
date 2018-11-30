// *.10 creo esta interface y defino los tipos de datos
export interface ShoppingItem{
    key?: string; //opcional, enlazado con firebase
    name: string;
    quantity: number;
    price:number;
}