new Vue ({
    el:'#app',
    data:{
       name:'',
       age: ''
    },
    methods:{
        logName:function(){
            console.log('you entered your Name');
        },
        logAge:function(){
            console.log('you entered Age');
        }
    }
})