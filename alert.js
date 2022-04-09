console.log('I am here');
// alert('Mother is coming!!');

const motherComing = () => {
    alert("Mother is coming. Open the book!!");
}

const askPicnic = () => {
    const response = confirm("Are u going to Picnic??");
    console.log(response);
    if(response){
        alert("Give the fees..");
    }
    else{
        alert('OK');
    }
}

const askname = () => {
    const name = prompt('Your name please');
    if(name){
        console.log(name);
    }
}