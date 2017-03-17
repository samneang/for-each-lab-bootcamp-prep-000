function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  emotionAdj = ["sad", "happy", "depressed"];
  emotionAdj.forEach(callback);
  return emotionAdj;
}

function doToArray(array, callback){
  array.forEach(callback);
}
