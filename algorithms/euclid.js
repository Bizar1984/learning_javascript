function greatestCommonDivisor(a, b) {
    
    var Remainder;

    while ((a % b) > 0)  {
      Remainder = a % b;
      a = b;
      b = Remainder;
    }
    return b;
  }


  console.log(greatestCommonDivisor(25000, 1000));
        
   