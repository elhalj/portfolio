const li = `
                <li><a href="#index.html">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">A Propos</a></li>`
const ul = document.querySelector('ul')
ul.innerHTML = li
const logo = `<p class ="langue">Languages connus</p>
            <nav>
                <p><img src="images/logo/html5.jpg"></p>
                <p><img src="images/logo/css.jpg"></p>
                <p><img src="images/logo/JavaScript.jpg"></p>
                <p><img src="images/logo/python.jpg"></p>
            </nav>`
const ajout = document.querySelector('footer')
ajout.innerHTML = logo
const affiche = () => {
    alert('bonjour')
}