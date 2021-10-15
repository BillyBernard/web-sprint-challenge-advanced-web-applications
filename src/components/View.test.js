import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';

jest.mock('../services/articleServices');

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce([]);

    render(<View/>);
    await waitFor(() => {
        const articles = screen.queryAllByTestId("article");
        expect(articles).toHaveLength(0);
    })
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce([
        {
            id: 1,
            author: "guy",
            body: "made up",
            createdOn: "today",
            headline: "oof",            
            summary: "ouch",
        },
        {
            id: 2,
            author: "guy2",
            body: "made up again",
            createdOn: "tomorrow",
            headline: "oof again",            
            summary: "ouch again",
        },
        {
            id: 3,
            author: "guy 3",
            body: "made up again again",
            createdOn: "i don't know the date",
            headline: "oof again again",            
            summary: "ouch again again",
        }
    
    ])

    render(<View />);
    const articles = await screen.findAllByTestId("article");
    expect(articles).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.