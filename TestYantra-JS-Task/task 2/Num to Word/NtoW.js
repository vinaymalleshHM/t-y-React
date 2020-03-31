/* from browser import document as doc
from browser import bind,alert
from browser.html import BUTTON

x=doc.getElementById("_input_")

def func(event):
    y=str(x.value).strip().replace(" ","")
    
    dict={"1":"One","2":"Two","3":"Three","4":"Four","5":"Five","6":"Six","7":"Seven","8":"Eight","9":"Nine","0":""}
    
    dict1={"2":"Twenty","3":"Thirty","4":"Fourty","5":"Fifty","6":"Sixty","7":"Seventy","8":"Eighty","9":"Ninety"}
    
    dict3={"10":"Ten","11":"Eleven","12":"Twelve","13":"Thirteen","14":"Fourteen","15":"Fifteen","16":"Sixteen","17":"Seventeen","18":"Eighteen","19":"Nineteen"}
    
    if y.isdigit()==True:
       if len(y)==1 and y!="0":
          alert(f"{dict[y]}")

       elif len(y)==2:
            a=y[0]
            b=y[1]
            if y in dict3:
               alert(f"{dict3[y]}")
            else:
               alert(f"{dict1[a]} {dict[b]}")

       elif len(y)==3:
            a=y[0]
            b=y[1]
            c=y[2]
            if y[1:] in dict3:
               alert(f,"{dict[a]} hundred and {dict3[y[1:]]}")
            else:
               alert(f"{dict[a]} hundred and {dict1[b]} {dict[c]}")
               
       
       elif y=="0" and len(y)==1:
            alert("Zero")

    elif len(y)==0:
         alert("Please enter a number!")

    else:
       alert(f"{y} is not an Integer")
        
doc.querySelector("#_output_").bind("click",func)
 */