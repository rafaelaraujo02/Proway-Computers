import { IProduto, produtos } from './produtos/produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoID: number){
    return this.produtos.find(produto => produto.id === produtoID)

  }

}
