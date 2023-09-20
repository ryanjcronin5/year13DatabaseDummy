function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('resultTable');
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = row.textContent || row.innerText;
        if (rowData.toUpperCase().indexOf(filter) > -1) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    const table = document.getElementById('resultTable');
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        row.style.display = '';
    }
}

function adjustColumnWidth() {
    const table = document.getElementById('resultTable');
    const tableBody = document.getElementById('tableBody');
    const headers = table.querySelectorAll('thead th');
    const cells = tableBody.querySelectorAll('td');
    const maxWidths = Array.from(headers).map((_, index) => {
        return Math.max(...Array.from(cells).map((cell, rowIndex) => {
            if (cell.cellIndex === index) {
                return cell.offsetWidth;
            }
            return 0;
        }));
    });
    headers.forEach((headers, index) => {
        headers.style.width = maxWidths[index] + 'px';
    });
    cells.forEach((cell, index) => {
        cell.style.width = maxWidths[index % headers.length] + 'px';
    });
}

function populateTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const rowData = data[i];
        const row = document.createElement('tr');
        for (const key in rowData) {
            if (rowData.hasOwnProperty(key)) {
                const cell = document.createElement('td');
                cell.textContent = rowData[key];
                row.appendChild(cell);
                
            }
        }
        tableBody.appendChild(row);
    }
}


/* { last_name: '', first_name: '', DOB: 'N/A', phoneNum: '', email: '', suburb: '' }, */
const mockData = [
    { last_name: 'Adams', first_name: 'Keith', DOB: 'N/A', phoneNum: '021571300', email: 'smada.j@outlook.co.nz', suburb: 'Beach Haven' },
    { last_name: 'Adams', first_name: 'Jane', DOB: 'N/A', phoneNum: '021571300', email: 'smada.j@outlook.co.nz', suburb: 'Beach Haven' },
    { last_name: 'Adams', first_name: 'Michael', DOB: 'N/A', phoneNum: '093769596', email: 'michael.adams@orcon.net.nz', suburb: 'Avondale' },
    { last_name: 'Addis', first_name: 'David', DOB: 'N/A', phoneNum: '0276040592', email: 'david_addis@xtra.co.nz', suburb: 'Parnell' },
    { last_name: 'Alimurong', first_name: 'Expedito', DOB: 'N/A', phoneNum: '0211442751', email: 'expeditoalimurong@icloud.com', suburb: 'Highland Park' },
    { last_name: 'Arrol', first_name: 'Bruce', DOB: 'N/A', phoneNum: '021378180', email: 'bruce.arroll@auckland.ac.nz', suburb: 'Herne Bay' },
    { last_name: 'Arthur', first_name: 'Kevin', DOB: 'N/A', phoneNum: '021881065', email: 'kevinarthur@xtra.co.nz', suburb: 'N/A' },
];
window.addEventListener('load', adjustColumnWidth);
window.addEventListener('resize', adjustColumnWidth);
populateTable(mockData);