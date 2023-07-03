function generateIDCard(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const college = document.getElementById('college').value;
    const location = document.getElementById('location').value;
    const picture = document.getElementById('picture').files[0];
    document.getElementById('_name').innerHTML=name;
    document.getElementById('_college').innerHTML=college;
    document.getElementById('_location').innerHTML=location;
    document.getElementById('_img').src=URL.createObjectURL(picture);
    document.getElementById('id-card').style.display='block';
}



 function Preview(event)
  {
    const picture = document.getElementById('picture').files[0];
    document.getElementById('previewImg').src=URL.createObjectURL(picture);
    document.getElementById('previewImg').style.display='block';
  }