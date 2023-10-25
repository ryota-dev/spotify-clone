'use client';

import Modal from './Modal';

const AuthModal = () => {
  return (
    <Modal
      title='Welcome back'
      description='Login to your account'
      isOpen
      onChange={() => {}}
    >
      Auth Children
    </Modal>
  );
};

export default AuthModal;