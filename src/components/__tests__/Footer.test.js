import React from 'react';
import { getByTestId, getByText, render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faEnvelopeOpen,faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubAlt, faLinkedinIn, faEnvelope, faEnvelopeOpen, faPhone);

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('should display the appropriate text', () => {
    render(<Footer />);
    expect(screen.getByTestId('name-text')).toHaveTextContent("Connor Mackay");
  })
});