export const countItem=(data,id)=>{
const findIndex=data?.selectItems.findIndex(item=>item.id===id)
if(findIndex === -1){
    return false
}else{
   return data?.selectItems[findIndex].quantity
}
}
export const isInCart=(data,id)=>{
    const find=data.selectItems.find(item=>item.id===id)
    return find
}