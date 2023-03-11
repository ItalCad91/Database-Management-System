// Author:Riccardo Reali
// Date: 15-02-2023
  
        // Modal Image Gallery
        function onClick(element) {
          document.getElementById("img01").src = element.src;
          document.getElementById("modal01").style.display = "block";
          var captionText = document.getElementById("caption");
          captionText.innerHTML = element.alt;
        }
        
        
        // Toggle between showing and hiding the sidebar when clicking the menu icon
        var mySidebar = document.getElementById("mySidebar");
        
        function w3_open() {
          if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
          } else {
            mySidebar.style.display = 'block';
          }
        }
        
        // Close the sidebar with the close button
        function w3_close() {
            mySidebar.style.display = "none";
        }


//SEARCH BAR FUNCTION:

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[name="query"]');
const searchResults = document.querySelector('#searchResults');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  fetch(`/search?query=${query}`)
    .then(response => response.json())
    .then(products => {
      if (products.length > 0) {
        // Clear previous search results
        searchResults.innerHTML = '';

        // Create a new table to display search results
        const table = document.createElement('table');
        table.classList.add('table', 'table-striped', 'table-bordered', 'table-hover');

        // Add table header
        const header = table.createTHead();
        const row = header.insertRow();
        const columns = ['Product Name', 'Product ID', 'Available Quantity', 'Price', 'Quantity Sold'];
        for (let column of columns) {
          const th = document.createElement('th');
          th.scope = 'col';
          th.textContent = column;
          row.appendChild(th);
        }

        // Add table rows for each product
        const tbody = document.createElement('tbody');
        for (let product of products) {
          const row = tbody.insertRow();
          row.innerHTML = `
            <td>${product.productName}</td>
            <td>${product.productID}</td>
            <td>${product.quantityAvailable}</td>
            <td>${product.price}</td>
            <td>${product.quantitySold}</td>
          `;
        }

        // Append table to search results section
        table.appendChild(tbody);
        searchResults.appendChild(table);
      } else {
        // Display message if no products found
        searchResults.innerHTML = '<p>No products found</p>';
      }
    })
    .catch(error => {
      console.error(error);
      searchResults.innerHTML = '<p>Failed to retrieve search results</p>';
    });
});

//CLEAR BUTTON
const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  // Remove the search results table from the DOM
  const table = document.querySelector('table');
  if (table) {
    table.remove();
  }
  // Reload the page
  location.reload();
});

// PRINT RESULT

const printBtn = document.getElementById('print-btn');

printBtn.addEventListener('click', () => {
  const searchResultsTable = document.querySelector('table');
  if (searchResultsTable) {
    window.print();
  } else {
    alert('No search results to print');
  }
});