import Field from './Field/Field'

const Info = () =>{
   return (
      <div className="my-4 py-6 border-t-2 border-b-2 border-black-lightest">
         <Field
            label="username"
            value="Locdragon@gmail.com"
            password={false}
         />
         <Field
            label="password"
            value="test123"
            password={true}
         />
         <Field
            label="website"
            value="gmail.com"
            password={false}
         />
      </div>
   )
}

export default Info