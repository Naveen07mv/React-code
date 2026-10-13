import React from "react"; 
const ObjectExample=()=>{
    const student=[{
        id:1,
        name:"naveen",
        age:20,
        dept:"IT",
        mark : 75
    },
    {
        id:2,
        name:"srinaveen",
        age:20,
        dept:"IT",
        mark : 95
    }
]
const data=student.map((i)=>{
    return(
        <>
          <table>
            <thead>
                <tr>
                  <th>name</th>
                  <th>age</th>
                  <th>dept</th>
                  <th>mark</th>
                </tr>
               
            </thead>
            <tbody>
                <tr>
                   <td>{student[0].name}</td>
                   <td>{student[0].age}</td>
                   <td>{student[0].dept}</td>
                   <td>{student[0].mark}</td>
                </tr>
                <tr>
                   <td>{student[1].name}</td>
                   <td>{student[1].age}</td>
                   <td>{student[1].dept}</td>
                   <td>{student[1].mark}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
})
// const number=[1,2,3,4,5,6]
// console.log("pop=",number.pop(),number)
// console.log("push=",number.push(8),number)
// console.log("shift=",number.shift(),number)
// console.log("unshift=",number.unshift(70),number)
const name=["naveen","mani","theni","tamil"]
// const result=name.slice(1,2)
// console.log("name= ",result,name)
const result2=name.splice(1,2,"sri")
console.log("name= ",result2,name)
// console.log(number.pop())
// console.log(number.pop())

// const filtered=number.filter(
//     function(x){
//         return x>2
//     }
// )
// const filtered=number.filter((x)=>x>2)
// console.log(filtered)
// const dataset=student.filter((i)=>i.mark>90)
// console.log(dataset)
    return(
        <>  
        {/* {dataset.map((i)=>{
        return(
            <>
            {i.name}
            </>
        )
       })} */}
        </>
    )
}
export default ObjectExample