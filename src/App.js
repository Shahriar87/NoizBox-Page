// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/Videos/Posts';
import {Videos} from './components/Videos/Videos';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import Dashboard from './components/CustomerView/Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={Videos} icon={OndemandVideoIcon}/>
    </Admin>
);

export default App;