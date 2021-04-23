import Field from './Field/Field'
import {Password} from '../../../types/Objects'

type InfoProps = {
   detail: Password
}

const Info = ({detail}:InfoProps) =>{
   return (
      <div className="my-4 py-6 border-t-2 border-b-2 border-black-lightest">
         <Field
            label="username"
            value={detail.username}
            password={false}
            duplicate={true}
            />
         <Field
            label="password"
            value={detail.password}
            password={true}
            duplicate={true}
            eye={true}
         />
         <Field
            label="website"
            value={detail.url}
            password={false}
            link={true}
            duplicate={true}
         />
      </div>
   )
}

export default Info