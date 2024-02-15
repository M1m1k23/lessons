"use strict"
// Задача №1
// Отримати в константу елемент <body>
// const bodyElement = document.body
// console.log(bodyElement);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
// function addList(liItem = 2) {
//     const ulItem = document.createElement("ul");
//     let liElemt = ``;
    
//     for (let i = 1; i <= liItem; ++i) {
//         liElemt += `<li>Список під №${i}</li>`;
//     }
//     ulItem.insertAdjacentHTML("afterbegin", liElemt);
//     bodyElement.insertAdjacentElement("afterbegin", ulItem) 
// }
// addList(4)
// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// bodyElement.classList.add('loaded')
// if (bodyElement.classList.contains('loaded')) {
//     bodyElement.style.color = 'green'
// }

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
// const itemElement = document.querySelectorAll('.item')
// if (itemElement.length) {
//     itemElement.forEach((item, index) => {
//         item.classList.add("active");
//         item.textContent = `Елемент №${index + 1}`;
//     });
// }

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
// const button = document.querySelector('.button')
// function scrollToBlock(element) {
//     element.scrollIntoView({
//         block: "center",
//         behavior: "smooth"
//     })
// }
// scrollToBlock(button)

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Потім отримати значення атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// const link = document.querySelector('.link')
// if(link.dataset.value < 200) {
//     link.style.color = "red"

// }
// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

document.addEventListener('click', documentAction);

function documentAction(e) {
    const targetElement = e.target
    if(targetElement.closest('.page__item')) {
        targetElement.classList.toggle('active')
    }
}
// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoad)

function pageLoad() {
    document.body.classList.add("opacity")
}

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector('.header')
const footer = document.querySelector('.footer')

header.addEventListener("mouseenter", function() {
    footer.style.backgroundColor = '#09884d'
})
header.addEventListener("mouseleave", function() {
    footer.style.backgroundColor = ''
})

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// const options = {
// 	root: null,
// 	rootMargin: "0px 0px 0px 0px",
// 	threshold: 1.0
// }
// const callback = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			const item = entry.target;
// 			changeContent(item);
// 			observer.unobserve(item);
// 		}
// 	});
// }

// const itemEl = document.querySelector("div.item");
// if (itemEl) {
// 	const observer = new IntersectionObserver(callback, options);
// 	observer.observe(itemEl);
// }

// function changeContent(element) {
// 	const delay = parseInt(element.dataset.delay);
//     const end = parseInt(element.dataset.end)
// 	let i = 1;

// 	setInterval(() => {
// 		element.textContent = `${i}`
// 		++i;
// 	}, delay);
// }

function setElementInterval(element) {
    const startCounter = parseInt(element.dataset.start);
    const endCounter = parseInt(element.dataset.end);
    const delayCounter = parseInt(element.dataset.delay);
  
    let counter = startCounter;
    let timer = setInterval(() => {
      if (counter === endCounter) {
        clearInterval(timer);
      }
      element.textContent = counter;
      ++counter;
    }, delayCounter);
  }
  
  let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3,
  };
  
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      const targetElement = entry.target;
      if (entry.isIntersecting) {
        setElementInterval(targetElement);
        observer.unobserve(targetElement);
      }
    });
  };
  
  let observer = new IntersectionObserver(callback, options);
  
  let target = document.querySelector(".item");
  observer.observe(target);