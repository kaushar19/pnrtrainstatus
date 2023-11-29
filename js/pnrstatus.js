
 //Global Declaration

 //PL Code
//  var apiKey=`4b83a27a98msh3405ac8bc72db72p18ecbbjsn976ca9614d55`;
 var apiKey=`5159d3c6e9msh51d31a5db9fe62ap1b2daejsnbffeb11f6c98`;
function checkpnr_Click(){
    var pnr=document.getElementById("txtPnr").value;
    getpnrstatus(pnr);
}

 //BLL Code
function returnstatus(){
    var data=this.responseText;
    var jsObject=JSON.parse(data);
    var htmlString=`
    <table class="table table-hover bg-light">
                    <tbody>
                          <tr>
                                 <th>Pnr Number</th>
                                 <th>Train Number</th>
                                 <th>Train Name</th>
                                 <th>DOJ</th>
                                 <th>From</th>
                                 <th>To</th>
                                 <th>Class</th>
                                 <th>BSN</th>
                          </tr>
                          <tr>
                              <td>${jsObject.data.Pnr}</td>
                              <td>${jsObject.data.TrainNo}</td>
                              <td>${jsObject.data.TrainName}</td>
                              <td>${jsObject.data.Doj}</td>
                              <td>${jsObject.data.From}</td>
                              <td>${jsObject.data.To}</td>
                              <td>${jsObject.data.Class}</td>
                              <td>${jsObject.data.BoardingStationName}</td>
                          </tr>
                    </tbody>
                </table> `;
    document.getElementById("getData").innerHTML=htmlString;
}
 

function getpnrstatus(pnrno){
    var r=new XMLHttpRequest();
    r.open('GET',`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrno}`);
    r.setRequestHeader('X-RapidAPI-Key', apiKey);
    r.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');
    r.onload=returnstatus;
    r.send();
}


////////////////////////////////////////
//  //Global Declaration

//  //PL Code
//  var apiKey=`13830807a0msh0286551bb126f3cp1b0deejsn2b0d9514410c`;
// function checkpnr_Click(){
//     var pnr=document.getElementById("txtPnr").value;
//     getpnrstatus(pnr);
// }

//  //BLL Code
// function returnstatus(){
//     var data=this.responseText;
//     var jsObject=JSON.parse(data);
//     var htmlString=`Pnr=${jsObject.data.Pnr}<br>
//                     TrainNo=${jsObject.data.TrainNo}<br>
//                     TrainName=${jsObject.data.TrainName}<br>
//                     Doj=${jsObject.data.Doj}<br>
//                     From=${jsObject.data.From}<br>
//                     To=${jsObject.data.To}<br>
//                     Class=${jsObject.data.Class}<br>
//                     BoardingStationName=${jsObject.data.BoardingStationName}<br>
//                     TrainStatus=${jsObject.data.TrainStatus}
//     `;
//     document.getElementById("getData").innerHTML=htmlString;
// }
 

// function getpnrstatus(pnrno){
//     var r=new XMLHttpRequest();
//     r.open('GET',`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrno}`);
//     r.setRequestHeader('X-RapidAPI-Key', apiKey);
//     r.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');
//     r.onload=returnstatus;
//     r.send();
// }

// ////////////////////////////////////////

//  //Global Declaration

//  //PL Code
//  var apiKey=`13830807a0msh0286551bb126f3cp1b0deejsn2b0d9514410c`;
// function checkpnr_Click(){
//     var pnr=document.getElementById("txtPnr").value;
//     getpnrstatus(pnr);
// }

//  //BLL Code
// function returnstatus(){
//     var data=this.responseText;
//     document.getElementById("getData").innerText=data;

// }
 

// function getpnrstatus(pnrno){
//     var r=new XMLHttpRequest();
//     r.open('GET',`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrno}`);
//     r.setRequestHeader('X-RapidAPI-Key', apiKey);
//     r.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');
//     r.onload=returnstatus;
//     r.send();
// }

