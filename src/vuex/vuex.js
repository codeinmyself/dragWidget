import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


let sortApi = [];
let localData = JSON.parse(window.sessionStorage.getItem("localData"));

if(localData !== null){
  sortApi = localData;
}else{
  sortApi = [
    {
      component:"Btn",
      content:{
        text:"1g按钮",
        code:"btn1"
      },
      style:{
        color:"red",
        background:"green"
      },
      editPartShow:true
    },
    {
      component:"Btn",
      content:{
        text:"2g按钮",
        code:"btn2"
      },
      style:{
        color:"green",
        background:"red"
      },
      editPartShow:true
    }
  ]
}


const store = new Vuex.Store({
  state:{
    sortApi,
    editIndex:0,// current index
    editShow:true,//edit show or hide
    partEdit:false,//is partEdit
  },
  mutations:{
    setCommon(state){
      
    },
    sortCp(state,res){
      
    },
    addCp(state, res){
      console.log("添加了");
      state.sortApi.push({
        component:"Btn",
        content:{
          text:"3g按钮",
          code:"btn" + new Date().getTime()
        },
        style:{
          color:"#fff",
          background:"gray"
        },
        editPartShow:true
      })
    },
    deleteCp(state, index){
      console.log(index);
      for (var i = index; i < state.sortApi.length - 1; i++) {
        state.sortApi[i] = state.sortApi[i + 1];
      }
      state.sortApi.pop();
    }
  },
  actions:{}
});

export default store