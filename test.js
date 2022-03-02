function rot13(str) {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!';
      const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!';
      let encoded = '';
      for (let i=0; i < str.length; i++) {
          const index = input.indexOf(str[i]);
           encoded += output[index];
      }

      
  
     if(encoded.includes("undefined")){
         return encoded
     }else{
         return encoded
     }
  }
  
  console.log(rot13("SERR CVMMN!"))