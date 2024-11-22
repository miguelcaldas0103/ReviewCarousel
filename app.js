const user_one = {
    id: '1',
    name: 'John',
    review: 'The application was really awesome!',
    image: 'img/user1.png'
}

const user_two = {
    id: '2',
    name: 'Hannah',
    review: 'The carousel is a funny implementation!',
    image: 'img/user2.png'
}

const user_three = {
    id: '3',
    name: 'Isabel',
    review: 'Brilliant idea!',
    image: 'img/user3.png'
}

const users = [user_one, user_two, user_three]

const review_container = document.querySelector('.review') // Single element
const next_button = document.querySelector('.next-btn')
const prev_button = document.querySelector('.prev-btn')
const random_button = document.querySelector('.random-btn')
const image = document.querySelector('.img-container img') // Targetting the <img> inside
const username = document.querySelector('#username')
const review = document.querySelector('#review')

let index = 0;

function updateUser(user) {
    image.src = user.image;
    review.textContent = user.review;
    username.textContent = user.name;
}

next_button.addEventListener('click', () => {
    index = (index + 1) % users.length; // Circular navigation
    updateUser(users[index]);
    console.log('Current Index:', index, 'User:', users[index]);
})
prev_button.addEventListener('click', () => {
    index = (index - 1 + users.length) % users.length; // Ensure positive value
    updateUser(users[index]);
    console.log('Current Index:', index, 'User:', users[index]);
})

random_button.addEventListener('click', () => {
    let randomIndex;
    // while loop to avoid picking the same user again.
    do {
        randomIndex = Math.floor(Math.random() * users.length);
    }
    while (randomIndex === index) {
        index = randomIndex;
        updateUser(users[randomIndex]);
        console.log('Current Index:', index, 'User:', users[index]);
    }
})