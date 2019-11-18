import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from '../FieldTypes/MyUrlField';

export const Videos = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);