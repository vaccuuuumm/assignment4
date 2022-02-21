
document.querySelector('#1').onclick = mySort();

function mySort(){
  let nav = document.querySelector('#demo')
  for(int i = 0; i <nav.children.lenght; i++){
    for(int j = i; j< nav.children.lenght; j++){
      if(+nav.children[i].getAttribute('pr') > +nav.children[j].getAttribute('pr')){
        replecedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}
function insertAfter(elem, refElem){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
