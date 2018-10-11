// Write your function here:
const lifePhase = age => {
  switch (true) { // use true instead of age here for comparison
    case 0<age && age<3:
      return 'baby';
      break;
    case 4<age && age<12:
      return 'child';
      break;
    case 13<age && age<19:
      return 'teen';
      break;
    case 20<age && age<64:
      return 'adult';
      break;
    case 65<age && age<140:
      return 'senior citizen';
      break;
    default:
      return 'This is not a valid age.'
      break;
  }
}


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(45)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!
