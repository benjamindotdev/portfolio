import {
    Card,
    GitButton,
    IconButton,
    LinkButton,
    ListContainer,
    SubHeading,
    TechLogoImage,
} from './index';

describe('Shared Components Barrel Exports', () => {
    it('exports Card component', () => {
        expect(Card).toBeDefined();
    });

    it('exports GitButton component', () => {
        expect(GitButton).toBeDefined();
    });

    it('exports IconButton component', () => {
        expect(IconButton).toBeDefined();
    });

    it('exports LinkButton component', () => {
        expect(LinkButton).toBeDefined();
    });

    it('exports ListContainer component', () => {
        expect(ListContainer).toBeDefined();
    });

    it('exports SubHeading component', () => {
        expect(SubHeading).toBeDefined();
    });

    it('exports TechLogoImage component', () => {
        expect(TechLogoImage).toBeDefined();
    });
});
