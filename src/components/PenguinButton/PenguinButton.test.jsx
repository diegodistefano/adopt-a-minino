import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PenguinButton from './PenguinButton';

describe('PenguinButton', () => {
    test('muestra el texto correctamente', () => {
      render(<PenguinButton text="Haz clic" />);
      expect(screen.getByRole('button', { name: /haz clic/i })).toBeInTheDocument();
    });
  });