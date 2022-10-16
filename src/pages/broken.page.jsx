import React from "react";

import ErrorBoundary from '../Components/error-boundary/error-boundary.component'

const BrokenPage = () => {
   throw Error
}

export default BrokenPage;