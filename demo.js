const fs = require('fs');
// fs.writeFileSync('nod.json',)

// const { kill } = require('process');
const input = require('readline-sync');

var data=JSON.parse(fs.readFileSync('crud.json'))


function insertData(){
    // data=[]
    dict = {}
    dict['User_Name']=input.question('enter your user name:-')
    dict['Gmail_Address']=input.questionEMail('enter your email:-')
    dict['Mobile_No:-']=input.questionInt('enter your Mobile_No:-')

    // console.log(dict);

    data.push(dict)

    var j = JSON.stringify(data,null,4)
    fs.writeFileSync('crud.json',j)
}

// insertData()





function UpdateData(){
    var Mobile_No = input.questionInt('enter your contact number')
    for (j of data){
        for (i of Object.values(j)){
            if (Mobile_No == i){
                console.log(j);
                j['User_Name']=input.question('enter your updated user name:-')
                j['Gmail_Address']=input.questionEMail('enter your updated email:-')
            }
        }
    }var m = JSON.stringify(data,null,4)
    fs.writeFileSync(' crud.json',m)
}
// UpdateData()

function CheckDeta(){
    var Mobile_No = input.questionInt('enter your contact number')
    for (j of data){
        for (i of Object.values(j)){
            if (Mobile_No == i){
                console.log(j);
            }
        }
    }
}

// CheckDeta();

function DeleteData(){
    var Mobile_No = input.questionInt('enter your contact number')
    for (j in data){
        // console.log(j);
        for (i of Object.values(data[j])){
            // console.log(data);
            if (Mobile_No == i){
                data.splice(j, 1)
                // console.log(data);
            }
        }
    }
    var m = JSON.stringify(data,null,4)
    fs.writeFileSync('crud.json',m)
}

// console.log(data);

// DeleteData()

console.log('1) Insert \n2) Update \n3) Check Detail \n4) Delete');
let user = input.questionInt('enter your answer :-');

if (user == '1'){
    insertData()
}else if(user == '2'){
    UpdateData()
}else if(user == '3'){
    CheckDeta()
}else{
    DeleteData()
}