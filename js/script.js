const { createApp } = Vue;
createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        getRandomEmail(){
            const arrEmail = [];
            for(let i = 0 ; i < 10 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                    console.log(resp)
                    const newEmail = resp.data.response
                    arrEmail.push(newEmail)
                    console.log(this.emails)
                    if(i === 9){
                        this.emails = [...arrEmail]
                    }
                })
            }
           
        }
    },
    created(){
        
    }
}).mount('#app')