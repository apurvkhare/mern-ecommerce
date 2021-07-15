import React from 'react'

const AppContext = React.createContext();

export const useApp = () => {
    const context = React.useContext(AppContext)
    if(!context)
        throw new Error('useApp can only be used in a children component of AppProvider')
    return context
}

export const AppProvider = ({children}) => {
    const [isPromptOpen, setIsPromptOpen] = React.useState(false)

    const value={
        isPromptOpen,
        setIsPromptOpen
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 