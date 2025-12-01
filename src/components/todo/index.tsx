import { useState } from "react";
import { useTodo } from "./useTodo";
import type { TodoType } from "./types";
import TodoItem from "./todo-item";
import { Button, Input, TodoTable } from "./styled";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
  max-width: 1400px;
`;

const Title = styled.h1`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: -1px;
`;

const Form = styled.form`
  margin-bottom: 40px;
  
  div {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #718096;
  font-size: 18px;
  background: linear-gradient(135deg, #f6f8fb 0%, #ffffff 100%);
  border-radius: 16px;
  border: 2px dashed #e2e8f0;
  
  &::before {
    content: "📝";
    display: block;
    font-size: 64px;
    margin-bottom: 16px;
  }
`;

function Todo() {
    const [todo, setTodo] = useState("");
    const { todos, addTodo, markAsDone, removeTodo } = useTodo();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo(value);
    }

    const onClick = () => {
        if (todo === "") return;
        const now = new Date().toISOString();
        const value: TodoType = {
                        content: todo,
                        done: false,
                        createdAt: now,
                        updatedAt: now
                    };
        addTodo(value)
        setTodo("");
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onClick();
        }
    }

    return (
        <Container>
            <Title>✨ My Todo List</Title>
            <Form>
                <div>
                    <Input 
                        type="text" 
                        name="todo" 
                        value={todo} 
                        onChange={onChange}
                        onKeyPress={handleKeyPress}
                        placeholder="What needs to be done?"
                    />
                    <Button type="button" onClick={onClick}>➕ Add Task</Button>
                </div>
            </Form>

            {todos.length > 0 ? (
                <TodoTable>
                    <thead>
                        <tr>
                            <th>✓</th>
                            <th>Task</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => <TodoItem key={todo.createdAt} todo={todo} markAsDone={markAsDone} removeTodo={removeTodo} />)}
                    </tbody>
                </TodoTable>
            ) : (
                <EmptyState>
                    No tasks yet. Add one to get started!
                </EmptyState>
            )}
        </Container>
    )
}

export default Todo;
