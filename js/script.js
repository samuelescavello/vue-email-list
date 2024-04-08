const { createApp } = Vue;
createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        getRandomEmail(){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                console.log(resp)
                const newEmail = resp.data.response
                this.emails.push(newEmail)
                console.log(this.emails)
            })
        }
    },
    created(){
        this.getRandomEmail();
    }
}).mount('#app')