import Swal from "sweetalert2";
import { createReceipt } from "@/api";


export const infoAlert = (text) => {
    Swal.fire({
      icon: 'info',
      title: '알림',
      text: text,
    })
}

export const successToast = (text) => {
    Swal.fire({
        icon: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1500,
    })
}

export const showRequest = (text) => {
    text = text == null ? '요청사항이 없습니다.' : text
    Swal.fire({
        icon: 'info',
        title: '요청사항',
        text: text
    })
}

export const failToast = (text) => {
    Swal.fire({
        icon: 'error',
        title: text,
        showConfirmButton: false,
        timer: 1500,
    })
}

export const paymentModal = (id) => {
    Swal.fire({
        title: '결제하기',
        input: 'select',
        inputOptions: {
            문화상품권 : '문화상품권',
            모바일결제 : '모바일결제',
            신용카드: '신용카드',
            토스: '토스',
            PAYCO: 'PAYCO',
            KakaoPay: 'KakaoPay',
        },
        inputPlaceholder: '결제수단을 선택해 주세요.',
        showCancelButton: true,
        reverseButtons: true,
        inputValidator: (value) => {
            //  결제 진행
            createReceipt(id, value)
                .then((res) => {
                    console.log(res)
                    successToast('결제가 완료되었습니다!')
                })
                .catch((err) => {
                    console.log(err)
                    failToast('무언가 잘못되었네요.')
                })

        }
    })
}


export const returnInfoAlert = (text) => {
    return Swal.fire({
      icon: 'info',
      title: '알림',
      text: text,
    })
}