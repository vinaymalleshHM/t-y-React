import React from 'react'


const UserAuthenticContext = React.createContext({
    login: true
});

const UserProvider =  UserAuthenticContext.Provider
const UserConsumer =  UserAuthenticContext.Consumer

export{UserProvider,UserConsumer}
export default UserAuthenticContext;
