import { defineStore } from "pinia"
import axiosInstance from "../services/axiosService"


export const useAuth = defineStore('auth', {
    state: () => ({
        user: {},
        loading: false,
    }),
    persist: {
        paths: ['user']
    },
    actions: {
        async login(formData) {
            try {
                const res = await axiosInstance.post("/user/login", formData)
                console.log(res)

                if (res.status === 200) {
                    // console.log(res.data);
                    this.user = res.data 
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
        async logout(){
            this.loading= true;
            try{
                const res = await axiosInstance.post("/user/logout");
                if(res.status === 200){
                    this.user= {};
                    return new Promise((resolve)=>{
                        resolve(res.data)
                    });
                }
            }catch(error){

            }finally{
                this.loading =false;
            }
        },

    },
})
