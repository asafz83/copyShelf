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

function isBookValid (book) {
    // validate book name
    if (book.name === ""){
        return false;
    }
    // validate book author
    if (book.authorName === ""){
        return false;
    }
    // validate book score
    if (!(book.score >= 1 && book.score <= 10)){
        return false;
    }
    return true;

}
function addBook(){
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	var book = new Book(bookName, authorName, score);

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
