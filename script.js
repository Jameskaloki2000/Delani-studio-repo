$(function () {
  //UI LOGIC
  console.log("uyuybyu");
  let designText = $(".design-text");
  let developerText = $(".developer-text");
  let productText = $(".product-text");
  let iconOne = $(".icon1");
  let iconTwo = $(".icon2");
  let iconThree = $(".icon3");
  let image = $(".image");
  console.log(image);

  //Displaying UI INTERFACE
  $(iconOne).click(function () {
    designText.show();
    iconOne.hide();
  });
  $(iconTwo).click(function () {
    developerText.show();

    iconTwo.hide();
  });
  $(iconThree).click(function () {
    productText.show();
    iconThree.hide();
  });

  $(designText).click(function () {
    iconOne.show();
    designText.hide();
  });
  $(developerText).click(function () {
    iconTwo.show();
    developerText.hide();
  });
  $(productText).click(function () {
    iconThree.show();
    productText.hide();
  });
  //OVERLAYING IMAGES
  image.hover(function () {});
});
