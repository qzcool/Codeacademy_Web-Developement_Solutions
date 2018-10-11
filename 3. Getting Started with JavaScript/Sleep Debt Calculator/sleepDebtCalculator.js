const getSleepHours = day => day === 'Monday'||'Tuesday'||'Wednesday'||'Thursday'||'Friday' ? 6 : 8;

const getActualSleepHours = () => {
  return getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
}

const getIdealSleepHours = idealHours => {
  return idealHours*7;
}

const calculateSleepDebt = idealHours => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealHours=idealHours); // note that the first argument is for function getIdealSleepHours(), the second argument is for function calculateSleepDebt().
  let sleepDebt = actualSleepHours - idealSleepHours;
  if (actualSleepHours===idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');
  } else if (actualSleepHours>idealSleepHours){
    console.log(`The user got more sleep than needed, ${sleepDebt} hours precisely.`);
  } else {
    console.log(`The user should get some rest, ${-sleepDebt} hours at least.`)
  }
}

calculateSleepDebt(idealHours=7.5);
