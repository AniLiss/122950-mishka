let page = document;
let toggleBnt = page.querySelectorAll('.page-menu-toggle');
let pageMenu = page.querySelectorAll('.page-menu');
let modal = page.querySelectorAll('.modal');
let catalogList = page.querySelectorAll('.catalog-list');
let modalWrapper = page.querySelectorAll('.modal-wrapper');
let orderBtn = page.querySelectorAll('#order');

function openMenu() {
  pageMenu[0].classList.toggle('invisible');
  toggleBnt[0].classList.toggle('page-menu-toggle--cancel')
};

function openModal(e) {
  if (e.target.parentNode.classList.contains('basket-btn') || e.target.classList.contains('btn')) {
    modal[0].classList.toggle('invisible');
    modalWrapper[0].classList.toggle('invisible');
  }
};

toggleBnt[0].addEventListener('click', openMenu);

if(catalogList[0]) {
  catalogList[0].addEventListener('click', openModal);
}

if(orderBtn[0]) {
  orderBtn[0].addEventListener('click', openModal);
}

page.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && !modal[0].classList.contains('invisible')) {
    modal[0].classList.add('invisible');
    modalWrapper[0].classList.add('invisible');
  }
})
