window.onload = function(){
  form_gen();
}

function form_gen(){
  var form = '<form name="wform" onsubmit="checkText()">'
  form = form + '<table>';

  form = form + '<tr>';
  for(i=0;i<5;i++){
    form = form + '<th>' + '<label>'  + (i+1) + '文字目' + '<input type="text" name="moji' + (i+1) + '" id="' + (i+1) + 'th" maxlength="1" pattern="[a-z]{0,1}" size="1" />' + '</label>' + '</th>';
  }
  form = form + '</tr>';
  
  form = form + '</table>';
  form = form + '<label>' + '含む文字(スペース区切り)<br>' + '<input type="text" name="include" maxlength=9 /></label><br>';
  form = form + '<label>' + '含まない文字(スペース区切り)<br>' + '<input type="text" name="exclude" /></label><br>';

  form = form + '<input type="button" name="btn" id="submit" value="候補を表示" onclick="checkText()" />' + '</form>';
  document.getElementById("form").innerHTML = form;
}



function checkText(){
  var known = [document.wform.moji1.value, document.wform.moji2.value, document.wform.moji3.value, document.wform.moji4.value, document.wform.moji5.value];
  for(var i=0;i<known.length; i++){
    if(known[i] == ""){
      known[i] = ".";
    }
  }
  var include = document.wform.include.value.split(' ');
  for(var i=0; i<include.length; i++){
    if(include[i].search(/[a-z]/) == -1){
      include.splice(i,1);
    }
  }
  var includes="";
  if(include!=""){
    include.forEach( function(item){
      includes = includes + "(?=.*" + item + ")";
    });
  }
  
  var exclude = document.wform.exclude.value.split(' ');
  for(var i=0; i<exclude.length; i++){
    if(exclude[i].search(/[a-z]/) == -1){
      exclude.splice(i,1);
    }
  }
  var excludes="";
  if(exclude!=""){
    excludes="^(?!.*(";
    exclude.forEach( function(item){
      excludes = excludes + item + "|";
    });
    excludes = excludes.slice(0,excludes.length-1) + "))";
  }
  
  get_list(known.join(''), includes, excludes);
}

function get_list(known, include, exclude) {
  var ajax = new XMLHttpRequest();
  var res;
  var list;
//  ajax.open("get","./wordles.txt");
  ajax.open("get","https://slc.is/data/wordles.txt");
  ajax.send();
  list = ajax.addEventListener("load",function(){
    res = this.response;
    list = res.split(/\r\n|\n/);
    //console.log(list);
    
    var knreg = new RegExp(known);
    var inreg = new RegExp(include);
    var exreg = new RegExp(exclude);
    
    list = list.filter(function(value) { return value.match(knreg); });
    if(include != ''){
      list = list.filter(function(value) { return value.match(inreg); });
    }
    if(exclude != ''){
      list = list.filter(function(value) { return value.match(exreg); });
    }
    var output='';
    if(list.length < 1000){
      for(i=0;i<list.length;i++){
        output += list[i] + ',';
        if(i%8==7){
          output += '<br>';
        }
      }
      output = output.slice(0,output.length-1);
    }else{
      output = '単語の候補が1000以上あるのでもう少し絞ってください。<br>';
      output += '現在' + list.length + '個';
    }
    
    document.getElementById("content").innerHTML = output;
    
    return list;
  },false);
}
