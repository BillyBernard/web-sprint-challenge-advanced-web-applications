import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 1,
    headline: "made up headline",
    createdOn: 'made up date',
    author: "made up author",
    summary: "made up summary",
    body: "made up body",

}

const newTestArticle = {
    id: 1,
    headline: "made up headline",
    createdOn: 'made up date',
    author: "",
    summary: "made up summary",
    body: "made up body",

}

test('renders component without errors', ()=> {
    render (<Article article={testArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render (<Article article={testArticle}/>);
    const headline = screen.queryByTestId(/headline/i);
    const author = screen.queryByTestId(/author/i);
    const summary = screen.queryByTestId(/summary/i);
    const body = screen.queryByTestId(/body/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render (<Article article={newTestArticle}/>);

    const headline = screen.queryByTestId(/headline/i);
    const summary = screen.queryByTestId(/summary/i);
    const body = screen.queryByTestId(/body/i);
    const associatedPress = screen.getByText(/associated press/i);

    expect(associatedPress).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn();
    render (<Article article={testArticle} handleDelete={mockHandleDelete}/>);

    const deleteButton = screen.queryByTestId(/deletebutton/i);
    userEvent.click(deleteButton);

    expect(mockHandleDelete).toBeCalledTimes(1);
    
});

//Task List:
//1. Complete all above tests. Create test article data when needed.