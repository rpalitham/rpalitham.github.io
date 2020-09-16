const spans = document.querySelectorAll("h1 span");

spans.forEach((index) =>
  index.addEventListener("mouseover", function (e) {
    index.classList.add("animated", "rubberBand");
  })
);

spans.forEach((index) =>
  index.addEventListener("mouseout", function (e) {
    index.classList.remove("animated", "rubberBand");
  })
);
