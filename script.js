var x=0;
function showHide()
{
    if(x==0){
        document.getElementById('text').style='display:none;';
        x=1;
    }
    else{
        document.getElementById('text').style='display:block;';
        x=0;
      }
}