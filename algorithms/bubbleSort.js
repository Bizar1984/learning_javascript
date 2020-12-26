const array = [8, 6];
const array_two = [4, 2];
const combined = [...array, ...array_two];

bubbleSort = (array) => {
  
  let swapped = false 	
  do {
	swapped = false
    array.forEach((current, i) => {

      
      if (current > array[i + 1]) {
        const temp = current

        console.log(current);
        // console.log(swapped)
        
        
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
      
    })
  } while(swapped)
  
  return array;
}



console.log(bubbleSort(combined));

// same thing, different logic
function bubble(arr) {
    var len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++)
                {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                    }
                }
                return arr;
        }
}







 





