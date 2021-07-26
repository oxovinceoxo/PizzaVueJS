

//////////////////////////////////////////////liste des produits ajoutés//////////////////////////////////////////////////////////
let api3 = new Vue({
    el:"#app3",
    data: function (){
        return{       
            listes: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/listes')
            .then(response => this.listes = response.data)
            .catch(error => console.error("Erreur de  jsonserver"));
    },

}) 

//////////////////////////////////////////////ingredient//////////////////////////////////////////////////////////
let api = new Vue({
    el:"#app",
    data: function (){
        return{
            ingredient: []
            
   
        }
    },
    mounted() {
        axios.get('http://localhost:3000/produit')
            .then(response => this.ingredient = response.data)
            .catch(error => console.error("Erreur de  jsonserver"));
    },
    methods:{
        ajouter: function(produit){
            /* console.log(api3)*/
          api3.listes.push(produit);
        }
    },
}) 

/////////////////////////////////////////////////////pizza//////////////////////////////////////////////////////////
let api2 = new Vue({
    el:"#app2",
    data: function (){
        return{         
            pizzas: [],
            test: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/pizzas')
            .then(response => this.pizzas = response.data)
            .catch(error => console.error("Erreur de  jsonserver"));
    },
    /*methods:{
        getpizza: async function(){
            const reponse = await fetch('http://localhost:3000/pizzas')
            this.pizzas.ingredient1 = this.test.nom
            this.pizzas = await reponse.json();
        }
    }*/
})

