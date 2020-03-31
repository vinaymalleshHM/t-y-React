let t1=`
<table>
<tr>
  <th>Name</th>
  <th>Age</th>
  <th>Address</th>
  <th>DOB</th>
</tr>
<tr>
  <td>Asmita</td>
  <td>22</td>
  <td>Bangalore</td>
  <td>13-11-1997</td>
</tr>
<tr>
  <td>Sindhu</td>
  <td>21</td>
  <td>Hubli</td>
  <td>23-03-1998</td>
</tr>
<tr>
  <td>Vijetha</td>
  <td>23</td>
  <td>Bangalore</td>
  <td>12-11-1996</td>
</tr>
</table>`

let tab=document.getElementById("table1");
tab.innerHTML=t1;
tab.className="add1";