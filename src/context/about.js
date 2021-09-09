import React from 'react';

const AboutContext = React.createContext();

export const AboutProvider = AboutContext.Provider;
export const AboutConsumer = AboutContext.Consumer;

export default AboutContext;
