new Vue ({
    el:'#app',
    data:{
       
       age: 20,
       a:0,
       b:0
    },
    methods:{
        // addToA:function(){
        //    return this.a+this.age;
        // },
        // addToB:function(){
        //   return  this.b+this.age;
        // }
    },
    computed:{
        addToA:function(){
            console.log('add to a')
            return this.a+this.age;
         },
         addToB:function(){
             console.log('add to b')
           return  this.b+this.age;
         }
    }
})