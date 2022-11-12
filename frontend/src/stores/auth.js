import { defineStore } from "pinia"
import axios from 'axios'
export const useAuth = defineStore('auth', {
    state: ()=>({
    users:{},
}),
persist:{
    paths: ['users']
},
    actions: {
        async login(formData) {
            try {
                const res = await axios.post(
                    import.meta.env.VITE_API_URL + "/api/v1/user/login",
                     formData)

                if (res.status === 200) {
                    // console.log(res.data);
                    this.users = res.data
                    return new Promise((resolve)=>{
                        resolve(res.data)
                    })
                }

            }
            catch (error) {
                if (error.response.data){
                    // this.errors= error.response.data.errors;
                    return new Promise((reject)=>{
                        reject(this.errors= error.response.data.errors)
                    })
                }
            }

        }

    },
})