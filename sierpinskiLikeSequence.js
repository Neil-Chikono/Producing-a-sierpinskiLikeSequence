function sierpinskiLikeSequence(orginalArray, size = 16) {

const result = []; 

// calulate the dimesions for a triangular arragmenent

const height = math.ceil((-1 + math.sqrt(1 + 8 * size)) / 2); 

for ( let y = 0; y < height; y++) { 
for (let x = 0; x <= y; x++) { 
if result.length >= size) break; 

 // Sierpinski rule: Pascal's triangle modulo 2
            // Cell is non-zero if binomial coefficient (y choose x) is odd

if(( x & (~y)) === 0) { 

const index = (x+y) % orginalArray.length; 
result.push(orginalArray[index]);

} else { 

result.push(0); // Empty/filler value



}

}


}

  return result.slice(0, size);

}

const myArray = [63, 61, 65, 70, 65, 68, 70, 80, 71, 73, 61, 59, 68, 70, 73, 63, 68, 66];


// Also log to console for verification
console.log(sierpinskiLikeSequence(myArray));
