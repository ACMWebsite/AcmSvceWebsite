function writeto(){
    // Instamojo.open("https://www.instamojo.com/@svceacm/lf827255a3ba0407080b849c27585a946/");
    // alert('1');
    // var xmlhttp = new XMLHttpRequest();
    //     xmlhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //           // alert('Your payment is successfull.' + this.responseText);
    //         }
    //     };
    //     xmlhttp.open("GET", "login.php", true);
    //     xmlhttp.send();
    try{
      if(!window.chrome){
      document.getElementById('instamojo-link').click();
    }
      else{
      window.open("https://www.instamojo.com/@svceacm/lf827255a3ba0407080b849c27585a946/");
    }
    }
    catch(err){
      // // $("#instamojo-link").click();
      // window.open("https://www.instamojo.com/@svceacm/lf827255a3ba0407080b849c27585a946/");
    }


    var database = firebase.database();
    var x = document.getElementById("regform");
    firebase.database().ref('teams/' + x.elements[0].value).set({
        Member1:{
            Name:x.elements[3].value + " " + x.elements[4].value,
            College:x.elements[5].value,
            Email:x.elements[6].value,
            Phone:x.elements[7].value
        },
        Member2:{
            Name:x.elements[8].value + " " + x.elements[9].value,
            College:x.elements[10].value,
            Email:x.elements[11].value,
            Phone:x.elements[12].value
        },
        Member3:{
            Name:x.elements[13].value + " " + x.elements[14].value,
            College:x.elements[15].value,
            Email:x.elements[16].value,
            Phone:x.elements[17].value
        },
        Member4:{
            Name:x.elements[18].value + " " + x.elements[19].value,
            College:x.elements[20].value,
            Email:x.elements[21].value,
            Phone:x.elements[22].value
        }

    });
    // var r=confirm("You have successfully registered as team :\n" + x.elements[0].value);
}
