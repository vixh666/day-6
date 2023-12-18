export default function Listt()
{
    const college=[{id :1,stuname:"AGR",age:18},
                      {id:2,stuname:"SANJAY",age:18},
                    {id:3,stuname:"UKASH",age:18}]

     const display=college.map((col)=><li key={col.id}>{col.stuname} {col.age}</li>)
     
     return(
        <div>
            <h1>List the Students</h1>
            {display}
            
        </div>
     )
}