import Vue from "vue";
import Vuex from "vuex";
import ComponentsData from "@/componentsData/componentsData.js";
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
        code:"btn0"
      },
      style:{
        color:"#333333",
        background:"#409EFF"
      },
      editPartShow:false
    },
    {
      component:"Btn",
      content:{
        text:"2g按钮",
        code:"btn1"
      },
      style:{
        color:"#409EFF",
        background:"#333333"
      },
      editPartShow:false
    }
  ]
}


const store = new Vuex.Store({
  state:{
    sortApi,
    editIndex: 0,// current index
    editShow: true,//edit show or hide
    partEdit: false,//is partEdit
  },
  mutations:{
    setCommon(state,obj){
      console.log(obj);
      if(obj.flag){
        
        state.sortApi[state.editIndex].editPartShow = false;
        state.editIndex = obj.index;
        state.sortApi[state.editIndex].editPartShow = true;
      }
    },
    sortCp(state,res){
      
    },
    addCp(state, res){
      let cloneNode = res.clone;
      console.log(cloneNode.attributes.type.value);
      
      state.sortApi[state.editIndex].editPartShow = false;
      state.editIndex = state.sortApi.length;
      let mCP = ComponentsData[cloneNode.attributes.type.value]();
      mCP.content.code = cloneNode.attributes.type.value + state.sortApi.length;
      console.log(mCP.content.code);
      state.sortApi.push(mCP);
      
    },
    deleteCp(state, index){
      console.log(index);
      for (var i = index; i < state.sortApi.length - 1; i++) {
        state.sortApi[i] = state.sortApi[i + 1];
      }
      state.sortApi.pop();
      state.editIndex = state.sortApi.length - 1;
    }
  },
  actions:{}
});

export default store