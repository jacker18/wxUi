// import {LOGIN,ChAT} from "./motations-type";
import {CHAT,LOGIN,ACTIVE} from "./motations-type";
// import api from "../assets/api/api"
import axios from 'axios'
axios.defaults.headers.post['Content-type']='application/x-www-form-urlencoded';

export default {
    async changeChat({
                    commit,state
                }){
        await axios.post('/news/data', 'type=top&key=123456').then(res=>{
            console.log(res,"22fff")
           var code={code:res.data.data};
            commit(CHAT,code)
        })

    },
    async activeIndex({commit,state},active){
        commit(ACTIVE,active)

    }

}
