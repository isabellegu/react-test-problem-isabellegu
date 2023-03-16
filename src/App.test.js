import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

// import your story from App.stories.js
import { Default } from './App.stories.js';
import { ClickedDisplaysThanks } from './App.stories.js';


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library


it('Checks initial state of button', () => {
    const { getByRole } = render(<Default {...Default.args} />);
    const defaultButton = screen.getByRole('button', { name: /Click me/i });
    expect(defaultButton).toHaveTextContent('Click me');
})

it('Checks if button displays Thanks after clicked', () => {
    const { getByRole } = render(<ClickedDisplaysThanks {...ClickedDisplaysThanks.args} />)
    const clickedButton = screen.getByRole('button', { name: /Click me/i })
    fireEvent.click(screen.getByRole('button', { name: /Click me/i }));
    expect(clickedButton).toHaveTextContent('Thanks')
})

