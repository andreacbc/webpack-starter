import '../css/components.css';
//import webpacklogo from '../assets/img/webpack-logo.png';

export const greet = (name) => {
    console.log('Creating label h1');
    const h1 =  document.createElement('h1');
    h1.innerText = `Hello, ${ name } !!`;
    document.body.append(h1);

/*     console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img); */

}