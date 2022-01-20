const app = new Vue({
    el: '#app',
    data: {
        dischi: []
    },
    created(){
        axios.get("http://localhost/php-ajax-dischi/backend.php")
        .then( (response) => {
            this.dischi = response.data;
            console.log(response.data);
        });
    }
});