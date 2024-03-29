// Написать функцию Debounce
const fetchUrl = function (url) {
    console.log(`fetching ${url}...`, this.firstName);
}

const user = {
    firstName: 'Bob',
}

// function debounce(callback, delay) {
//     let myTimeout = null;
//     return (...args) => {
//         if (myTimeout) {
//             clearTimeout(myTimeout)
//         }
//         myTimeout = setTimeout(() =>{
//             callback(...args)
//         }, delay)
//     }
// }

function debounce(callback, delay) {
    let myTimeout = null;
    return (...args) => {
        if (myTimeout) {
            clearTimeout(myTimeout);
        }
        myTimeout = setTimeout((...args) => {
            callback()
        }, delay)
    }

}

const fetching = debounce(fetchUrl.bind(user), 300);
fetching(1)
fetching(2)
fetching(3)
fetching(4)
fetching(5)
