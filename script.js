let blog = new Vue ({
    el: '#posts',
    data: {
        titles: ['Starting My Adventure'],
        addTitle: '',
        addPost: '',
        addTime: '',
        addDate: '',
        number: 0,
        posts: [
               { title: 'Starting My Adventure',
                 postt: 'My adventure in indonesia started when I arrived in Jarkarta, Indonesia in October of 2013. It was not like the state of Utah that I had moved from. This was the first time I had been out of the country and I have never been very far from Utah. As soon as i got off the plane the humidity hit me like a wall. This tropical island was nothing like I had ever experienced before.The first night we got some food and it was delicious.',
               }
        ],

    },
    
    methods: {
        
        newPost() {

            this.posts.push({
                title: this.addTitle,
                postt: this.addPost,
            });
            this.titles.push(this.addTitle);
            this.addTitle = '';
            this.addPost = '';
        },
        
        
        
    },
    
    watch: {
        
        
        
    }
    
    
    
    
});

let app = new Vue ({
   el: '#rate',
   data: {
       
       indorate: '',
       results: [],
   },
   
   created() {
       this.getcurrency();
   },
   
   methods: {
       async getcurrency() {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                this.results = response.data;
                this.indorate = response.data.rates.IDR;
            } catch (error) {
                console.log(error);
            }
        },
        getindorate() {
           this.indorate = this.results.rates.IDR;
           console.log('i made it here');
           console.log(this.indorate);
        },
       
   }
});