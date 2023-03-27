export const dataRefactor=(type,data)=>{
  //예약확정일 경우 (검수예정목록)
  if(type ===1) {
    console.log(data?.value);

  }
  //결제완료일 경우 (세탁예정목록)
  else {
    console.log(111)
  }
}