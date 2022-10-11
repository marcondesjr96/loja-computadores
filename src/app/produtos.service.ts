import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

//   getOne(produtoId : number){
//     const val = this.produtos.find(function(produto){
//       if(produto.id == produtoId){
//         return produto
//       }
//       return
//     });
// // console.log(val);
//     return val;

//   }
  getOne(produtoId : number){
    return this.produtos.find(produto => produto.id == produtoId)
  }
}
