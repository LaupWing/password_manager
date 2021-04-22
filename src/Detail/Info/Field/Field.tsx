interface FieldType {
   label: string
   value: string
}

const Field = ({label, value}: FieldType) =>{

   return (
      <div className="py-4 px-2 rounded-md hover:bg-black-light text-sm">
         <h2 className="text-mainGrey font-bold tracking-wider capitalize mb-1">{label}</h2>
         <p className="text-white">{value}</p>
      </div>
   )
}

export default Field