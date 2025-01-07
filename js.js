       // Get Elements
       const openModalButton = document.querySelector('.open-modal');
       const closeModalButton = document.querySelector('#closeModal');
       const modalOverlay = document.querySelector('#modalOverlay');

       // Open Modal
       openModalButton.addEventListener('click', () => {
           modalOverlay.classList.add('show');
       });

       // Close Modal
       closeModalButton.addEventListener('click', () => {
           modalOverlay.classList.remove('show');
       });

       // Close Modal on Outside Click
       modalOverlay.addEventListener('click', (e) => {
           if (e.target === modalOverlay) {
               modalOverlay.classList.remove('show');
           }
       });
