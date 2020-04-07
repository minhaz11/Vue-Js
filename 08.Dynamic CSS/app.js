new Vue ({
    el:'#app',
    data:{
       available:false,
       nearby:false
    },
    methods:{
        
    },
    computed:{
        compClass:function(){
            return{
            available:this.available,
            nearby: this.nearby
        }
        }
    }
})