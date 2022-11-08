function userForm(event){
    //display when we have click
    let disp = document.getElementById('name_');
    disp.style.display = "block";

    event.preventDefault(); // no loading the page
    console.log(3);
    const fname= document.getElementById('fname').value;
    const lname =document.getElementById('lname').value;
    const name = fname + " " +lname;
    const mail = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const prov = document.getElementById('prov').value;
    const check = document.getElementsByName('btn');
    var valeur;
    for(var i = 0; i < check.length; i++){
        console.log(55);
        if(check[i].checked){
            valeur = check[i].value;
            console.log(valeur);
        }
    }
    console.log(valeur);

    document.getElementById('name_').innerText="Full Name: " + name +"\n" + "Email: " + mail + "\n" + "Address: " + address + "\n" + city + ", " + prov +"\n"+ "Membership: " + valeur;
    
    
    // Il manque les boutons radio
    //document.getElementById("output").innerHTML = name;

}

function myExcelFuns(event){
    event.preventDefault();
    var numberStr = document.getElementById('number').value;
    if(numberStr==0){
        alert("Pas assez de nombre, impossible de réaliser le calcul");
    }else{
        //we remove all the space after and before the string
        numberStr =numberStr.trim();
        const numberArr = numberStr.split(' '); // split the "number" when we have a space
        const finalArr=[];
        for(var l=0;l<numberArr.length;l++){
            if(numberArr[l]!=''){//because the array store only one space in a box
                finalArr.push(numberArr[l]);
            }
            //console.log(finalArr); Helpful to verify the final array without space
        }
        var result=0; //initialization
        if(document.getElementById('autoSum').checked){
            let i=0;
            while(i<finalArr.length){
                result+=parseInt(finalArr[i]);
                i++;
            }
        }
        else if (document.getElementById('average').checked){
            let i=0;
            while(i<finalArr.length){
                result+=parseInt(finalArr[i]);
                i++;
            }
            result = result/finalArr.length;
        }
        else if(document.getElementById('max').checked){
            let i=0;
            let max=-Infinity;
            while(i<finalArr.length){
               if(parseInt(finalArr[i])>max){
                max= finalArr[i];
               }
                i++;
            }
            result= max;
        }
        else if(document.getElementById('min').checked){
            let i=0;
            let min=Infinity;
            while(i<finalArr.length){
                if(parseInt(finalArr[i])<min){
                    min= finalArr[i];
                }
                i++;
            }
            result= min;
        }
        console.log(result);
        document.getElementById("result").innerHTML = "Result : " + result;
    }
}

const el = document.getElementById("send");
if(el){
    el.addEventListener("click",userForm);
}


//For the excel.html
//Using the same method
const element2 = document.getElementById('calculate');
if(element2){
    element2.addEventListener("click",myExcelFuns);
}

