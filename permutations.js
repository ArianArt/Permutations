function permutations(string) {
  let n = string.length;
  result = [];
  k = 0;
  permute(string, 0, n-1);
  return result;
}
let result = [];
let k = 0;
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
function swap(string, i, j) {
  let temp;
  temp = string[i];
  string = string.replaceAt(i, string[j]);
  string = string.replaceAt(j, temp);
  
  return string;
}
function contains(list, string) {
  for(let i in list){
    if(list[i] == string) {
      return true;
    }
  }
  
  return false;
}

function permute(string, l, r) {
    if (l == r) {
      if(!contains(result, string)){
        result[k] = string;
        k++;
      } 
    } else {
        for (var i = l; i <= r; i++)
        {
            string = swap(string, l, i);
            permute(string, l + 1, r);
            string = swap(string, l, i);
        }
    }
}
