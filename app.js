const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');


const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const homeContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis accusamus excepturi assumenda deleniti praesentium nesciunt soluta consectetur iusto saepe obcaecati est molestias. Enim exercitationem iusto sapiente ullam vero totam?";
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iste. Et, maxime, minima voluptatibus nobis aliquid dicta ratione molestiae, atque magni fuga facilis expedita dolore minus unde dignissimos iste optio!";
const contactContent = "Diferente Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iste. Et, maxime, minima voluptatibus nobis aliquid dicta ratione molestiae, atque magni fuga facilis expedita dolore minus unde dignissimos iste optio!";

let posts = [];

let stringTruncate = (str, length) =>{
    let dots = str.length > length ? '...':'';
    return str.substring(0,length)+dots;
}
 
app.get('/', (req,res) => {
    res.render('home',{homeContent:homeContent,posts:posts});
})

app.get('/about', (req,res) => {
    res.render('about', {aboutContent:aboutContent});
})

app.get('/contact', (req,res) => {
    res.render('contact',{contactContent:contactContent});
})

app.get('/compose', (req,res) => {
    res.render('compose');
})

app.get('/posts/:title', (req,res) => {
    const currentTitle= _.lowerCase(req.params.title);

    posts.forEach(post =>{
        const postTitle = _.lowerCase(post.title);

        if(currentTitle === postTitle){
         res.render('post',{post:post});
         }
    })
})

app.post('/', (req,res) => {

    let post = {
        title: req.body.postTitle,
        url:_.kebabCase(req.body.postTitle),
        content: req.body.postContent,
        truncateContent: _.truncate(req.body.postContent,{length:100})
    };
    posts.push(post);

    res.redirect('/');
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})