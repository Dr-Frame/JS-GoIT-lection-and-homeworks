function checkIfCanAccessContent(subType) {
  const canAccessContent = 'vip' === subType || 'pro' === subType; // дополни эту строку

  return canAccessContent;
}

console.log(checkIfCanAccessContent('pro')); //возвращает true.

console.log(checkIfCanAccessContent('starter')); //false
console.log(checkIfCanAccessContent('vip')); //true
console.log(checkIfCanAccessContent('free')); //false
