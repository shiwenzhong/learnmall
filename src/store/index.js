import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
    state:{
        cartList:{}
    },
    mutations:{
        addCart(state,payload){
            if(state.cartList[payload.id]!=null){
                let num = state.cartList[payload.id].count+=1
                Vue.set(state.cartList[payload.id],'count',num)
            }else{
                Vue.set(state.cartList,payload.id,payload.info)
            }
        },
        change(state,iid){
            let check = !state.cartList[iid].chooseI
            // state.cartList[iid].chooseI = check
            Vue.set(state.cartList[iid],'chooseI',check)
        },
        allchange(state,paylod){
           const length = store.getters.cartList.filter(item=>!item.chooseI).length;
           if(length>0){
                for(let key in state.cartList){
                    Vue.set(state.cartList[key],'chooseI',true)
                }
           }else{
                for(let key in state.cartList){
                    Vue.set(state.cartList[key],'chooseI',false)
                }
           }
        }
    },
    actions:{

    },
    getters:{
        cartLength(){
            return  Object.keys(store.state.cartList).length
        },
        cartList(){
            const lists = []
            for(let key in store.state.cartList){
                lists.push(store.state.cartList[key])
            }
            return lists;
        }
    }
})

export default store;