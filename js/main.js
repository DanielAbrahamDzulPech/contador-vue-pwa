const app = Vue.createApp({
    // data: esto es la realidad pero evitamos por el data() y todo lo demas es JSON
    data() {
        return {
            title: "Contador App - Vue",
            count: 0,
        };
    },
    methods: {
        //disCount() {
            // console.log("dis");
            // this.count = this.count - 1;
            //this.count -= 1;
        //},
        //addCount() {
            // console.log("add");
            //this.count += 1;
        //},

        //haciendo mas pequeño el código, Envio de un parametro
        // modCount(instruction = "add") {
        //     if (instruction === 'dis') this.count -= 1;
        //     else this.count += 1;
        // },

        // Envio de multiples parametros
        modCount(instruction = "add", limit = 1) {
            if (instruction === "dis") this.count -= limit;
            else this.count += limit;
        },
    },
});

// eventos: v-on:click="" o @click=""