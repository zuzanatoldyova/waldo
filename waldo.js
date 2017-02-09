// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(x) {
  console.log(`Found him at index ${x}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);