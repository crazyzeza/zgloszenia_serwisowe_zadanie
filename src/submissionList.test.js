import { render, screen } from '@testing-library/react'
import SubmissionsList from './SubmissionsList';
const mockData = [//arrange
    {
        id:0,
        klient:"Jan Tur",
        urzadzenie:"Laptop",
        usterka:"Martwe piksele",
        status:"Nowy",
        priorytet:"Niski"
    }, 
    {
        id:1,
        klient:"Maja Ruta",
        urzadzenie:"Tablet", 
        usterka:"Martwe piksele",
        status:"W trakcie",
        priorytet:"Średni"
    } 
]
test("Filtrowanie - nowe zgłoszenia", () => {
    render(<SubmissionsList submissions={mockData} statusToFilterBy="Nowy"/>)//act
    expect(screen.getByText(/Tur/i)).toBeInTheDocument();//assert
})
test("Filtrowanie - zgłoszenia w trakcie", () => {
    render(<SubmissionsList submissions={mockData} statusToFilterBy="W trakcie"/>)//act
    expect(screen.getByText(/Ruta/i)).toBeInTheDocument();//assert
})
test("Filtrowanie - zakończone zgłoszenia", () => {
    render(<SubmissionsList submissions={mockData} statusToFilterBy="Zakończone"/>)//act
    expect(screen.getByText(/Brak zgłoszeń do wyświetlenia/i)).toBeInTheDocument();//assert
})