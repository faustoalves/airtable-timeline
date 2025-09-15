# Airtable Timeline Component

A simple and interactive timeline component built with React for visualizing project tasks and schedules.

# My Opinions about the Project

### What you like about your implementation.

I enjoyed the challenge of this assignment. It's been a while since I've built a timeline component, especially one with a sophisticated multi-lane layout algorithm. I'm particularly pleased with the core logic that translates temporal data (dates) into a spatial representation (pixels). The separation of concerns is clean: the assignLanes utility handles the complex layout logic, while the React components remain focused on rendering and state management. This architecture makes the component both understandable and maintainable.

### What you would change if you were going to do it again.

With the benefit of hindsight, I would adjust my time allocation. I would tackle the drag-and-drop functionality earlier in the process. Integrating it towards the end introduced some layout complexities with item repositioning that required more refactoring than anticipated.

Additionally, while Styled Components helped encapsulate styles, my recent focus on other styling solutions meant I spent a bit more time on its syntax than I would have liked. I stand by the decision not to use a utility-first framework like Tailwind CSS, as it would have been overkill for a single-component project, but perhaps plain CSS Modules would have been a more streamlined choice for this specific task.

### How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.

My primary design principle was "logic-driven simplicity." Given the four-hour timeframe, my priority was to ensure the core timeline algorithm was robust and accurate. Therefore, I intentionally opted for a clean, minimalist, and functional UI. The design is meant to be clear and unobtrusive, ensuring the data visualization itself is the hero. The focus was on usability: clear lane separation, readable item labels, and intuitive visual cues, drawing inspiration from the functional aesthetic seen in project management tools where clarity is paramount.

### How you would test this if you had more time.

Testing would be a top priority. My approach would be multi-layered:

- Unit Testing: I would use Vitest or Jest to write unit tests for the assignLanes function, feeding it various edge cases (overlapping items, items starting/ending on the same day, etc.) to assert that the lane allocation is always optimal and correct.

- Component Testing: Using React Testing Library, I would test the <Timeline /> component. I'd pass it a mock dataset and verify that the correct number of lanes and items are rendered in the DOM. I would also simulate user interactions, like clicks or drags, to ensure the component state updates as expected.

- Future Enhancements: I'm already thinking about the next steps for this component. I would implement an inline editing mode for item names, managing its state with a lightweight client-state manager like Zustand to keep the component logic clean. I would also add subtle animations on item drop and zoom to enhance the user experience.

## Features

- **Smart Lane Distribution**: Automatically organizes items into horizontal lanes to minimize vertical space
- **Drag & Drop**: Move timeline items horizontally to change their dates
- **Responsive Design**: Adapts to different screen sizes automatically
- **Clean UI**: Modern and minimalist interface
- **Date-based Positioning**: Items are positioned based on their start and end dates

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd timeline
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open in browser**: The project will automatically open at `http://localhost:1234`
