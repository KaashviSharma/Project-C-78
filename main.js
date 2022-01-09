var images = "https://thumbs.dreamstime.com/b/happy-man-points-out-something-presentation-showing-element-advertising-goods-vector-illustration-cartoon-style-119680930.jpg"
var names = ["Ranbir Singh"]
var images = "https://www.colourbox.com/preview/36893014-young-man-cartoon.jpg"
var names = ["Diljit Singh"]
var images = "https://image.shutterstock.com/image-vector/smiling-girl-260nw-160598192.jpg"
var names = ["Alia Singh"]
var images = "https://i0.wp.com/i.pinimg.com/736x/02/eb/e7/02ebe71ce9055069f7f38c8332414eed.jpg"
var names = ["Sangeeta Singh"]
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    <button>onlick="update();"Next</button>
}
