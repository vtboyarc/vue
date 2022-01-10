const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpeg',
            url: 'https://www.adamcarter.io',
            inventory: 15,
            onSale: true,
            details: [
                '50% cotton',
                '30% wool',
                '20% polyester'
            ],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ]
        }
    }
})