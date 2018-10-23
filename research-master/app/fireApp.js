let news = [];


// Initialize Firebase


db.collection('news').orderBy("date","desc").limit(10).get().then((snapshot) => {
  console.log(snapshot);
  snapshot.docs.forEach(snapshot => {
    news.push(snapshot.data());
  });

  let newsDiv = document.getElementById('post');

news.forEach((i) => {
  newsDiv.innerHTML += `<a href="${i.newsData.url}" class="custom-card"><div class="card">
  <div class="card-body">
      <h5 class="card-title">${i.newsData.title}</h5>
      <p class="card-text">${i.newsData.description}</p>
      <p class="card-text">
          <small class="text-muted">${i.date}</small>
      </p>
  </div>
  <img class="card-img-bottom" src="${i.newsData.image}" alt="Card image cap">
  </div></a>`
});
  
}).catch((e) => {
  console.log(e);
});

//update news board
console.log(news);




function postNews() {
  let postUrl = document.getElementById('urlTb').value;
  let newsData = getGraph(postUrl);
  db.collection('news').add({
    newsData,
    date: Date()
  });
}