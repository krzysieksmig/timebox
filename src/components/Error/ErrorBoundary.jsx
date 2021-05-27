import React from 'react';
import ErrorMessage from './ErrorMessage'

class ErrorBoundary extends React.Component{
    state={
        hasError: false
    }

    static getDerivedStateFromError(error) {
        // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
        console.log("Wystapil error: " ,error, errorInfo);
      }

    render(){
        const {message , children} = this.props;
        return <ErrorMessage 
                    hasError={this.state.hasError} 
                    message={message} 
                    children={children}
                />
    }
}
export default ErrorBoundary;