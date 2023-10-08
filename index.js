function sendInput() {
    const inputValue = document.getElementById('searchInput').value;
    console.log('Input Value:', inputValue);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
			var table = document.getElementById('resultTable');
            table.innerHTML = xhr.responseText;
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Handle the response data and generate the table
                    console.log('Data:', response.data);
                } else {
                    alert(response.message);
                }
            } else {
                alert('Error: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'includes/read.php?paramName=' + inputValue, true);
    xhr.send();
}

function clearSearch() {
    // Clear the input field
    document.getElementById('searchInput').value = '';
    
    // Submit the form to show all records (you can also make an AJAX request to reload the entire page)
    document.querySelector('form').submit();
}