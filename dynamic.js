function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState=== 4 && xhr.status=="200")
    {
      callback(xhr.responseText)
    }
  }
  xhr.send();
}
loadJson("dynamic.json",function(text)
 {
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  carrer(data.carrer);
  Education(data.Education);
  Skills(data.Skills);
 }
)
var left=document.querySelector(".left");
function profile(p)
{

  var h1=document.createElement("h1");
  h1.textContent="Profile";
  left.append(h1);

  var hr=document.createElement("hr");
  left.append(hr);

  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);

  var a=document.createElement("h2");
  a.textContent=p.desig;
  left.append(a);

  var b=document.createElement("h2");
  b.textContent=p.mobile;
  left.append(b);

  var c=document.createElement("h2");
  c.textContent=p.email;
  left.append(c);
}

var right=document.querySelector(".right");
function carrer(ca)
{
  var h1=document.createElement("h1");
  h1.textContent="Carrer Objective";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var a=document.createElement("h2");
  a.textContent=ca.info;
  right.append(a);
}
function Education(edu)
{
  var h1=document.createElement("h1");
  h1.textContent="Educational details"
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
  var tr1="<tr><th>sno</th><th>degree</th><th>Institute</th><th>percentage</th><th>year_of_passing</th></tr>";
  var tr2=" ";
  for(i=0;i<edu.length;i++)
  {
    tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].year_of_passing+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
}
function Skills(s)
{
  var h1=document.createElement("h1");
  h1.textContent="Skills";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var ul=document.createElement("ul");
  for(var i in s)
  {
    var li=document.createElement("li");
    li.innerHTML=s[i].name+" : "+s[i].info;
    ul.append(li);
  }
  right.append(ul);
}
