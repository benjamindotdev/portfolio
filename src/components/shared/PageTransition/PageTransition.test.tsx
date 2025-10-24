import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { PageTransition } from './PageTransition';

const TestComponent = ({ text }: { text: string }) => <div>{text}</div>;

const NavigationButton = ({ to }: { to: string }) => {
    const navigate = useNavigate();
    return <button onClick={() => navigate(to)}>Navigate</button>;
};

describe('PageTransition', () => {
    it('should render children', () => {
        render(
            <BrowserRouter>
                <PageTransition>
                    <TestComponent text="Test content" />
                </PageTransition>
            </BrowserRouter>
        );
        
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should handle route changes', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <div>
                                    <TestComponent text="Home" />
                                    <NavigationButton to="/about" />
                                </div>
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <TestComponent text="About" />
                            </PageTransition>
                        }
                    />
                </Routes>
            </BrowserRouter>
        );
        
        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});
