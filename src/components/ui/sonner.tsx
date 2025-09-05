// Stub file to prevent build errors
import React from 'react';

export const toast = {
  success: (message: string) => console.log('Success:', message),
  error: (message: string) => console.error('Error:', message),
  info: (message: string) => console.info('Info:', message),
};

export const Toaster = () => <div />;
export default Toaster;
