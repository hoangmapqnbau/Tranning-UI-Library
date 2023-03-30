import { render } from "@testing-library/react";
import Example from "../../Pages/Example";


describe('Render example correctly', () => {
    const {example} = render(<Example />);
    expect(example).toBeInTheDocument();
})