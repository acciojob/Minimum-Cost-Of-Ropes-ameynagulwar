function connectRopes(ropes) {
  // Create a min-heap to keep track of smallest ropes
 
      let sum = 0;
	for(let i = 0; i < ropes.length; i++){
		sum += ropes[i];
	}

  return sum;
}

