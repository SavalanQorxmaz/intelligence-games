

const numbers = [1,2,3,4,5,6,7,8,9]

export const selectRandomNumber = (array:number[])=>{
    return array[Math.floor(Math.random()*array.length)]
}
export const randomArray = ()=>{
    const numbers = [1,2,3,4,5,6,7,8,9]
    const randomArray = []
    while(numbers.length>0){
        randomArray.push(numbers.splice(Math.floor(Math.random()*numbers.length),1))

    }

    return randomArray

}