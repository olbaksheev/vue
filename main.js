function getCases(){
    if (document.cookie == ''){
        return [];
    } else{
        return document.cookie.split(',');
    }
}

var app = {
    data(){
        return{
            title: 'To Do List',
            place: 'Enter the case',
            value: '',
            cases: getCases(),
            maxInput: 42
        }
    },
    methods:{
        changeInput(e){
            this.value = e.target.value;
        },
        addCase(){
            if (this.value != ''){
                this.cases.push(this.value);
                this.value = '';
                document.cookie = this.cases;
            }
        },
        delCase(e){
            this.cases.splice(e.target.id, 1);
            document.cookie = this.cases;
            if (e.target.id == '0'){
                 document.cookie = '';
                console.log(document.cookie);
             } else{
                document.cookie = this.cases;
             }
        }

    }
}, App = Vue.createApp(app).mount('.container');