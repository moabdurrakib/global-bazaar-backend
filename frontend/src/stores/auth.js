import { defineStore } from "pinia"
import axiosInstance from "@/services/AxiosService"
export const useAuth = defineStore('auth', {
    state: () => ({
        users: {},
        loading:false,
    }),
    persist: {
        paths: ['users']
    },
    actions: {
        async login(formData) {
            try {
                const res = await axiosInstance.post("/user/login", formData)

                if (res.status === 200) {
                    // console.log(res.data);
                    this.users = res.data
                    return new Promise((resolve) => {
                        resolve(res.data)
                    })
                }

            }
            catch (error) {
                if (error.response.data) {
                    // this.errors= error.response.data.errors;
                    console.log(error)

                    return new Promise((reject) => {
                        reject(error = error.response.data.errors)
                    })
                }
            }

        },
        
        async logout() {
            this.loading= true;
            try{
                const res = await axiosInstance.post("/user/logout");
                if(res.status === 200){
                    this.users= {}
                    return new Promise((resolve)=>{
                        resolve(res.data)
                    })
                }
            }catch(error){

            }finally{
                this.loading =false;
            }
        },

    },
})


