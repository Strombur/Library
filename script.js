var inputISBN = document.getElementById('inputISBN')
var inputBook = document.getElementById('inputBook')
var inputSername = document.getElementById('inputSername')
var inputText = document.getElementById('inputText')
var inputCategory = document.getElementById('inputCategory')


function createTable(){
    for (i = 0; i < library.length; i++) {
        var tr = document.createElement('tr')
        bookList.appendChild(tr)
        for (k = 0; k < library[i].length; k++) {
            var td = document.createElement('td')
            td.innerHTML = library[i][k]
            tr.appendChild(td)
        }
    }
}

function cleareTable() {
    if (check == false) {
        for (i = 0; i < library.length - 1; i++) {
            bookList.removeChild(bookList.lastChild)
            }
    } else {
        for (i = 0; i < library.length; i++) {
            bookList.removeChild(bookList.lastChild)
            }
    }


}

function showSearchList() {
    searchPlace.hidden = false
    bookList.hidden = true
    buttonBookList.style.backgroundColor = 'white'
    buttonBookList.style.color = '#cccccc'
    buttonSearchList.style.backgroundColor = '#b6b6b6'
    buttonSearchList.style.color = 'black'
}

function showBookList() {
    searchPlace.hidden = true
    bookList.hidden = false
    buttonSearchList.style.backgroundColor = 'white'
    buttonSearchList.style.color = '#cccccc'
    buttonBookList.style.backgroundColor = '#b6b6b6'
    buttonBookList.style.color = 'black'

}

function validateAndAdd() {
    if (inputISBN.value != '' && inputBook.value != '' && inputSername.value != '' && inputText.value != '' && inputCategory.value != '' && inputCategory.value != 'cat') {
        addNewBook()
    }   else {
        alert('Введены не все данные!')
    }

}

function validateAndUpgrade() {
    if (inputISBN.value != '') {
        upgradeNewBook()
    } else {
        alert('Поле ISBN обязательно для ввода!')
    }
}

var btnLogInAdmin = document.getElementById('logInAdmin')
var adminPlace = document.getElementById('adminPlace')
var bookList = document.getElementById('bookList')
var searchList = document.getElementById('searchList')
var searchPlace = document.getElementById('searchPlace')
var buttonBookList = document.getElementById('buttonBookList')
var buttonSearchList = document.getElementById('buttonSearchList')
var admin = 0
var check = false
var point

var library = [
 [1111, 'Фауст', 'Гёте Иоганн Вольфганг', 'Зарубежная поэзия', 'Философская драма для чтения, которая считается главным трудом Иоганна Вольфганга Гёте'],
 [2222, 'Что я делала, пока вы рожали детей', 'Кристин Ньюман', 'Современная комедия', 'Увлекательная автобиографическая книга от работницы телевизионно-комедийного цеха Кристин Ньюман. '],
 [3333, 'Убик', 'Филип Дик', 'Зарубежная драматургия', 'Cложно рассказать об этом фантастическом триллере, который постоянно выдёргивает у тебя из-под ног то один, то другой ковёр, не вдаваясь в подробности'],
 [4444, 'Я подарю тебе солнце', 'Дженди Нельсон', 'Современная драма', 'Красивая, волшебная, наполненная яркими красками и изобретательными образами история о взрослении, понимании себя и любви к искусству.'],
 [5555, 'Виновата ложь', 'Локхарт', 'Зарубежная драматургия', 'Богатая семья отдыхает на частном острове – и пока между взрослыми идёт жёсткий прессинг за имущество, молодёжь просто пытается получать удовольствие и радоваться жизни.'],
 [6666, 'Замок из стекла', 'Джаннетт Уоллс', 'Современная драма', 'Книга рассказывает о бедном детстве автора, во время которого ей приходилось буквально выживать со своими родителями.'],
 [7777, 'Шлюпка', 'Шарлотта Роган', 'Современная ужасы', 'Этот детективный триллер происходит в окружении раскинувшихся во все стороны водных просторов – и на одинокой шлюпке найдётся место и предательствам, и тайнам, и интригам.'],
 [8888, 'Девушка на поезде', 'Пола Хокинс', 'Современная ужасы', 'Сюжет повествует о героине, у которой жизнь катится ко всем чертям. Но однажды в её рутине что-то меняется – каждый день, отправляясь на поезде из точки А в точку Б, она наблюдает из окна за живущей в доме неподалёку от ж/д-путей семьёй – но вдруг она видит не то, что обычно – и решает вмешаться.'],
 [9999, 'Исповедь маски', 'Юкио Мисима', 'Зарубежная проза', 'Вам когда-нибудь было интересно почитать о жизни юноши в годы становления японского фашизма? Или о том, как человек познает свою гомосексуальность? И то, и то есть в первой книге культового Юкио Мисимы, написанной им в 24-летнем возрасте.']
]

var searchResult = []

createTable()


function logInAdmin() {
    if (admin == 0 ) {
        let pass = Number(prompt('Enter Password 12345'))

        if (pass == 12345) {
            admin = 1
            btnLogInAdmin.innerHTML = 'Log out!'

            adminPlace.hidden = false
        } else {
             alert('Invalid password!')
        }

    } else if (admin == 1) {
            btnLogInAdmin.innerHTML = 'Log in by Admin'

            admin = 0
            adminPlace.hidden = true
    }

}

function addNewBook() {
    var inputs = document.getElementsByTagName('input')

    showBookList()

    for (i = 0; i < library.length; i++) {
        if (inputISBN.value == library[i][0]) {
            check = true
            point = i + 1
        }
    }

    if (check == false) {
        library.push([inputISBN.value, inputBook.value, inputSername.value,inputCategory.value, inputText.value])
        for (i = 0; i < inputs.length; i++) {
            inputs[i].value = ''
        }
        inputCategory.value = 'category'
        alert('Книга добавлена')

    } else {
        alert('Книга с такой ISBN уже существует')
    }

    console.log(library)

    cleareTable()

    check = false

    createTable()




}

function searchBook() {
    var inputSearchBook = document.getElementById('inputSearchBook')

    if (searchResult != []) {
            for (i = 0; i < searchResult.length; i++) {
            searchList.removeChild(searchList.lastChild)
            }
    }

    searchResult = []

    for (i = 0; i < library.length; i++) {
        for (k = 0; k < library[i].length; k++) {
            if (inputSearchBook.value == library[i][k]) {
                searchResult.push(library[i])
            }
        }
    }
    console.log(searchResult)
    if (!searchResult[0]) {
        alert('Книга не найдена')
    }

    for (i = 0; i < searchResult.length; i++) {
        var tr = document.createElement('tr')
        searchList.appendChild(tr)
        for (k = 0; k < searchResult[i].length; k++) {
            var td = document.createElement('td')
            td.innerHTML = searchResult[i][k]
            tr.appendChild(td)
        }
    }

    inputSearchBook.value = ''

}

function upgradeNewBook() {

    for (i = 0; i < library.length; i++) {
        if (inputISBN.value == library[i][0]) {
            point = i
            if (inputBook.value != '') {
                library[point][1] = inputBook.value
            }

            if (inputSername.value != '') {
                library[point][2] = inputSername.value
            }

            if (inputText.value != '') {
                library[point][4] = inputText.value
            }

            if (inputCategory.value != 'category') {
                library[point][3] = inputCategory.value
            }


        cleareTable()
        bookList.removeChild(bookList.lastChild)


        createTable()

        var trLine = document.getElementsByTagName('tr')
        trLine[point + 1].style.backgroundColor = '#bbbbbb'

        alert(`Данные по книге с IBSN ${library[point][0]} обновлены`)
        } else {
            console.log('ISBN не обнаружена')
        }
    }

    var inputs = document.getElementsByTagName('input')
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
    inputCategory.value = 'category'


}
