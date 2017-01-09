const App = {
  clickCounter: 0,
  quotes: [],
  getQuote() {
    const URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies'
    fetch(URL, {
      method: 'GET',
      headers: new Headers ({'X-Mashape-Key': 'VX2byySRsJmshOGnZtVwLVW1ymWwp143BhvjsnEhKJnBQDcrrb'})
    }).then(function(response) {
      return response.json();
    }).then(function(data){this.quotes.push(data)}.bind(this))
   },

  handleClick() {
    let targetDiv = document.getElementById('quote');
    let author = document.getElementById('author');
    this.getQuote();
    targetDiv.innerHTML = this.quotes[this.clickCounter].quote;
    author.innerHTML = '- ' + this.quotes[this.clickCounter].author;
    this.setupTweet()
    this.setRandomColors()
    this.clickCounter++
  },

  getRGBvalue() {
    return Math.floor(Math.random() * 255) - 100;
  },

  setRandomColors() {
    let backgroundColor = document.body;
    backgroundColor.style.backgroundColor = `rgb(${this.getRGBvalue()},${this.getRGBvalue()} ,${this.getRGBvalue()})`
  },

  setupTweet() {
    let content = document.getElementById('quote').innerHTML;
    let share = document.querySelector('a')
    share.setAttribute('href', `https://twitter.com/share?text=${content}`)
  }
}

window.onload = App.getQuote()
