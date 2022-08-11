const cocktail = [
    {
        url: 'https://www.mixolopedia.com/wp-content/uploads/2019/11/negroni-vintage-cocktail.jpg',
        nome: 'Negroni',
        prezzo: 6.00
    },
    {
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/glass-of-ice-cooled-spritz-with-orange-slice-in-royalty-free-image-900233638-1533300393.jpg',
        nome: 'Spritz',
        prezzo: 6.00
    },
    {
        url: 'https://blog.giallozafferano.it/thebretellkitchen/wp-content/uploads/2021/02/long-island-ice-tea.jpg',
        nome: 'Long Island',
        prezzo: 6.00
    },
    {
        url: 'https://386689.smushcdn.com/407315/wp-content/uploads/2018/07/Mojito_web_14_019.jpg?lossy=1&strip=1&webp=1',
        nome: 'Mojito',
        prezzo: 6.00
    },
    {
        url: 'https://static.cookist.it/wp-content/uploads/sites/21/2019/05/iStock-801030556.jpg',
        nome: 'Gin Lemon',
        prezzo: 6.00
    },
    {
        url: 'https://www.gustissimo.it/articoli/drink/cocktail-famosi/cuba-libre.jpg',
        nome: 'Cuba Libre',
        prezzo: 6.00
    },
    {
        url: 'https://cdn.ilclubdellericette.it/wp-content/uploads/2021/06/old-fashioned-1280x720.jpg',
        nome: 'Old Fashion',
        prezzo: 6.00
    },
    {
        url: 'https://www.bernabei.it/media/mixology/angelo%20azzurro.jpg',
        nome: 'Angelo Azzurro',
        prezzo: 6.00
    }
]

const COCKTAIL = new Vue({
    el: '#bar',
    data:{
        cocktail,
        allCocktail : 0
    },
    methods:{
        incrementoPrezzo(index){ 
            if(this.cocktail[index].prezzo >= 8){
                return this.cocktail[index].prezzo;
            }else{
                this.cocktail[index].prezzo += 0.25;
            };
            setInterval( () => {
                if(this.cocktail[index].prezzo <= 4){
                    return this.cocktail[index].prezzo;
                }else{
                    this.cocktail[index].prezzo -= 0.25;
                }
            }, 30000)
        },
        
    }
        
});