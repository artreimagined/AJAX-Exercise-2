const testNum = (num) => new Promise ((resolve, reject) => {
  if (num > 50) {
    resolve(num +' is greater than fifty');
  } else {
    reject(num +' is less than fifty');
  }
});

testNum(55)
    .then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.log(error);
})
