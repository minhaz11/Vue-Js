new Vue ({
    el:'#app',
    data:{
        name:'Minhaz',
        job: 'software Engineer'
    },
    methods:{
        greet:function(time){
            return 'Good'+' '+ time+' '+this.name;
        }
    }
})