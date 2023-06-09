let tableContainer = document.getElementById('dataTable');
let tableData = JSON.parse(localStorage.getItem('tableData')) || [
    {
        id: 1,
        title: 'hjjkj',
        author: 'jhhd',
        description: 'kjhdk',
        content: 'kjd',
        date: '20 oct 2023',
        image: 'https://i.postimg.cc/C5nm1Gtw/female2.jpg'
    },
];

renderTable();

function editData(id) {
    const item = tableData.find(item => item.id === id);
    if (item) {
        const newTitle = prompt('Enter new title:', item.title);
        const newAuthor = prompt('Enter new author:', item.author);
        item.title = newTitle;
        item.author = newAuthor;
        saveData();
        renderTable();
    }
}

function deleteData(id) {
    const index = tableData.findIndex(item => item.id === id);
    if (index !== -1) {
        tableData.splice(index, 1);
        saveData();
        renderTable();
    }
}

function renderTable() {
    let tableHTML = '';
    tableData.forEach((item) => {
        tableHTML +=
            `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.description}</td>
            <td>${item.content}</td>
            <td>${item.date}</td>
            <td><img src="${item.image}" alt="img" loading="lazy"></td>
            <td>
                <button onclick="editData(${item.id})">Edit</button>
                <button onclick="deleteData(${item.id})">Delete</button>
            </td>
        </tr>
        `;
    });
    tableContainer.querySelector('tbody').innerHTML = tableHTML;
}

function saveData() {
    localStorage.setItem('tableData', JSON.stringify(tableData));
}
