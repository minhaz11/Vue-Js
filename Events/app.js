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
            this.x =event.offsetX;
            this.y =event.offsetY;
        }
    }
})