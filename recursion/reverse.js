// reverse
// Write a recursive function called reverse which accepts a string 
// and returns a new string in reverse.

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

function reverse(str){
  let reversed = '';
  for (char of str){
    reversed = char + reversed;
  }
}
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'