const hrefMenu = [
  `#visi-misi`,
  `#kegiatan-harian`,
  `#kegiatan-tahunan`
]

const nameMenu = [
  `Visi Misi`,
  `Kegiatan Harian`,
  `Kegiatan Tahunan`
]

const dropdown = document.getElementsByClassName(`dropdown`)[0];
const dropdownContent = document.getElementsByClassName(`dropdown-content`)[0];
let isDropdownOpen = false;

for (let i = 0; i < hrefMenu.length; i++) {
  const a = document.createElement(`a`);
  a.setAttribute(`href`, hrefMenu[i]);
  a.innerHTML = nameMenu[i];
  dropdownContent.appendChild(a);
}

const onDropdownClick = () => {
  if (isDropdownOpen) {
    dropdownContent.classList.remove(`dropdown-content-open`);
  } else {
    dropdownContent.classList.add(`dropdown-content-open`);
  }
  isDropdownOpen = !isDropdownOpen;
}

const onLogoClick = () => {
  window.scrollTo(0, 0);
}