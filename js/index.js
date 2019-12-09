const user = [
    {
        id: 456,
        name: 'Gordon Ramsay',
        img: 'img/ramsay.jpg'
    }, {
        id: 457,
        name: 'Sally Roberts',
        img: 'img/sally.jpg'
    }, {
        id: 458,
        name: 'Tom Horton',
        img: 'img/tom.jpeg'
    }
]
 
const message = [
    {
       id: 1,
       from: {
          id: 123,
          name: 'Ada Lovelace',
          img: 'img/123.jpg'
       },
       time: {
          date: 1,
          month: 8,
          year: 1843,
          hour: 14,
          minute: 59
       },
       text: `You should check out this little script I just wrote. 😂 lol`
    }
]

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
}

document.getElementById(`btnOthers`).addEventListener('click', event => {
    document.getElementById(`others`).classList.toggle('open');
});

function getOthersAsHtml(user) {
    return `
          <ul>
            <li class="usercard"><img src="${user.img}"><h3>${user.name}</h3><h4>Time</h4><p>Message preview</p></li>
          </ul>`;
}

function renderConvo(arr) {
    const arrOfHtml = arr.map(getOthersAsHtml);
  
    const stringOfHtml = arrOfHtml.join(`\n`);

    document.getElementById(`others`).innerHTML = stringOfHtml;
}
  
renderConvo(user)
