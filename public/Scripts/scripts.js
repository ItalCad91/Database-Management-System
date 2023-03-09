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

        async function handleSubmit(event) {
          event.preventDefault(); // prevent form from reloading the page
          const searchTerm = document.querySelector('input[name="q"]').value;
        
          const searchResults = await context.functions.execute("searchProducts", searchTerm);
        
          // update the table with search results
          const tableBody = document.getElementById("contactList");
          tableBody.innerHTML = "";
          searchResults.forEach((product, index) => {
            tableBody.innerHTML += `
              <tr>
                <th style="color:rgb(135, 72, 16)" scope="row" class="text-center listColor">${index + 1}</th>
                <td style="color:rgb(135, 72, 16)">${product.productName}</td>
                <td style="color:rgb(135, 72, 16)">${product.productID}</td>
                <td style="color:rgb(135, 72, 16)">${product.quantityAvailable}</td>
                <td style="color:rgb(135, 72, 16)">${product.price}</td>
                <td style="color:rgb(135, 72, 16)">${product.quantitySold}</td>
                <td class="text-center col-1">
                  <a href="/products-edit/${product._id}" style="background-color: 00A491; color: aliceblue;" class="btn btn-sm">
                    <i class="fas fa-pencil-alt"></i> Edit
                  </a>
                </td>
                <td class="text-center col-1">
                  <a href="/products-delete/${product._id}" style="background-color: 00A491; color: aliceblue;" class="btn btn-sm">
                    <i class="fas fa-trash-alt"></i> Delete
                  </a>
                </td>
              </tr>
            `;
          });
        }