const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const imageContainers = document.querySelectorAll('.image-container');

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        const imageSrc = container.getAttribute('data-image');
        openModal(imageSrc);
    });
});

modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('modal-close')) {
        closeModal();
    }
});
