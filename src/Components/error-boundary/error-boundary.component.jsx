import React from 'react';
import { ErrorImageContainer , ErrorImageOverlay , ErrorImageText} from './error-boundary.styles.jsx';

class ErrorBoundary extends React.Component {
   constructor() {
      super();

      this.state = {
         hasError: false,
         errorMessage: '',
      }
   }

   static getDerivedStateFromError() {
      // process the error 
      return { hasError: true}
   }

   componentDidCatch(error, info) {
      console.log(error)
      this.setState({errorMessage: error})
   }

   render() {
      if(this.state.hasError) {
         return (
            <ErrorImageOverlay>
               <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
               <ErrorImageText>Sorry The page is broken</ErrorImageText>
            </ErrorImageOverlay>
         )
      }

      return this.props.children
   }
   
   
}
export default ErrorBoundary;
