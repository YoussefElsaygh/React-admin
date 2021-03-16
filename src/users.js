import * as React from "react";
import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
} from "react-admin";


export const UserCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput  source="name" />
            <TextInput  source="username" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput  source="name" />
            <TextInput  source="username" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);