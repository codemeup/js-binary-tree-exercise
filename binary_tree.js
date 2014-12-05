function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(newNum){
//testing is there a node here?
  if(this.value === null) {
    this.value = newNum;
  } else {
    //if the newNum is greater calling this function to the right
    if (newNum > this.value){
      if (this.right === null){
        //you can't call insert on a node that doesn't exist so we need to create a new node using new binTree(nodecontent)
        this.right = new BinTree(newNum);
      } else {
        this.right.insert(newNum);
      }
    } else {
    //if the newNum is greater calling this function to the right
    if (this.left ===null){
        //you can't call insert on a node that doesn't exist so we need to create a new node using new binTree(nodecontent)
        this.left = new BinTree(newNum);
      } else{
        this.left.insert(newNum);
      }
    }
    return this;
    }

  };

//this is refactored below to make it more efficient using a ternary:
// BinTree.prototype.isLeaf = function(){
//   if(this.value !== null) {
//     if(this.right === null && this.left === null){
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     console.log("there's nothing in this noooode");
//   }
// };

//refactored version of the above using a ternary:

BinTree.prototype.isLeaf = function(){
  if(this.value !== null) {
    return this.right ===null && this.left ===null;
  } else {
    console.log("there's nothing in this noooode");
  }
};


BinTree.prototype.search = function(thisNum){
  // Case 1 - this.value === thisNum
    // return true
  // Case 2 = this is a leaf
    // return false
  // Case 3 = thisNum < this.value
    // call this.left.search(thisNum)
  // Case 4 = don't actually need a condition here...
    // call this.right.search(thisNum)
  if(this.value === thisNum){
    return true;
  } else {
        if(this.isLeaf() === true){
          return false;
        } else {
          if(thisNum > this.value){
            return this.right.search(thisNum);
          } else{
            return this.left.search(thisNum);
          }
        }
      }
  };

try{
  module.exports = BinTree;
} catch(e){
//the try catch is just a way of getting the bin tree to the spec folder
}
