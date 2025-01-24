function filterInventory() {
  let searchInput = document.getElementById('searchInput').value.toLowerCase();
  let filterValue = document.getElementById('filterSelect').value;
  let tableRows = document.querySelectorAll('#tableBody tr');

  tableRows.forEach(row => {
    let itemName = row.cells[0].textContent.toLowerCase();
    let category = row.dataset.category;

    if (
      (filterValue === 'all' || category === filterValue) &&
      itemName.includes(searchInput)
    ) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
// Open the add item page
function openAddPage() {
  window.location.href = "add-item.html";
}