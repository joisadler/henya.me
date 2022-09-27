import ReactModal from 'react-modal';
import { oneOfType, arrayOf, node } from 'prop-types';

ReactModal.setAppElement('#__next');

const Modal = ({ children, ...props }) => {
  return <ReactModal {...props}>{children}</ReactModal>;
};

Modal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Modal;
