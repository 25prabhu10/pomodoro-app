import { settingsBtn, settingsModal, closeBtn } from './elements';

const openModal = () => {
  settingsModal.classList.remove('hidden');
  settingsModal.classList.add('display');
  // modalContent.classList.add('translate-from-bottom');
};

const closeModal = () => {
  settingsModal.classList.add('hide');
  setTimeout(() => {
    settingsModal.classList.remove('display');
    settingsModal.classList.add('hidden');
    settingsModal.classList.remove('hide');
  }, 500);
};

settingsBtn.addEventListener('click', () => {
  openModal();
});

closeBtn.addEventListener('click', () => closeModal());
