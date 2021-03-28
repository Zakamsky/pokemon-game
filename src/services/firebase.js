import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBRQ3h7M-Exx_tpEaiSMF18sc87V-TrQ5I",
    authDomain: "pokemon-game-78789.firebaseapp.com",
    databaseURL: "https://pokemon-game-78789-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-78789",
    storageBucket: "pokemon-game-78789.appspot.com",
    messagingSenderId: "853299483693",
    appId: "1:853299483693:web:7a7774d7cceb6e5a4314a4"
};

firebase.initializeApp(firebaseConfig)

class Firebase {
    constructor() {
        this.fire = firebase
        this.database = this.fire.database()

    }
    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }
    offPokemonSoket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`/pokemons/${key}`).set(pokemon)
    }

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key
        this.database.ref('pokemons/' + newKey).set(data).then(cb)

    }

}

const FirebaseClass = new Firebase()

export default FirebaseClass