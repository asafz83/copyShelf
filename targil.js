function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};


function resetFields(){
	document.getElementById('bookName').value = "";
	document.getElementById('authorName').value = "";
	document.getElementById('score').value = "";
}

function resetBookList(){
    document.getElementById("bookList").innerHTML = "";
}
function isBookValid(book) {
    if (isNameValid(book.bookName) &&
        isAuthorNameValid(book.authorName) &&
        isScoreValid(book.score)){
        return true;
    }
    return false;
}
function isNameValid(name){
    // validate book name
    if (name === ""){
        return false;
    }
    return true;
}
function isAuthorNameValid(authorName){
    // validate book author
    if (authorName === ""){
        return false;
    }
    return true;
}

function isScoreValid(score) {
    // validate book score
    if (!((typeof parseInt(score)) === "number" &&
          score >= 1 && score <= 10)){
        return false;
    }
    return true;
}
function markWrongFields(book) {
    if (!isNameValid(book.bookName)){
        document.getElementById('bookName').classList.add("red-border");
    }
    else {
        document.getElementById('bookName').classList.remove("red-border");
    }

    if (!isNameValid(book.authorName)){
        document.getElementById('authorName').classList.add("red-border");
    }
    else {
        document.getElementById('authorName').classList.remove("red-border");
    }
    if (!isScoreValid(book.score)) {
        document.getElementById('score').classList.add("red-border");
    }
    else {
        document.getElementById('score').classList.remove("red-border");
    }
}
function addBook(){
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	var book = new Book(bookName, authorName, score);
    markWrongFields(book);

    if (isBookValid(book)) {
        addToList(book);
        resetFields();
    }
}


function addToList(book) {
		var newElement = document.createElement("li");
		var bookNameDiv = document.createElement("div");
		bookNameDiv.innerHTML = book.bookName;
		bookNameDiv.className = "left";
		var authorNameDiv = document.createElement("div");
		authorNameDiv.innerHTML = book.authorName;
		authorNameDiv.className = "center";
		var scoreDiv = document.createElement("div");
		scoreDiv.innerHTML = book.score;
		scoreDiv.className = "right";
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement);
}
