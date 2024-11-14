import React from "react";
import { Field, Formik } from 'formik';
import { Form } from "formik";
import { FilterType } from "../../redux/users-reducer";
import n from './UsersSearchForm.module.scss';
//@ts-ignore
import users from '../../assets/images/icons/users.svg';


const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FormType = {
    term: string,
    friend: "true" | "false" | "null"
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FormType, { setSubmitting } : {setSubmitting: (isSubmitting :boolean) => void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        props.onFilterChanged(filter);
        setSubmitting(false);
    }

    return (
    <div>
        <Formik
            initialValues={{ term: '', friend: "null" as "null" }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({
            isSubmitting,   
            }) => (
            <Form>  
                    <div className={n.searchInputWrapper}>
                    <Field type='text' name='term' className={n.searchInput} placeholder="Filter by nickname..."/>
                    </div>
                <Field name="friend" as="select" className={n.selectList}>
                    <option value="null">All</option>
                    <option value="true">Only Followed</option>
                    <option value="false">Only Unfollowed</option>
                </Field>
                <button type="submit" disabled={isSubmitting} className={n.searchButton}>
                Find
                </button>
                <div className={n.usersLogoContainer}>
                    <h1 style={{margin: '0', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', color: 'rgba(0, 0, 0, 0.7)'}}>Users</h1>
                    <img src={users} alt="UsersLogo" style={{marginLeft: '10px', opacity: '0.7'}}/>
                </div>
            </Form>
            )}
        </Formik>
    </div>
)})

export default UsersSearchForm;