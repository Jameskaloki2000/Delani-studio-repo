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
  $(".portimg").hover(
    function () {
      $(".porttext", this).slideToggle("slow");
    },
    function () {
      $(".porttext", this).slideToggle("slow");
    }
  );
  <script id="mcjs">
    !function(c,h,i,m,p)
    {
      ((m = c.createElement(h)),
      (p = c.getElementsByTagName(h)[0]),
      (m.async = 1),
      (m.src = i),
      p.parentNode.insertBefore(m, p))
    }
    (document,"script","https://chimpstatic.com/mcjs-connected/js/users/09b9e0197bc3049386ad3a6c0/13eb28844ecfb869a31515054.js");
  </script>;
});
