// Trie Implementation By Harshit Kumar Girdhar
export {TrieImplementation}


class TrieNode{
  constructor(){
    this.children = Array(10).fill(null);
    this.parent = null;
  }
}


class LastNode{
  // for our last node we do not want any children but we only want it to
  // store the name , number and address of parent node
  constructor(name,number,parent){
    this.name = name;
    this.number = number;
    this.parent = parent;
  }
}

class TrieImplementation{
  constructor(){
    this.root = new TrieNode(); // creating root of the trie
    this.curretn = this.root;

    //initialize our project with some initial default values


    let init = [
      ["HARSHIT","989978"],
      ["NISHANT","989889"],
      ["HARSHIL","900090"],
      ["AMAN","899890"]
    ];

    //add the default numbers to the trie

    for(let i = 0 ; i < init.length;i++){
      this.addnum(init[i][1],init[i][0],0);
    }
  }

// the below function is ud=sed for adding numbers to the TRIE
  addNum(number,name,pos=0,node=this.root){
    if(pos == number.length - 1){
      node.children[number[pos] - '0'] = new LastNode(name,number,node);
      return;
    }
    if(node.children[number[pos]-'0'] === null){
      let newNode = new TrieNode();
      node.children[number[pos]-'0'] = newNode;
      newNode.parent = node;
    }
    this.addnum(number,name,pos+1,node.children[number[pos] -'0']);

  }


// finding all the numbers starting with the particular digit
  findAllNum(node){
    // LastNode or leaf node
    if(node === null){
      return;
    }

    if(node instanceof LastNode){
      this.res.push(node);
      return;
    }
    for(let k  = 0 ; k < 10 ; k++){
      this.findAllNum(node.children[i]);
    }

  }
  findNextNum(step){
    if(step === -1){
      // this is the case if backsapce is pressed
      // we will return to the parent node
      this.current =  this.current.parent;
    }
    else if(step !== -2){
      if(this.current.children[step-'0']===null){
               let newnode = new TrieNode();
               this.current.children[step-'0'] = newnode;
               newnode.parent = this.current;
    }
    this.current = this.current.children[step - '0'];
  }
  //res is the result
  this.res = [];
  this.findAllNum(this.current);
  return this.res;
}
deleteNum(number,pos=0,node=this.root){
  // if we have reached the LastNode's previous node
  if(pos === number.length - 1){
    node.children[number[pos]-'0'] = null;
    return;
    //here we disconnect the last node and return
  }

  if(node.children[number[pos] - '0'] === null){
    let newNode = new TrieNode();
    node.children[number[pos] - '0'] = newNode;
    newNode.parent = node;
  }

  this.del(number,pos+1,node.children[number[pos] - '0']);
}
}
