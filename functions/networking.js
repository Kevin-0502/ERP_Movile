
/*
---------------------------------------------------------------------------------------------------------------------
-------------------------This is a draft for all uses from fetch api-------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
*/ 


//This is an example of fetch use, this function consumes a movies array(esto es un ejemplo del uso de "fetch", la función cosume )
const getUsersApi = async () => {
  try {
    const response = await fetch('http://hyderp.herokuapp.com/api/users?api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};
const getUsersPassApi = async () => {
  try {
    var url = 'https://hyderp.herokuapp.com/api/login?api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB';
    var data = {email: 'sistemasbc@gmail.com',password:'sistemas2021'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
  } catch (error) {
    console.error(error);
  }
};




const getUsersPassApi = async (emaildata,passworddata) => {
  
  var url = 'https://hyderp.herokuapp.com/api/login?api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB';
  var data = {email: emaildata,password:passworddata};

fetch(url, {
method: 'POST', // or 'PUT'
body: JSON.stringify(data), // data can be `string` or {object}!
headers:{
    'Content-Type': 'application/json'
  }
}).then(res  => res.json().then(response => console.log(response)));

}

const getUsersPassApi2 = async (emaildata,passworddata) => {
  
  var url = 'https://hyderp.herokuapp.com/api/login?api_key=key_cur_prod_ftPqyBiQEf7Vcb9wKwbCf65c378VGyBB';
  var data = {email: emaildata,password:passworddata};

fetch(url, {
method: 'POST', // or 'PUT'
body: JSON.stringify(data), // data can be `string` or {object}!
headers:{
    'Content-Type': 'application/json'
  }
}).then(response => {
  response.ok
  if (!response.ok) throw Error(response.status);

  console.log(response)
})
.then(response => console.log('ok'))
.catch(error => console.log(error));
}

