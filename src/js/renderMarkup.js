export const renderMarkup = (ref, todos) => {
  ref.innerHTML = '';

  const markup = todos
    .map(
      ({ id, description }) => `
    <li
      class="list-group-item d-flex justify-content-between align-items-start position-relative"
      id="${id}"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">${description}</div>
      </div>

      <span
        class="badge rounded-pill bg-info text-dark position-absolute top-0 start-100 translate-middle"
        >todo</span
      >

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
        />
      </div>
    </li>`,
    )
    .join('');

  ref.insertAdjacentHTML('beforeend', markup);
};
