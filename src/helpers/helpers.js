const ACTIVE = " active";

export function getListItems() {
  return document.getElementById("content-list");
}

export function setActiveListItem(index) {
  getListItems().children[index].className += ACTIVE;
}

export function removeActiveListItem(index) {
  let classes = getListItems().children[index].className;
  getListItems().children[index].className = classes.replace(ACTIVE, "");
}

export function setListItems(list) {
  getListItems().innerHTML = list;
}

export function setHeaderOfList(title) {
  document.getElementById("header-of-list").innerHTML = title;
}

export function setDetails(details) {
  document.getElementById("details-description").innerHTML = details;
}

export function getMenu() {
  return document.querySelectorAll(".btn__menu");
}

export function setDetailsImage(img) {
  document.getElementById("details-image").innerHTML = img;
}

export function getItemID(e) {
  const id = e.target.dataset.component;
  return id;
}
