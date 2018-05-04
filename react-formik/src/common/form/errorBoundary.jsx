import React from 'react'

export default class extends React.Component {
    constructor(props) {
        console.log('passou por aqu 22i')
        
      super(props);
      this.state = { error: null, errorInfo: null };
      // this.state = { hasError: false };
    }
    
    componentDidCatch(error, errorInfo) {
        console.log('passou por aqui2')
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // this.setState({ hasError: true });
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      console.log('passou por aqui 22')
      if (this.state.errorInfo) {
        console.log('passou por aqui 3')
        
        // Error path
        return (
          <div>Ocorreu um problema 2</div>
        );
      }
      // Normally, just render children
      return this.props.children;
      // return <div>Ocorreu um problema</div>
    }  
  }