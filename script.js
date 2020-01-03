let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Aamir, you have made a very first vue app'
    }
});

let app2 = new Vue({
    el: '#app2',
    data: {
        seen: true
    }
});

let app3 = new Vue({
    el: '#app3',
    data: {
        todos: [
            { text: 'Learn HTML & CSS'},
            { text: 'Learn JavaScript and Vue'},
            { text: 'Build awesome vue project'}
        ]
    }
});

let app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Hallo Aamir, Guten Tag!'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

let app5 = new Vue({
    el: '#app5',
    data: {
        firstname: "Aamir",
        lastname: "Mohammed"
    },
    methods: {
        myDetails: function(){
            return this.firstname +" "+ this.lastname +" "+ "is a Junior Data Scientist"
        }
    }
});