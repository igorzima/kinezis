export const modal = (obj) => {
  let res = `<h2 class="modal-title">${obj.title}</h2><hr class="modal-line" />`;

  obj.description.map((el) => {
    if (el.subtitle) {
      res += `<p class="modal-subtitle">${el.subtitle}</p>`;
    }
    if (el.description) {
      res += `<p class="modal-description">${el.description}</p>`;
    }
    if (el.list) {
      const list = el.list
        .map((el) => `<ul>${el.map((list) => `<li>${list}</li>`).join(' ')}</ul>`)
        .join('');

      res += `<div class="flex-wrap modal-list">${list}</div>`;
    }

    return res;
  });

  return res;
};
