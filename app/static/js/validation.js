function validateForm(section, len, sec) {
    var x = document.getElementById("forma").elements;
    var hello = "hello";
    for (var i = section - 1; i < len; i++) {
        if (x[i].value == "") {
            var emri = document.getElementById("forma").elements[i].placeholder;
            alert(emri + " duhet te mbushet!");
            y = false;
            return false;
        }
        if (x[0].value != "" && x[1].value != "" && x[2].value != "" && x[3].value != "" && x[4].value != "" && x[5].value != "" && x[6].value != "") {
            document.getElementById("btt").setAttribute("dest", '#sec' + sec);
        }
        if (x[7].value != "" && x[8].value != "" && x[9].value != "" && x[10].value != "" && x[11].value != "" && x[12].value != "") {
            document.getElementById("btt2").setAttribute("dest", '#sec' + sec);
        }
    }
}

function validateChecks() {

    var n1 = false;
    var n2 = false;
    var n3 = false;
    var n4 = false;
    var n5 = false;
    var n6 = false;
    var n7 = false;
    var n8 = false;
    var n9 = false;
    // var checkat = document.getElementsByTagName('tr');
    var checkat = document.getElementsByName('checkbox');
    for (var i = 0; i < checkat.length; i++) {
      if (checkat[0].checked == true || checkat[1].checked == true || checkat[2].checked ==true) {
        n1 = true;
      }
      if (checkat[3].checked == true || checkat[4].checked == true || checkat[5].checked ==true) {
        n2 = true;
      }
      if (checkat[6].checked == true || checkat[7].checked == true) {
        n3 = true;
      }
      if (checkat[8].checked == true || checkat[9].checked == true) {
        n4 = true;
      }
      if (checkat[10].checked == true || checkat[11].checked == true) {
        n5 = true;
      }
      if (checkat[12].checked == true ) {
        n6 = true;
      }
      if (checkat[13].checked == true ) {
        n7 = true;
      }
      if (checkat[14].checked == true ) {
        n8 = true;
      }
      if (checkat[15].checked == true ) {
        n9 = true;
      }
      else {
        alert("Plotso se paku nje opsion!!!");
        return false;
      }
    }

    if (n1 == true && n2 == true && n3 == true && n4 == true && n5 == true && n6 == true && n7 == true && n8==true && n9 == true) {
      document.getElementById("btt3").setAttribute("dest", '#sec' + 4);
    }
    //  if (checks[0].checked == true || checked[1].checked == true || checked[2].checked == true) {
    //     document.getElementById("btt3").setAttribute("dest", '#sec' + 4);
    //     return false;
    //   }
}
