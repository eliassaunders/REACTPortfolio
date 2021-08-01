const name = document.querySelector('.name-input')
const email = document.querySelector('.email-input')
const body = document.querySelector('.body-text')

function verify(event) {
    event.preventdeafault();
    console.log('hello')

    if (!name || !email || !body) {
        alert('You need to complete all fields.')
    }
    if (email !== /.+\@.+\..+/) {
        alert('You need to enter a valid email address.')
    }
}

document.querySelector('.buttun').addEventListener('click', verify);