interface Password {
   url: string
   username: string
   password: string
}


const Vault =  function() {
   const passwords:Password[] = [
      {
         url: 'www.google.com',
         username:  'locdragon@gmail.com',
         password: 'test'
      },
      {
         url: 'www.instagram.com',
         username:  'locdragon@gmail.com',
         password: 'test'
      },
   ]
   return (
      <div className="h-full bg-black-light border-r-2 border-black">
         <ul className="text-white text-sm p-2">
            {passwords.map(password =>(
               <li>
                  <img src={`https://logo.clearbit.com/${password.url}`} alt=""/>
               </li>
            ))
            }
         </ul>
      </div>
   );
}

export default Vault