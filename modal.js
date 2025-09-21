(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
		form: document.getElementById('hero-modal-form'),
	};

	refs.openModalBtn.addEventListener('click', () => {
		refs.modal.classList.remove('is-hidden');
		document.body.classList.add('no-scroll');
	});

	refs.closeModalBtn.addEventListener('click', () => {
		refs.modal.classList.add('is-hidden');
		document.body.classList.remove('no-scroll');
	});

	refs.form.addEventListener('submit', event => {
		event.preventDefault();
		refs.modal.classList.add('is-hidden');
		document.body.classList.remove('no-scroll');
	});
})();
