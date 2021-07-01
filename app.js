

//////////////////////////////////////////////liste des produits ajoutés//////////////////////////////////////////////////////////
let api3 = new Vue({
    el:"#app3",
    data: function (){
        return{       
            listes: []
        }
    },
    mounted() {
        axios.get('http://localhost:3333/listes')
            .then(response => this.pizzas = response.data)
            .catch(error => console.error("Erreur de  jsonserver"));
    },

}) 

//////////////////////////////////////////////ingredient//////////////////////////////////////////////////////////
let api = new Vue({
    el:"#app",
    data: function (){
        return{
            ingredient: [],
            listes:[]
        }
    },
    mounted() {
        axios.get('http://localhost:3333/produit')
            .then(response => this.ingredient = response.data)
            .catch(error => console.error("Erreur de  jsonserver"));
    },
    methods:{
        ajouter: function(produit){
            this.ingredient.push(listes); 
        }
    },
}) 

/////////////////////////////////////////////////////pizza//////////////////////////////////////////////////////////
let api2 = new Vue({
    el:"#app2",
    data: function (){
        return{         
            pizzas: []
        }
    },
    mounted() {
        axios.get('http://localhost:3333/pizzas')
            .then(response => this.pizzas = response.data)
            .catch(error => console.error("Erreur de  jsonserver"));
    },
})

