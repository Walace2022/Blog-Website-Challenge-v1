const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const homeContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis accusamus excepturi assumenda deleniti praesentium nesciunt soluta consectetur iusto saepe obcaecati est molestias. Enim exercitationem iusto sapiente ullam vero totam?";
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iste. Et, maxime, minima voluptatibus nobis aliquid dicta ratione molestiae, atque magni fuga facilis expedita dolore minus unde dignissimos iste optio!";
const contactContent = "Diferente Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iste. Et, maxime, minima voluptatibus nobis aliquid dicta ratione molestiae, atque magni fuga facilis expedita dolore minus unde dignissimos iste optio!";



app.get('/', (req,res) => {
    res.render('home',{homeContent:homeContent});
})

app.get('/about', (req,res) => {
    res.render('about', {aboutContent:aboutContent});
})

app.get('/contact', (req,res) => {
    res.render('contact',{contactContent:contactContent});
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})