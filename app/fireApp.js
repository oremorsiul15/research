let news = [];


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVNjho9UgdnvKnfl826tUGedeSpIuVbT0",
    authDomain: "dl-research-d211f.firebaseapp.com",
    databaseURL: "https://dl-research-d211f.firebaseio.com",
    projectId: "dl-research-d211f",
    storageBucket: "dl-research-d211f.appspot.com",
    messagingSenderId: "601038337523"
  };
  firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({timestampsInSnapshots:true});

db.collection('news').get().then((snapshot)=>{
  snapshot.docs.forEach(snapshot => {
    console.log(snapshot.data().postDate.toDate());
  });
}).catch((e)=>{
  console.log(e);
});


function postNews(){
  let postUrl = document.getElementById('urlTb').value;
  let newsData = getGraph(postUrl);
  db.collection('news').add({
    newsData,
    date: Date()
  });
}