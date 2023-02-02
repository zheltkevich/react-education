import React, {useState} from "react";
import './styles/App.css';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import InputText from "./components/InputText";
import PostsList from "./components/PostsList";

const POSTS1 = [
    {
        id: 1,
        title: 'Javascript',
        description: 'Javascript - язык программирования'
    },
    {
        id: 2,
        title: 'Javascript 2',
        description: 'Javascript - язык программирования'
    },
    {
        id: 3,
        title: 'Javascript 3',
        description: 'Javascript - язык программирования'
    },
];
const POSTS2 = [
    {
        id: 1,
        title: 'Python',
        description: 'Python - язык программирования'
    },
    {
        id: 2,
        title: 'Python 2',
        description: 'Python - язык программирования'
    },
    {
        id: 3,
        title: 'Python 3',
        description: 'Python - язык программирования'
    },
];


function App() {
    const [posts1, setPosts1] = useState(POSTS1);
    const [posts2, setPosts2] = useState(POSTS2);

    return (
        <div className="app">
            <div className="first-components">
                <InputText></InputText>
                <div className="first-components__counters">
                    <Counter></Counter>
                    <ClassCounter></ClassCounter>
                    <button type="button">Создать пост</button>
                </div>
            </div>

            <hr />
            <hr />
            <form action="">
                <input type="text" placeholder="Название поста" />
                <input type="text" placeholder="Описание поста" />
            </form>
            <PostsList posts={posts1} title={"JavaScript"}></PostsList>
            <PostsList posts={posts2} title={"Python"}></PostsList>
        </div>
    );
}

export default App;
