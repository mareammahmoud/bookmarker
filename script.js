var nameinput = document.getElementById("name");
var urlinput = document.getElementById("url");
var addbtn = document.getElementById("addbtn");
var tablebody = document.getElementById("tablebody")

if (localStorage.getItem("bookmarks") == null) {
    bookmarks = [];
} else {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    displaybookmark();
}


var bookmarks = []
function addproduct() {

    var bookmark = {
        name: nameinput.value,
        url: urlinput.value



    }
    bookmarks.push(bookmark);
    clear();
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    displaybookmark();
}

function clear() {
    nameinput.value = null;
    urlinput.value = null;

}

function displaybookmark() {
    var mark = ``;
    for (var i = 0; i < bookmarks.length; i++) {
        mark += ` 
         <tr>
            <td>${bookmarks[i].name}</td>
            <td><a href="${bookmarks[i].url}" target="_blank">${bookmarks[i].url}</a></td>
            <td><button onclick="visitBookmark(${i})" class="Visit"><i class="bi bi-eye"></i>  Visit</button></td>
            <td><button onclick="deleteBookmark(${i})" class="Delete"><i class="bi bi-trash3"></i>  Delete</button></td>
          </tr>`

    }
    tablebody.innerHTML = mark;

}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

    displaybookmark()
}
