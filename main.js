/* Function to Check Online Status */
function online() {if (navigator.onLine == false) {
  alert("ApInfo : ❌ You are Offline");
}
}
/* Function To Store Name into Local Storage */
function name() {
  var name_s = localStorage.getItem('name');
  if (name_s == "" || name_s == null) {
    var name_p = prompt("Welcome to Our Site, Please Enter Your First Name");
    if (name_p == "" || name_p == null) {
      document.getElementById("quote_box").innerHTML = "<b>ApError</b>";
      document.getElementById("rand").innerHTML = "<b>ApError</b>";
      document.getElementById("copy").innerHTML = "<b>ApError</b>";
      document.getElementById("author").innerHTML = "<b>ApError</b>";
      window.location.reload();
    } else {
      localStorage.setItem("name", name_p)
    }
  }
}
/* Function To edit name */
function edit_name() {
  var name_s = localStorage.getItem('name');
    var name_p = prompt("Edit Your First Name", name_s);
    if(name_p == null){
   localStorage.setItem("name", name_s);
    }else{
  localStorage.setItem("name", name_p);
    }
  }
/* Function To show Name */
function show_name() {
  var x = localStorage.getItem('name');
  if (x.length < 16) {
    document.getElementById('show_name').innerHTML = "Welcome to Our Site , " + '<i class="none">h</i>' +  x + ' ' + '!' + ' ' + '<i class="none">hg</i><b><i onclick="edit_name()" class="wei">&#9997;</i></b>';
  } else {
    document.getElementById('show_name').innerHTML = "<i class='bi bi-noise-reduction'></i>Your Name Did not follow Our Rules " + '<i class="none">hg</i>' + '<i onclick="edit_name()" class="bi wei">&#9997;</i>';
  }
}
/* Function To show quotes */
function quote(){ 
var quote_box = document.getElementById('quote_box');
    var author = document.getElementById('author');
    var max = quotes.length;
    var min = 0;
    var num = Math.floor(Math.random() * (max - min) + min);
    return hash();
    if(location.hash !=null){
      var num = location.hash;
    }
function hash(){
    author.innerHTML = "<b>" + "By: " + authors[num] + "</b>";
    quote_box.innerHTML = quotes[num];
   location.hash = num;
    }
}
/*Function To display Random Quotes when button clicked */
    function rand(){
    return quote();
    }
/* Function To create great responsiveness to the site */
function media() {
  const copybutt = document.getElementById('copy');
  const rand = document.getElementById('rand');
  if (window.innerWidth <= 320) {
    copybutt.innerHTML = '<div class="bi bi-copy"></div>';
    rand.innerHTML = '   <div class="bi bi-dice-6-fill"></div>';
  } else if (window.innerWidth <= 375 && window.innerWidth > 320) {
    copybutt.innerHTML = '   <div class="bi bi-copy"></div>';
    rand.innerHTML = '<div class="bi bi-dice-6-fill"></div>';
  } else if (window.innerWidth <= 425 && window.innerWidth > 375) {
    copybutt.innerHTML = '   <div class="bi bi-copy"></div>';
    rand.innerHTML = '   <div class="bi bi-dice-6-fill"></div>';
  } else {
    copybutt.innerHTML = "Copy To Clipboard";
    rand.innerHTML = "Random Quote";
  }
}
/* Function To Copy quotes and author when copy button clicked*/
    function copy(){
        const fly = document.getElementById('copied');
        fly.classList.add('show');
        setTimeout(() => {
            fly.classList.remove('show');
        }, 700)
        const quotes = document.getElementById('quote_box');
        const author =document.getElementById('author').innerText;
       const author_st = author.replace("By:", "-")
         navigator.clipboard.writeText((quotes.innerHTML) + " " + (author_st));
         fly.innerHTML ="Copied";
         fly.style.left = "42%";
       }
/* Function to input mode/theme into local storage */
function mode() {
    var a = document.getElementById('mode');
    if(a.checked) {
        localStorage.setItem("mode", "dark");
        var body = document.body;
        var container = document.getElementById('quote_container');
        var author = document.getElementById('author');
        var header = document.getElementById('header');
        var copyright_box = document.getElementById('copyright');
        body.style.backgroundColor = "var(--primary)";
        container.style.backgroundColor = "var(--arist)";
        container.style.border = "10px double var(--primary)";
        author.style.color = "var(--primary)";
        header.style.color = "var(--primary)";
        copyright_box.style.color = "var(--primary)";
        copyright_box.style.backgroundColor = "var(--arist)";
document.getElementById('show_name').style.color = "var(--arist)";
    }else{ 
        localStorage.setItem("mode", "light");
        var body = document.body;
        var container = document.getElementById('quote_container');
        var author = document.getElementById('author');
        var header = document.getElementById('header');
        var copyright_box = document.getElementById('copyright');
        body.style.backgroundColor = "var(--arist)";
        container.style.backgroundColor = "var(--primary)";
        container.style.border = "10px double var(--arist)";
        author.style.color = "var(--tertiary)";
        header.style.color = "var(--tertiary)";
        copyright_box.style.color = "var(--arist)";
        copyright_box.style.backgroundColor = "var(--primary)";
document.getElementById('show_name').style.color = "var(--primary)";
    }
}
/* Function To check and use user mode/theme from local storage*/
function settheme(){
    var x = localStorage.getItem("mode");
   if(x == "dark"){
    var body = document.body;
    var container = document.getElementById('quote_container');
    var author = document.getElementById('author');
    var header = document.getElementById('header');
    var copyright_box = document.getElementById('copyright');
    body.style.backgroundColor = "var(--primary)";
    container.style.backgroundColor = "var(--arist)";
    container.style.border = "10px double var(--primary)";
    author.style.color = "var(--primary)";
    header.style.color = "var(--primary)";
    copyright_box.style.color = "var(--primary)";
    copyright_box.style.backgroundColor = "var(--arist)";

document.getElementById('show_name').style.color = "var(--arist)";
   }else{
    var body = document.body;
    var container = document.getElementById('quote_container');
    var author = document.getElementById('author');
    var header = document.getElementById('header');
    var copyright_box = document.getElementById('copyright');
    body.style.backgroundColor = "var(--arist)";
    container.style.backgroundColor = "var(--primary)";
    container.style.border = "10px double var(--arist)";
    author.style.color = "var(--tertiary)";
    header.style.color = "var(--tertiary)";
    copyright_box.style.color = "var(--arist)";
    copyright_box.style.backgroundColor = "var(--primary)";
document.getElementById('show_name').style.color = "var(--primary)";
    
   }

}
/* Function To evaluate media */
    window.addEventListener('resize', media);
    media();
/* Function To input copyright details */
    function copyright(){
      var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        var copyright_box = document.getElementById('copyright');
        var dated = new Date();
        var month = dated.getMonth();
        var mth_show = months[month];
        var year = dated.getFullYear();
        var text = "&copy Ap Quotes Gallery";
        copyright_box.innerHTML += text + " " + "-" + mth_show + " " + year;
    }
/* Function To change title when user make attempt to leave page */
    function whyhide(){
      document.getElementById('title').innerHTML = "💥Don't Leave Now";
      document.getElementById('icon').href ='';
    };
/* Function To show name 0.1s after edited and to put the necessary text in the specified time */
setInterval(show_name, 100);
/* Function To Check User Online Status every 10s */
setInterval(online, 10000);
/* Function To Change quotes every minute */
setInterval(quote, 60000);
