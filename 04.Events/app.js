new Vue ({
    el:'#app',
    data:{
        name:'Minhaz',
        age: 24,
        x:0,
        y:0
    },
    methods:{
        add:function(inc){
            this.age+=inc;
        },
        sub:function(dec){
            this.age-=dec;
        },
        updateXY:function(event){
            // console.log(event)
            this.x =event.screenX;
            this.y =event.screenY;
        }
    }
})