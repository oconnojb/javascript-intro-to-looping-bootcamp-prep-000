function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if(i=1){
      array.push('i am 1 strange loop')
    }
    else{
      array.push('i am $(i) strange loop')
    }
    return array
}
function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  if(n=0){
    console.log('done')
  }
}
function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
}
