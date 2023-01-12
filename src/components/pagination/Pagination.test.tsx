import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination, Props } from './Pagination';

test('Renders numbers of pages correctly', () => {
    const mockProps: Props = {
        page: 1,
        totalPages: 60,
        handlePagination: jest.fn(),
        };
    render(<Pagination {...mockProps}/>);

    const allButtons = screen.getAllByRole("button");
    expect((allButtons.at(0) as HTMLButtonElement).textContent).toBe("1");
    expect((allButtons.at(allButtons.length - 2) as HTMLButtonElement).textContent).toBe("60");
    expect((allButtons.at(allButtons.length - 1) as HTMLButtonElement).textContent).toBe(">");
});

test('Renders numbers of pages correctly last page selected', () => {
    const mockProps: Props = {
        page: 60,
        totalPages: 60,
        handlePagination: jest.fn(),
        };
    render(<Pagination {...mockProps}/>);

    const allButtons = screen.getAllByRole("button");
    expect((allButtons.at(0) as HTMLButtonElement).textContent).toBe("<");
    expect((allButtons.at(allButtons.length - 2) as HTMLButtonElement).textContent).toBe("59");
    expect((allButtons.at(allButtons.length - 1) as HTMLButtonElement).textContent).toBe("60");
});

test('renders the component from the beginning', () => {
    const mockProps: Props = {
        page: 1,
        totalPages: 5,
        handlePagination: jest.fn(),
        };
    render(<Pagination {...mockProps}/>);
    
    const allButtons = screen.getAllByRole("button");

    userEvent.click(allButtons.at(0) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(1);
    userEvent.click(allButtons.at(1) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(2);
    userEvent.click(allButtons.at(2) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(3);
    userEvent.click(allButtons.at(3) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(3);
    userEvent.click(allButtons.at(4) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(5);
});

test('renders the component from the end', () => {

    const mockProps: Props = {
        page: 5,
        totalPages: 5,
        handlePagination: jest.fn(),
        };
    render(<Pagination {...mockProps}/>);
    
    const allButtons = screen.getAllByRole("button");

    userEvent.click(allButtons.at(0) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(4);
    userEvent.click(allButtons.at(1) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(1);
    userEvent.click(allButtons.at(2) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(3);
    userEvent.click(allButtons.at(3) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(4);
    userEvent.click(allButtons.at(4) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(5);
});


test('renders the component from the middle', () => {
    const mockProps: Props = {
        page: 3,
        totalPages: 5,
        handlePagination: jest.fn(),
        };
    render(<Pagination {...mockProps}/>);
    
    const allButtons = screen.getAllByRole("button");

    userEvent.click(allButtons.at(0) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(2);
    userEvent.click(allButtons.at(1) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(1);
    userEvent.click(allButtons.at(2) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(2);
    userEvent.click(allButtons.at(3) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(3);
    userEvent.click(allButtons.at(4) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(4);
    userEvent.click(allButtons.at(5) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(5);
    userEvent.click(allButtons.at(6) as HTMLButtonElement);
    expect(mockProps.handlePagination).toHaveBeenCalledWith(4);
});
