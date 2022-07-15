import { Component, OnInit } from '@angular/core';
import { BTreeNode, BTree } from '@dsinjs/binary-tree';
import {Step} from '../../interfaces/step'
  
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor() { }
  //Variables globales
  currentNode: BTreeNode<Step>;
  lastNodes: BTreeNode<Step>[];
  rootNode: BTreeNode<Step>;

  setStep(statement:string, question:string):Step{
    let step = new Step();
    step.statement=statement;
    step.question=question;
  
    return step;
  }

  setNode(statement:string, question:string):BTreeNode {
    let step=this.setStep(statement,question);
    let node = new BTreeNode({value: step});
    return node;
  }

  public onClickYes(){
    if(this.currentNode.lNode!=null){
      this.currentNode= this.currentNode.lNode;
      this.lastNodes.push(this.currentNode);
      // console.log(this.lastNodes);
    }
  }
  public onClickNo(){
    if(this.currentNode.rNode!=null){
      this.currentNode= this.currentNode.rNode;
      this.lastNodes.push(this.currentNode);
      // console.log(this.lastNodes);
    }

  }
  public onClickBackButton(){
    //Verificar si el currentNode es el rootNode
    if(this.currentNode!=this.rootNode){
      //Regresar al lastNodes
      this.lastNodes.pop();
      this.currentNode=this.lastNodes[this.lastNodes.length-1];
      // console.log(this.lastNodes);
    }
  }

  ngOnInit() {
   //Inicializa el arbol
     
  
  
    //Creación del arbol binario
    let valueRoot= this.setStep(
      "Prepare el multímetro para medir 300 VCC. Ajuste la copiadora a polarización. Conecte (+) al terminal de polarización del revelador, en la F.A.T y (-) a retorno de lógica común.",
      "¿Hay polarización del relevador?");
    let tree= new BTree<Step>(valueRoot);
  
  
    //Creación de nodos
  let node2= this.setNode(
    "Realice el ajuste del voltaje de polarización del relevador (1.C1). Si no puede lograr el ajuste, realice lo siguiente: Seleccione polarización normal y haga una copia. Prepare el multímetro para medir +12 VCC. Conecte (-) a retorno de lógica común. Conecte (+) a P12, pins 5, 6 y 7, uno a la vez.",
    "¿Hay entre +11 y +13 VCC en todos los pins?");

  new BTreeNode({value:this.setStep})
  let node3= new BTreeNode({value:this.setStep(
    "Desconecte el cable de polarización del revelador",
    "¿Hay polarización del revelador?")})
    
  let node4= new BTreeNode({value:this.setStep(
    "Conecte (+) a P4, pins 20, 21, y 22, uno a la vez. ",
    "Hay entre +11 y +13 VCC en todos los pins.")})
    
  let node5= new BTreeNode({value:this.setStep(
    "Encuentre la FLECHA DE REFERENCIA 1, y compruebe si hay un corto a tierra en el cable de la señal de control de polarización defectuoso, antes de reemplazar la F.A.T.",
    "")})
  let node6= new BTreeNode({value:this.setStep(
    "Comprueba si hay un corto a tierra en el cable de polarización de la unidad de revelado",
    "")})
  let node7= new BTreeNode({value:this.setStep(
    "Reemplace la F.A.T",
    "")})
  let node8= new BTreeNode({value:this.setStep(
    "Introduzca el código de diagnóstico 9-1, y combine con los códigos 9-8 y 9-13. Conecte (+) a P4-22.",
    "¿Hay 0 VCC?")})

  let node9= new BTreeNode({value:this.setStep(
    "Encuentra la FLECHA DE REFERENCIA 1, y compruebe si hay un circuito abierto en al cable de la señal de control de polarización defectuoso, entre el PWB principal y la F.A.T.",
    "")})
  let node10= new BTreeNode({value:this.setStep(
    "Introduzca el código de diagnóstico 9-1, y combinalo con al codigo 9-7. Conecte (+) a P4, pins 20 y 21, uno a la vez ",
    "¿Hay 0 VCC en ambos pins?")})
  let node11= new BTreeNode({value:this.setStep(
    "Reemplace el PWB principal",
    "")})
  let node12= new BTreeNode({value:this.setStep(
    "Reemplace la FAT",
    "")})
  let node13= new BTreeNode({value:this.setStep(
    "Reemplace el PWB principal",
    "")})

    //Crear la estructura del arbol binario
  tree.root.lNode=node2;
  tree.root.rNode=node3;
  node2.lNode=node4;
  node2.rNode=node5;
  node3.lNode=node6;
  node3.rNode=node7;
  node4.lNode=node8;
  node4.rNode=node9;
  node8.lNode=node10;
  node8.rNode=node11;
  node10.lNode=node12;
  node10.rNode=node13;

  
  

//Inicialización de la navegación
  this.rootNode= tree.root; 
  this.currentNode= this.rootNode;
  this.lastNodes=[this.currentNode];


  }

}
