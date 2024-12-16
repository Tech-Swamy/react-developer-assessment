
## React Developer Assessment

**Task**

Build a **Kanban Board Application** where users can:
1. View tasks categorized into multiple columns (“To Do,” “In Progress,” “Done”).
2. Create, edit, and delete tasks.
3. Drag and drop tasks between columns.
4. Persist changes using an API.

**Requirements**

**1. Features**
- **Task Board**:
	- Display tasks grouped in columns (e.g., “To Do,” “In Progress,” “Done”).

	- Each task should show a title, description, and status.

- **CRUD Operations**:
	- **Create**: Add a new task via a form (fields: title, description, status).
	- **Edit**: Click on a task to edit its details in a modal or popup.
	- **Delete**: Remove tasks with a delete button.
	- **Drag & Drop**:
		- Implement drag-and-drop functionality to move tasks between columns.
		- Persist task status changes after a successful drag and drop.

**2. API Integration**
> You may mock these APIs using [_json-server_](https://github.com/typicode/json-server) or a similar tool

- Use the provided API endpoints:
	- `GET /tasks` – Fetch all tasks.
	- `POST /tasks` – Create a new task.
		- Request body: `{ "title": string, "description": string, "status": string }`
	- `PUT /tasks/:id` – Update a task (title, description, or status).
		- Request body: `{ "title": string, "description": string, "status": string }`
	- `DELETE /tasks/:id` – Delete a task.

  
**3. State Management**
	- Use any state management technique that you are comfortable with. Preferably **Redux**, or **Zustand**.

**4. CSS**
	- Create a clean and responsive UI.
	- No need for animations / transitions for drag-and-drop operations. You are free to implement it if you'd like.
	- Ensure the UI is mobile-friendly

**5. Additional Functionality (Bonus):**
	- **Search and Filter**:
		- Add a search bar to filter tasks by title or description (client side only)
		- Add filters to view tasks by status


**Technical Constraints**
1. Use **React (TypeScript preferred)**.
2. Use either react-beautiful-dnd or @dnd-kit for drag-and-drop functionality.
3. State management should be centralized.
4. Follow component-based architecture with reusable components.

**Submission Guidelines**
1. Create a PR to this repo once done.
2. Include a README.md with:
	- Instructions to set up and run the project locally.
	- A brief explanation of your architecture and state management choices.

**Evaluation Criteria**
1. **React Knowledge**:
	- Proper use of React hooks, lifecycle methods, and component composition.
2. **State Management**:
	- Efficient management of the tasks state.
	- Clean separation of concerns between UI and logic.
3. **API Integration**:
	- Handling API calls robustly (e.g., error handling, loading states).
4. **CSS**:
	- Modern, responsive design.
	- Smooth animations for drag-and-drop and transitions.
5. **Code Quality**:
	- Maintainable, modular code.
	- Proper folder structure and use of reusable components.
6. **Extra Features (Bonus)**:
	- Search and filters, dark mode.

