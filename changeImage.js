var newsrc = "axe.png";

function changeImage() {
  if ( newsrc == "axe.png" ) {
    document.images["character"].src = "/images/axe.png";
    document.images["character"].alt = "Axe";
    document.images["text"].src = "/images/Choose-sword.png";
    newsrc  = "lance.png";
  }
  else if (newsrc== "lance.png") {
    document.images["character"].src = "/images/lance.png";
    document.images["character"].alt = "Lance";
    newsrc  = "sword.png";
  }
  else {
    document.images["character"].src = "/images/sword.png";
    document.images["character"].alt = "Sword";
    newsrc  = "axe.png";
  }
}