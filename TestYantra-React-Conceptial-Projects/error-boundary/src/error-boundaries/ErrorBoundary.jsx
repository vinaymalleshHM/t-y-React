import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    state ={
        hasError : false
    }
    static getDerivedStateFromError(error){
        console.log('getDerivedStateFromError executed')
        return{hasError:true}
    }
    componentDidCatch(error,errorInfo){
        console.log('Error ',error);
        console.log('Error Info ',errorInfo);
        

    }

    render() {
        if(this.state.hasError){
        return (
            <div>
                <h1>Something went wrong</h1>
            </div>
        )}
        else{
            return this.props.children
        }
    }
}
