import Field from './Field/Field'

const Info = () =>{
   return (
      <div className="my-4 py-6 border-t-2 border-b-2 border-black-lightest">
         <Field
            label="username"
            value="Locdragon@gmail.com"
            password={false}
            duplicate={true}
            />
         <Field
            label="password"
            value="test123"
            password={true}
            duplicate={true}
            eye={true}
         />
         <Field
            label="website"
            value="gmail.com"
            password={false}
            link={true}
            duplicate={true}
         />
      </div>
   )
}

export default Info