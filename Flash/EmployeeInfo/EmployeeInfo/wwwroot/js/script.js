console.log("JS online and running!");

let username = "admin";
let password = "pass";
let socialSecurity = parseFloat(.075);
let tax = parseFloat(.05);

document.getElementById('emp-page').addEventListener('click', function ()
{
   
    let usernameInput = document.getElementById('userName');
    let usernameValue = usernameInput.value;

    let passInput = document.getElementById('password');
    let passValue = passInput.value;


        if(usernameValue == username && passValue == password)
        {            
            alert('Welcome user, ' + username + '!');
          document.write('<h3><a href="emp-info.html">To Employee Details page<\a></h3>');
            //window.location.href = 'emp-info.html';          
        }
        else
        {
            alert('Invalid username or password!');
        }
});

function CalcNetSalary()
{
    let salary = parseFloat(document.getElementById('salary').value);     
    if (salary) {
       
        let netSalary = salary + (salary * socialSecurity) + (salary * tax);

        document.getElementById('net-salary').innerHTML = "Net salary = " + parseFloat(netSalary);
        alert('Net salary = $' + netSalary);      
    }
    else {
        alert('Enter salary amount!');
    }
}
