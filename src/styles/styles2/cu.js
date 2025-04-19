const root = document.querySelector(".tabs"),
  tabs = root.querySelectorAll(".tabb"),
  btns = root.querySelectorAll(".btna");
function changeAtiveTab(t, e) {
  let s = t.target;
  for (; "A" !== s.nodeName; ) s = s.parentNode;
  (ulElement = s.parentNode.parentNode),
    (aElements = ulElement.querySelectorAll("li > a")),
    (tabContents = document
      .getElementById("tabs-id")
      .querySelectorAll(".tab-content > div"));
  for (let t = 0; t < aElements.length; t++)
    aElements[t].classList.remove("text-white"),
      aElements[t].classList.remove("bg-pink-600"),
      aElements[t].classList.add("text-pink-600"),
      aElements[t].classList.add("bg-white"),
      tabContents[t].classList.add("hidden"),
      tabContents[t].classList.remove("block");
  s.classList.remove("text-pink-600"),
    s.classList.remove("bg-white"),
    s.classList.add("text-white"),
    s.classList.add("bg-pink-600"),
    document.getElementById(e).classList.remove("hidden"),
    document.getElementById(e).classList.add("block");
}
function changeVisble(t) {
  const e = document.querySelectorAll(".my_item");
  for (const t of e) t.classList.add("hidden");
  document.getElementById(t).classList.remove("hidden");
}
root.onclick = function (t) {
  var e = t.target.getAttribute("tab");
  null != e &&
    (tabs.forEach((t) => {
      t.classList.remove("active-tabb");
    }),
    btns.forEach((t) => {
      t.classList.remove("active-buttonn");
    }),
    tabs[e - 1].classList.add("active-tabb"),
    btns[e - 1].classList.add("active-buttonn"));
};
