let fm = `
<form>
<table>
    <tr>
        <td><label>Username:<label></td>
        <td><input type="text"/>
    </tr>
    <tr>
        <td><label>Age:<label></td>
        <td><input type="text"/></td>
    </tr>
    <tr>
        <td><label>Address:<label></td>
        <td><input type="text"/></td>
    </tr>
    <tr>
        <td><label>DOB:<label></td>
        <td><input type="date"/></td>
    </tr>
</table>
</forms>`

let regForm=document.getElementById("f1");
regForm.innerHTML=fm;
regForm.className="add1";