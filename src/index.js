const fibonacci = (n) =>{
  if(n <= 0 || !n){
     throw ('Wrong number');
  }
    let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
  console.log(fibonacci(0));
