new Vue ({
    el:'#app',
    data:{
        name:'Minhaz',
        job: 'software Engineer',
        website:'www.facebook.com',
        websiteTag: '<a href="facebook.com">My profile</a>'
    },
    methods:{
        greet:function(time){
            return 'Good'+' '+ time+' '+this.name;
        }
    }
})