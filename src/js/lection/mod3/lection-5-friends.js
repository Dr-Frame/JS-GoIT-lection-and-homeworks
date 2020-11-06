const friends = [
  { name: 'Ajax', online: false },
  { name: 'Mojo', online: true },
  { name: 'Max', online: true },
  { name: 'Julia', online: false },
];  

console.table(friends);

// ищем друга

const friendFinder = function (allFriends, name) {
  for (const friend of allFriends) {
    //console.log(friend);
    if (friend.name === name) {
      return 'we found him';
    }
  }
  return 'such a friend doesnt exist';
}

console.log(friendFinder(friends, 'Poly'));
console.log(friendFinder(friends, 'Julia'));

// получаем имена всех друзей

const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
}

console.log(getAllNames(friends));

// получаем имена тлько друзей которые онлайн

const getFriendsOnline = function (allFriends) {
  const friendsOnline = [];
  for (const friend of allFriends) {
    if (friend.online) {
      friendsOnline.push(friend.name);
    }
  }

  return friendsOnline;
}

console.log(getFriendsOnline(friends));

// получаем имена тлько друзей которые offline

const getFriendsOffline = function (allFriends) {
  const friendsOnline = [];
  for (const friend of allFriends) {
    if (!friend.online) {  //знак 
      friendsOnline.push(friend.name);
    }
  }

  return friendsOnline;
}

console.log(getFriendsOffline(friends));