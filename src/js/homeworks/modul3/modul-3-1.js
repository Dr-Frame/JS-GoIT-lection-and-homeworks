let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

const userAdd = function (newMood, isFullTime, replaceHobby, isPremium) {
  user.mood = newMood;
  user.hobby = replaceHobby;
  user.premium = isPremium;
  user['full time'] = isFullTime;
  return user;
}


console.table(userAdd('happy', true, 'skydiving', false));
 
const keys = Object.keys(user);
// Write code under this line
let newArray = [];
for (const key of keys) {
  newArray.push(`${key} : ${user[key]}\n`);
  message = newArray.join('');
};
console.log(message)
 
//console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */