import React, { useContext, useReducer } from 'react';

interface User {
    user:any
    token:any
    permissions:any
}

const UserContext = React.createContext(undefined);

const userReducer = (state:User, action:any) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, ...action.payload }
        case 'LOGOUT_USER':
            return null
        default:
            return state
    }
}

const initialState = {

}

export default function UserProvider({ children, user }:{ children:React.ReactNode, user:User|null }) {
    const [state, dispatch] = useReducer(userReducer, null)
    const value = {
        user: user,
        setUser: (user:User) => {
            dispatch({ type: 'SET_USER', payload: user });
        },
        logoutUser: () => {
          dispatch({ type: 'LOGOUT_USER' });
        },
        // markAsCompleted: (todoItemId) => {
        //   dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
        // }
    };
    return (
        // @ts-ignore
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = (): any => {
    const user = useContext(UserContext)
    if (!user) throw Error('add user provider at the top')
    return user
}