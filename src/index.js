console.clear();
(function () {
  //load year to html for copyright
  const loadDate = () => {
    const date = new Date();
    const span = document.querySelector('[data-type-date="date"]');
    const currentYear = date.getFullYear();
    span.innerHTML = currentYear + "";
  };

  loadDate();
})();
