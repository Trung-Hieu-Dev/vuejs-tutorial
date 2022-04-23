const app = Vue.createApp({
    data() {
        return {
            name: 'Trung Hieu',
            age: 35,
            image: 'https://images.unsplash.com/photo-1570804439979-660b22341c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
        }
    },
    methods: {
        addFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    },
})

app.mount('#assignment')