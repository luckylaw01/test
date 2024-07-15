
const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if(!extractedId){
        console.log("Could not retrieve id");
    }
    else{
        console.log('Got it: ' + extractedId);
    }
});
