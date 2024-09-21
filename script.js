var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["studentname"] = document.getElementById("studentname").value;
    formData["studentid"] = document.getElementById("studentid").value;
    formData["clas"] = document.getElementById("clas").value;
    formData["rollno"] = document.getElementById("rollno").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.studentname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.studentid;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.clas;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.rollno;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("clas").value = selectedRow.cells[2].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[3].innerHTML;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentname;
    selectedRow.cells[1].innerHTML = formData.studentid;
    selectedRow.cells[2].innerHTML = formData.clas;
    selectedRow.cells[3].innerHTML = formData.rollno;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("studentname").value = '';
    document.getElementById("studentid").value = '';
    document.getElementById("clas").value = '';
    document.getElementById("rollno").value = '';
    selectedRow = null;
}
