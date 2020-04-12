function shuffle()
{
  var images_array=new Array("images/f1.jpg","images/f2.jpg","images/f3.jpg","images/f4.jpg","images/f5.webp","images/f6.jpg","images/f7.jpg","images/f8.jpg","images/f9.jpg","images/f10.jpg","images/f11.jpg","images/f12.jpg","images/f13.jpg","images/f14.jpg","images/f15.jpg");
  var ctr=images_array.length,counter,index,i,j;
  var temp=new Array(ctr);
  for(i=0;i<ctr;i++)
  {
  	index=Math.floor(Math.random()*ctr);
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
  	 document.getElementById("f"+(i+1)).src=images_array[temp[i]];
  	}
  }
}
