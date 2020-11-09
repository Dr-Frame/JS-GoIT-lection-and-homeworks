// пример применения деструктуризации

const profile = {
  nickname: 'Dwayne Jones',
  tag: 'The Rock',
  location: 'Kiex, Ukraine',
  logo:
    'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
  stats: {
    followers: 5603,
    views: 4851,
    likes: 1300,
  },
};

const makeProfile = function ({
  nickname,
  tag,
  location = 'Earth',
  logo,
  stats: { followers, views, likes },
}) {
  return `
  <div>
      <img src="${logo}" alt="logo image" width="100" heigth="100"/>
      <p>${nickname}<span>${tag}</span></p>
      <p>Loaction: ${location}</p>
      <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
      </ul>
    </div>`;
};

const markup = makeProfile(profile);
console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
