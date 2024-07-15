// const storeBtn = document.getElementById('store-btn');
// const retrBtn = document.getElementById('retrieve-btn');

// storeBtn.addEventListener('click', () => {
//     const userId = 'u123';
//     const user = {name: 'Lucky', age: 30}
//     document.cookie = `uid=${userId}`;
//     document.cookie = `user=${JSON.stringify(user)}`
// });


// retrBtn.addEventListener('click', () => {
//     console.log(document.cookie)
// });

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Lucky',
    age: 30,
    hobbies: ['code', 'teaching']
};

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    if(extractedId){
        console.log('Got it! It is ' + extractedId + ' and the user is ');
        console.log(extractedUser);
    }
    else{
        console.log('you sure nigga?');
    }
})
