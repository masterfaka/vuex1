import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        /*por ser Array incluye indice DUH*/
        frutas: [
            { nombre: "platano", cant: 0 },
            { nombre: "Mnazana", cant: 0 },
            { nombre: "mandarina", cant: 0 },
        ],
        idFoto: 1
    },
    mutations: {
        aumentar(state, indice) {
            /*o Pasar STATE poRPARAMETRO en vezx de usar this*/
            state.frutas[indice].cant++;
        },
        reiniciarFrutas(state) {
            state.frutas.forEach(item => { item.cant = 0 })
        },
        aumentarIdF(state) {/*siguiente id Foto*/
            state.idFoto++;
        },
        decreIdF(state) {
            state.idFoto--;
        },
        reiniciarG(state) {
            state.idFoto = 0;
        }
    },
    actions: {}
}); 