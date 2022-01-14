const app = Vue.createApp({
    data() {
        return {
            cart: 0,
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
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg' }
            ]
        }
    },
    methods: {
        // using this to increment the cart count, above, when the add to cart button is clicked
        // back in the html, is is being used like this:
        // <button class="button" v-on:click="addToCart">Add to Cart</button>
        // the v-on:click is a listener, listening for events, in this case, for click events
        // when that happens, it calls the method below
        // v-on has a shorthand, the @ symbol. so can make that html line be this:
        // <button class="button" @click="addToCart">Add to Cart</button>
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            // added the if check so that it won't do negative items in cart. otherwise do nothing when clicked if zero
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage // what is getting passed in the method param 
        }
    }
})