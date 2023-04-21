/* Câu 1:
const student = [
    {
        name: "Dũ",
        age: 14,
        class: 8
    },
    {
        name: "Thông",
        age: 18,
        class: 12
    },
    {
        name: "Bảo",
        age: 16,
        class: 10
    },
    {
        name: "Hào",
        age: 15,
        class: 9
    }
]
const tinhTong = numbers1.reduce((total, item) => {
    return total + item
})

 const students = [
     {
         name: "Dũ",
         age: 14,
         class: 8
     },
     {

        name: "Thông",
         age: 18,
         class: 12
     },
     {
         name: "Bảo",
         age: 16,
         class: 10
     },
     {
         name: "Hào",
         age: 15,
         class: 9
     }
 ]

 total = 
 {
         name: "Dũ",
         age: 14,
         class: 8
     },

 item = {
     name: "Thông",
     age: 18,
     class: 12
},

 total = 22

 const tongTuoi = students.reduce((total, item) => {
     if (typeof total === "object") {
         return total.age + item.age
     }
     else{
         return total + item.age 
     }
 })

 console.log(tongTuoi)
 */

/* Câu 2:
const arr1 = [1,2,4,5,6];
const arr2 = [1,6,8,9,0];

const phanTuTrungNhau1 = arr1.filter(inRa1)
function inRa1 (item) {
    return item == arr2
}
    
 console.log(phanTuTrungNhau1)
*/

/* Câu 3:
const arr = [1,54,6,7] 
const newArr = arr.map((i) => {
     return i + 5
})
console.log(newArr)
*/

/* Câu 4:
const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];
const difer = [1, 8, 10, 96, 7];
const newM = m.map((item)=>{
    return item !== 1, 8, 10, 96, 7
})
const newN = n.map((item)=>{
    return item !== 1, 8, 10, 96, 7
})
console.log(newM)
console.log(newN)
*/
/* Câu 5:
players = [{ id: 11, name: 'Messi', age: 33 },
            { id: 12, name: 'Ronaldo', age: 34 },
            { id: 13, name: 'Young', age: 35 },
            { id: 14, name: 'Mane', age: 21 },
            { id: 15, name: 'Salah', age: 24 }
]

playersModified = 
{ 
    11: {id: 11, name: "Messi", age: 33},
    12: {id: 12, name: "Ronaldo", age: 34},
    13: {id: 13, name: "Young", age: 35},
    14: {id: 14, name: "Mane", age: 21},
    15: {id: 15, name: "Salah", age: 24}
}
*/  