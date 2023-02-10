import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

let btnFaker = document.querySelector('button');

btnFaker.addEventListener('click', () => {
    let name = faker.name.firstName();
    let email = faker.internet.email();

    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;

});