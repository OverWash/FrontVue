import Swal from "sweetalert2";

export const infoAlert = (text) => {
    Swal.fire({
      icon: 'info',
      title: '알림',
      text: text,
    })
}

export  const successToast = (text) => {
Swal.fire({
    icon: 'success',
    title: text,
    showConfirmButton: false,
    timer: 1500,
})
}