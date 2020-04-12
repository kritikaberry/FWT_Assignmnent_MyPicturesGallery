function shuffle()
{
  var images_array=new Array("images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg","images/m5.jpg","images/m6.jpg","images/m7.jpg","images/m8.jpg","images/m9.jpg");
  var ctr=images_array.length;
  var counter,index,i,j;
  var temp=new Array(ctr);
  for(i=0;i<ctr;i++)
  {
  	index=Math.floor(ctr*Math.random());
  	counter=0;
    for(j=0;j<i;j++)
    {
      if(temp[j]==index)
      {
        counter++;
      }
    }
    if(counter>0)
    {
      i--;
    }
    else
    {
      temp[i]=index;
      console.log(temp[i]);
    }
    for(i=0;i<ctr;i++)
    {
  	 document.getElementById("m"+(i+1)).src=images_array[temp[i]];
  	}
  }
}
