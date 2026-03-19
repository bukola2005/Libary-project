# 📚 Personal Library Tracker

A dynamic, client-side web application for cataloging a personal reading collection. This project was built to master DOM manipulation, JavaScript Object Constructors, and persistent data storage using the browser's Local Storage API.

## ✨ Features

* **Interactive UI:** Users can add new books via a custom modal dialog form.
* **Dynamic Rendering:** Books are instantly generated as HTML cards and displayed in a responsive grid.
* **Custom Reading Status:** Track reading progress with a 3-state system: *Complete*, *Pending*, or *Not Read*.
* **Data Persistence:** Utilizes Local Storage. The library data survives page refreshes and browser closures.
* **Full CRUD Functionality:** Create new books, Read from the data array, Update statuses, and Delete books from the collection.

## 📸 Screenshots

*(Note: Add your screenshots to an `images` folder and update these links)*

![Main Dashboard View](./images/Screenshot%202026-03-19%20114952.jpg)
> *The main library dashboard showing saved books.*

![Add Book Modal](./images/Screenshot%202026-03-19%20115225.jpg)
> *The interactive modal for adding a new book to the collection.*

![mobile Dashboard View](./images/Screenshot%202026-03-19%20114911.jpg)
> *The main library dashboard showing saved books.*

## 💻 Tech Stack

* **HTML5:** Semantic structure and interactive `<dialog>` elements.
* **CSS3:** Custom styling, CSS Grid for the card layout, and responsive design.
* **Vanilla JavaScript (ES6+):** Object Constructors, Array manipulation (`.push`, `.splice`), Event Listeners, and JSON data parsing.

## 🧠 Challenges & What I Learned

Building this application bridged the gap between raw data and the user interface. Here are the biggest concepts I mastered during this build:

1.  **Demystifying Local Storage:** Transitioning from volatile RAM to permanent storage. I learned that Local Storage only accepts strings, requiring me to use `JSON.stringify()` to save my array of objects, and `JSON.parse()` to rebuild the array when the page reloads.
2.  **The Power of Constructors:** Instead of building object literals by hand, I utilized a `Book` constructor function. This solidified my understanding of how factories work in JavaScript and the behavior of the `this` keyword.
3.  **Form & DOM Logic:** I encountered a bug where the "Cancel" button wouldn't clear the form inputs. This led to a deep dive into DOM elements, where I learned that the `.reset()` method can only be called directly on a `<form>` element.
4.  **Array Indexing:** Implementing the "Remove" button required linking a physical HTML button to a specific object inside my `myLibrary` array. Using the `index` parameter inside a `.forEach()` loop allowed me to accurately target and `.splice()` the correct book out of the database.

## 🚀 How to Run Locally

1. Clone this repository to your local machine.
2. Open `index.html` in your browser, or use an extension like VS Code Live Server (`http://127.0.0.1:5500/`).
3. Add a book, refresh the page, and watch the Local Storage magic happen!

## 👤 Author

**Owoseni Shukura Bukola**
* GitHub: [@bukola2005](https://github.com/bukola2005)