import Field from './Field/Field'

const Info = () =>{
   return (
      <div className="my-4 py-6 border-t-2 border-b-2 border-black-lightest">
         <Field
            label="username"
            value="Locdragon@gmail.com"
         />
         <Field
            label="password"
            value="test123"
         />
         <Field
            label="website"
            value="gmail.com"
         />
      </div>
   )
}

export default Info