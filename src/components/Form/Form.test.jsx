import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './Form';
import { MemoryRouter } from 'react-router-dom';


// Mock del botón personalizado
jest.mock('../CatButton/CatButton', () => ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
));

// Mock de useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock de location.search (params)
const createLocation = (search = '') => {
  delete window.location;
  window.location = new URL(`http://localhost/${search}`);
};

describe('Form component', () => {
  beforeEach(() => {
    createLocation('?breed=Gatito&image=https://example.com/image.jpg');
  });

  test('renderiza encabezado con la raza y la imagen', () => {
    render(<Form />, { wrapper: MemoryRouter });

    expect(screen.getByText(/Adopt Gatito/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Gatito/i)).toBeInTheDocument();
  });

  test('muestra errores si se envía vacío', async () => {
    render(<Form />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    });
  });

  test('muestra error con email y teléfono inválidos', async () => {
    render(<Form />, { wrapper: MemoryRouter });

    fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'Saray' } });
    fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: 'abc123' } });
    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'correo-malo' } });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid phone number/i)).toBeInTheDocument();
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
  });

  test('muestra popup tras envío válido', async () => {
    render(<Form />, { wrapper: MemoryRouter });

    fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'Saray' } });
    fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '123456789' } });
    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'saray@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/¡Gracias por adoptar un gatito!/i)).toBeInTheDocument();
    });
  });

  test('cierra el popup y navega al inicio', async () => {
    render(<Form />, { wrapper: MemoryRouter });

    fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'Saray' } });
    fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '123456789' } });
    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'saray@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    const cerrarBtn = await screen.findByRole('button', { name: /cerrar/i });
    fireEvent.click(cerrarBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});