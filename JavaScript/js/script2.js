// creating Object
// - by using object literal
// - by using JSON Syntax

function function1() {
    // create a new object
    const person = {
        name: 'radhika',
        address: 'Sangli',
        phone: '+914356439'
    }

    console.log(`typeof of person: ${typeof person}`)
    console.log(person)
}

function1()

function function2() {
    const mobile = {
        // key: value (string)
        model: 'Redmi note 10 s',
        company: 'Xiomi',

        //key: value (number)
        price: 15000,

        //key: value (object)
        configuration: {
            ram: '6GB',
            storage: '128GB'
        },

        //key: value (boolean)
        available: true,

        //key: value (array)
        features: ['Quad camera','better UI','light weight']
    }

    console.log(mobile)
}

function2()

function function3(fname, lname,address,age) {
    const person1 = {
        fname: fname,
        lname: lname,
        address: address,
        age: age
    }

    //shorthand
    const person2 = {
        fname, lname, address,age
    }

    console.log(person1)
    console.log(person2)
}

function3('Elon','Musk','USA',50)

//Object properties
function function4() {
    const person1 = {
        firstName: 'Steve',
        lastName: 'Jobs'
    }

    //accessing properties using dot (.) syntax
    console.log('accessing properties using dot (.) syntax')
    console.log(`first name: ${person1.firstName}`)
    console.log(`last name: ${person1.lastName}`)

    //accessing properties [] syntax
    console.log('accessing properties [] syntax')
    console.log(`first name: ${person1['firstName']}`)
    console.log(`last name: ${person1['lastName']}`)
}

function4()

//adding new properties
function function5() {
    const person1 = {
        firstName: 'Steve',
        lastName: 'Jobs'
    }

    //accessing properties using dot (.) syntax
    person1.company = 'Apple'
    console.log(person1)

    //accessing properties [] syntax
    person1['companyProducts'] = 'iPhone'
    console.log(person1)
}

function5()

//inspecting properties
function function6() {
    const person = {
        name: 'person1',
        age: 25,
        address: 'Sangli',
        email: 'abc@example.com'
    }

    console.log(person)

    //get all properties/keys of an object
    const keys = Object.keys(person)
    console.log(keys)

    //iterate over the array and get all the values
    for (const key of keys) {
        console.log(`key = ${key}, value = ${person[key]}`)
    }
}

function6()

function function7() {
    const person = {
        name: 'person',
        age: 40,
        address: 'Sangli',
        email: 'abc@example.com'
    }

    console.log(person)

    //get all the properties

    for( const key in person) {
        console.log(`key = ${key}, value = ${person[key]}`)
    }
}

function7()