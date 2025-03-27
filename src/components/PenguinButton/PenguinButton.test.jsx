import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PenguinButton from './PenguinButton';

describe('PenguinButton', () => {
  test('renderiza el texto correctamente', () => {
    render(<PenguinButton text="Haz clic" />);
    const button = screen.getByRole('button', { name: /haz clic/i });
    expect(button).toBeInTheDocument();
  });

  test('ejecuta la función onClick al hacer clic', () => {
    const handleClick = jest.fn();
    render(<PenguinButton text="Click aquí" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/click aquí/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('usa la clase por defecto si no se pasa color', () => {
    render(<PenguinButton text="Botón" />);
    const button = screen.getByRole('button');
    expect(button.className).toBe('button-primary btn');
  });

  test('usa la clase personalizada si se pasa como prop', () => {
    render(<PenguinButton text="Botón" color="mi-clase-personalizada" />);
    const button = screen.getByRole('button');
    expect(button.className).toBe('mi-clase-personalizada');
  });

  test('onClick no lanza errores si no se pasa', () => {
    render(<PenguinButton text="Sin handler" />);
    const button = screen.getByRole('button');
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});