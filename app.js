
function domainUrl() {
    var pronoun = ['The', 'Alltime', 'Our',];
    var adj = ['Greatest', 'Worst', 'Unexplainable'];
    var noun = ['Hope', 'Adventure', 'Mission'];
    var dot = ['.com', '.net', '.edu'];
    var insert = document.getElementById("text")
    insert.innerHTML = 
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() *adj.length)] +
    noun[Math.floor(Math.random() *noun.length)] +
    dot[Math.floor(Math.random() *dot.length)];
}




console.log("domainUrl")