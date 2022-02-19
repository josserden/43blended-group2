import Swal from 'sweetalert2';

export const showNotify = (icon = 'error', title = 'Your message empty!') => {
  Swal.fire({
    position: 'center',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};
