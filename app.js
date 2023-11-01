const app = Vue.createApp({

    data(){

        return{
            x: 0,
            y: 0,
            hasil: null
        }
    },

    methods: {
        tambah(){
            this.hasil = this.x + this.y;
        },

        kurang(){
            this.hasil = this.x - this.y;
        },

        kali(){
            this.hasil = this.x * this.y;
        },

        bagi(){
            this.hasil = this.x / this.y;
        }
    }


});

app.mount('#app');