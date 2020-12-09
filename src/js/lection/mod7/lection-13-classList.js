const activeLinkRef = document.querySelector('.nav__link--active');
console.log(activeLinkRef);

console.log(activeLinkRef.classList.contains('nav__link'));

activeLinkRef.classList.add('nav__link--red');
console.log(activeLinkRef.classList);

activeLinkRef.classList.remove('nav__link');
console.log(activeLinkRef.classList);
