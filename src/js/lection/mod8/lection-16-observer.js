/* Intersection observer API
Callback params
Options: root, rootMargin, threshold */

// `Box ${entry.target.textContent} пересекает Root`

//io класс, создаем его экземпляр

// io принимает два параметра - callback функцию и опции
//создадим:

const onEntry = (entries, observer) => {
  // entries массив обьектов
  // obsever для отсановки регистраци события (раз прогрузило и все)
  // есть два метода: .unobserve()  .disconnect()
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} пересекает Root`);
      observer.disconnect();
    }
  });
};

const options = {
  // отступ, когда типо видит этот элемент и запускает колбек
  rootMargin: '100px',
  // точки при которых будет запускать колбек функцию
  threshold: [0, 0.5],
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector('.js-box');

io.observe(boxRef);

// В старых браузерах НЕОБХОДИМ ПОЛИФИЛ
