import Swal from "sweetalert2";
import { createReceipt, deleteReservation, updateReservationRequest } from "@/api";


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
            문화상품권: '문화상품권',
            모바일결제: '모바일결제',
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
// sweetalert 으로 작성해봄
export const deleteModal = (reservationId) => {
    Swal.fire({
        title: '정말 삭제할까요?',
        test: '삭제한 예약건은 되돌릴 수 없습니다!',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: '삭제',

    }).then((result) => {
        if (result.isConfirmed) {
            deleteReservation(reservationId),
                Swal.fire(
                    '삭제 완료',
                    '예약건이 삭제되었습니다.',
                    'success'
                ).then(() => {
                    location.reload();
                  });
        }
    })
}

export const updateRequestModal = (reservationId) => {
    
    Swal.fire({
        
        input: 'textarea',
        inputLabel: '수정하려는 내용을 입력해 주세요!',
        inputPlaceholder: '수정 내용 입력...',
        showCancelButton: true,
        
        inputValidator: (value) => {
            updateReservationRequest(reservationId, value)
                .then((res) => {
                    console.log(res)
                    Swal.fire(
                        '수정 완료',
                        '예약건이 수정되었습니다.',
                        'success'
                    ).then(() => {
                        location.reload();
                    });
                })
                .catch((err) => {
                    console.log(err)
                    failToast('무언가 잘못되었네요.')
                })

        }
    })

}