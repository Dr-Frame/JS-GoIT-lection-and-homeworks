// функция findSmallestNumber поиска самого маленького элемента массива

const numbersArray = [101, 25, 36, 15, 38, 49, 52, 9];

const seacrhSmallest = function (numbers) {

  let theSmallestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {

      if (numbers[i] < theSmallestNumber) {
         theSmallestNumber = numbers[i];
      }
    }
    return theSmallestNumber;
}

const r1 = seacrhSmallest(numbersArray);
console.log(r1);

