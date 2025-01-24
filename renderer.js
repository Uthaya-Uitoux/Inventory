document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addItemForm");
  const tableBody = document.getElementById("tableBody");

  // Load existing data from localStorage
  const loadInventory = () => {
    const items = JSON.parse(localStorage.getItem("inventory")) || [];
    items.forEach(item => addRowToTable(item));
  };

  // Add row to table
  function addRowToTable(item) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${item.partName}</td>
      <td>${item.partCode}</td>
      <td>${item.quantity}</td>
      <td>${item.mrp}</td>
      <td>${item.inwardDate}</td>
    `;
    tableBody.appendChild(newRow);
  }

  // Save item to local storage
  function saveToLocalStorage(item) {
    const items = JSON.parse(localStorage.getItem("inventory")) || [];
    items.push(item);
    localStorage.setItem("inventory", JSON.stringify(items));
  }

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const partName = document.getElementById("partName").value;
    const partCode = document.getElementById("partCode").value;
    const quantity = document.getElementById("quantity").value;
    const mrp = document.getElementById("mrp").value;
    const inwardDate = document.getElementById("inwardDate").value;

    if (partName && partCode && quantity && mrp && inwardDate) {
      const item = { partName, partCode, quantity, mrp, inwardDate };
      addRowToTable(item);
      saveToLocalStorage(item);
      form.reset();
    }
  });

  // Cancel button action
  document.getElementById("cancelButton").addEventListener("click", () => {
    form.reset();
  });

  // Load data on page load
  loadInventory();
});
