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
  currentNode: BTreeNode<Step>;

  setStep(statement:string, question:string):Step{
    let step = new Step();
    step.statement=statement;
    step.question=question;
    return step;
  }

  setNode(answer:boolean, statement:string, question:string):BTreeNode {
    let step=this.setStep(statement,question);
    let node = new BTreeNode({value: step});
    return node;
  }

  public onClickYes(){
    if(this.currentNode.lNode){
      this.currentNode= this.currentNode.lNode;
    console.log(this.currentNode.value.statement)
    }
    
  }
  public onClickNo(){
    if(this.currentNode.rNode!=null){
      this.currentNode= this.currentNode.rNode;
      console.log(this.currentNode.value.statement)
    }
   
  }
  ngOnInit() {


   //Inicializa el arbol
  

  let node2= new BTreeNode({value:this.setStep(
    "Realice el ajuste del voltaje de polarización del relevador (1.C1). Si no puede lograr el ajuste, realice lo siguiente: Seleccione polarización normal y haga una copia. Prepare el multímetro para medir +12 VCC. Conecte (-) a retorno de lógica común. Conecte (+) a P12, pins 5, 6 y 7, uno a la vez.",
    "¿Hay entre +11 y +13 VCC en todos los pins?")})
  let node3= new BTreeNode({value:this.setStep("N3","0000")})
  let node4= new BTreeNode({value:this.setStep("N4","0000")})
  let node5= new BTreeNode({value:this.setStep("N5","0000")})
  let node6= new BTreeNode({value:this.setStep("N6","0000")})
  let node7= new BTreeNode({value:this.setStep("N7","0000")})
  let node8= new BTreeNode({value:this.setStep("N8","0000")})
  let node9= new BTreeNode({value:this.setStep("N9","0000")})
  let node10= new BTreeNode({value:this.setStep("N10","0000")})
  let node11= new BTreeNode({value:this.setStep("N11","0000")})
  let node12= new BTreeNode({value:this.setStep("N12","0000")})
  let node13= new BTreeNode({value:this.setStep("N13","0000")})


  node2.lNode=node4;
  node2.rNode=node5;
  node3.lNode=node6;
  node3.rNode=node7;
  node4.lNode=node8;
  node4.rNode=node9;
  node8.lNode=node10;
  node8.rNode=node11;
  node10.lNode=node12;
  node10.lNode=node13;
  
  
  
  let tree= new BTree<Step>(this.setStep(
              "Prepare el multímetro para medir 300 VCC. Ajuste la copiadora a polarización. Conecte (+) al terminal de polarización del revelador, en la F.A.T y (-) a retorno de lógica común.",
              "¿Hay polarización del relevador?"));
  
    console.log(tree.root)
    tree.root.lNode=node2;
    tree.root.rNode=node3;

  this.currentNode= tree.root;

 


  
  }

}
