var items = [];

function addItem(title, price) {
  exist = false;
  if (items.length) {
    items.forEach((item) => {
      if (item.title === title) {
        item.quantity += 1;
        exist = true;
      }
    });
  }

  if (exist === false) {
    addNewItem(title, price);
  }

  updateDom();
}

function addNewItem(title, price) {
  items.push({
    title: title,
    quantity: 1,
    price: price,
  });
}

function deleteItem(title) {
  if (items.length) {
    items.forEach((item, index) => {
      if (item.title === title) {
        item.quantity -= 1;
        if (item.quantity == 0) {
          items.splice(index, 1);
        }
      }
    });
    updateDom();
  }
}

function updateDom() {
  var total = 0;
  var sect = document.getElementById("my-list");

  // Delete all Child
  while (sect.firstChild) {
    sect.removeChild(sect.firstChild);
  }

  items.forEach((item, index) => {
    // Creating a new div element
    var itemEl = document.createElement("div");

    // Creating a text node
    var itemTitle = document.createTextNode(`Item ${index + 1}: ${item.title}`);
    var itemPrice = document.createTextNode(`Unit price: ${item.price}`);
    var itemQte = document.createTextNode(`Quantity: ${item.quantity}`);

    // Adding the text node to the newly created div
    itemEl.appendChild(itemTitle);
    itemEl.appendChild(itemPrice);
    itemEl.appendChild(itemQte);

    // Create adding - deleting button
    // var addBtn = document.createElement("button");
    // var deleteBtn = document.createElement("button");

    // var addition = document.createTextNode(`+`);
    // var supression = document.createTextNode(`x`);

    // addBtn.setAttribute("name", item.title);
    // deleteBtn.setAttribute("name", item.title);

    // addBtn.onclick = function () {
    //   items.forEach((item) => {
    //     if (item.title == addBtn.name) {
    //       item.quantity += 1;
    //     }
    //   });
    //   updateDom();
    // };

    // deleteBtn.onclick = function () {
    //   items.forEach((item, index) => {
    //     if (item.title == addBtn.name) {
    //       item.quantity -= 1;
    //       if (item.quantity == 0) {
    //         items.splice(index, 1);
    //       }
    //     }
    //   });
    //   updateDom();
    // };

    // addBtn.appendChild(addition);
    // deleteBtn.appendChild(supression);

    // // Adding the buttons to the newly created div
    // itemEl.append(addBtn);
    // itemEl.append(deleteBtn);

    // Calculate total price
    total += item.quantity * item.price;

    // Adding the newly created element and its content into the DOM
    sect.appendChild(itemEl);
  });

  var itemTotal = document.createTextNode(`Total: ${total}`);
  sect.appendChild(itemTotal);
  console.log(items);
}

document.getElementById("1").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("liked");
});

document.getElementById("2").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("liked");
});

document.getElementById("3").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("liked");
});

document.getElementById("4").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("liked");
});

document.getElementById("5").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("liked");
});
