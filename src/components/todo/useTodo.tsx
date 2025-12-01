import { useEffect, useState } from "react";
import { todoApi } from "../../utils/apiClient";
import type { TodoType } from "./types";

export const useTodo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const addTodo = async (todo: TodoType) => {
        try {
            const data = await todoApi.createTodo(todo);
            if (data.inserted?.length > 0) {
                setTodos([...todos, data.inserted[0]]);
            }
        } catch (error) {
            console.error('Error adding todo:', error);
            throw error;
        }
    }

    const removeTodo = async (id: string) => {
        try {
            await todoApi.deleteTodo(id);
   
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error removing todo:', error);
            throw error;
        }
    }

    const markAsDone = async (id: string) => {
        try {
            const todo = todos.find(t => t._id === id);
            if (!todo) return;
            
            const updatedAt = new Date().toISOString();
            const newDoneState = !todo.done;
            
            await todoApi.updateTodo(id, {
                done: newDoneState,
                updatedAt
            });
            
            setTodos(todos.map(t => 
                t._id === id 
                    ? { ...t, done: newDoneState, updatedAt } 
                    : t
            ));
        } catch (error) {
            console.error('Error marking todo as done:', error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await todoApi.getTodos();
                if (Array.isArray(data)) {
                    setTodos(data);
                } else {
                    console.error('API response is not an array:', data);
                    setTodos([]);
                }
            } catch (error) {
                console.error('Error fetching todos:', error);
                // No re-lanzamos el error para evitar que explote la UI
                setTodos([]); 
            }
        };

        fetchTodos();
    }, []);

    return { todos, addTodo, removeTodo, markAsDone }
}