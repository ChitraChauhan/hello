import React, { Component } from 'react';
import TableData from './TableData';
import FormComponent from './FormComponent';
//import FormErrors from './FormErrors';

const TaskFields = [
    {
        name: 'name', defaultValue: '', required: true, errorMessage: 'Name is invalid', checkValidity: (value) => {
            return value.match(/^[a-zA-Z]+$/);
        }
    },
    { name: 'date', defaultValue: '', required: true },
    { name: 'description', defaultValue: '' },
    {
        name: 'duration', defaultValue: '', required: true, errorMessage: 'invalid duration', checkValidity: (value) => {
            return value.match(/^[1-9]+$/);
        }
    },
    { name: 'status', defaultValue: 'In Progress' },
];

//return formErrors with name as null when required is true
const getFormErrorsFields = (Fields) => {
    const formErrors = {};
    Fields.filter(x => x.required)
        .forEach(x => {
            formErrors[x.name] = '';
        });
    return formErrors;
}

let taskId = 0;

const initialState = [{
    id: ++taskId,
    name: 'taskA',
    date: '1999-05-01',
    description: 'task1',
    duration: '1',
    status: 'New',
}, {
    id: ++taskId,
    name: 'taskB',
    date: '2008-05-02',
    description: 'task2',
    duration: '2',
    status: 'Resolved',
}]

const initialForm = {
    name: '',
    date: '',
    description: '',
    duration: '',
    status: 'In Progress'   
};
/**
 * 
 * handleChange(e) {
 *  const { name, value } = e.target; 
 *  const field = TaskFields.filter();
 *  const errors = this.validateField(field);
 *  this.setState({ form: {}, errors })
 * }
 * 
 * validateField(field) {
 *  return errors;
 * }
 * 
 * validateForm() {
 *  let errors = {};
 * const { form} = this.state;
 *  TaskFields.forEach(field => { 
 *  const value = form[field.name]
 *    errors = { ...errors, ...this.validateField(field) };
 *  })
 * 
 *  return true;
 * }
 * 
 * onSave() {
 *  if(this.validateForm()) {
 * 
 *  }
 * }
 * 
*/

export class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: { ...initialForm },
            formErrors: getFormErrorsFields(TaskFields),
            list: [...initialState],
            updatedList: [...initialState],
            keyword: ''
        }
    }

    handleInputChange(e) {
        const { form } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        form[name] = value;
        const field = TaskFields.find(x => (x.name === name))
        let errors = this.validateField(field);
        this.setState({
            form,
            formErrors: { ...errors }
        });
    }

    validateField(field) {
        const { form, formErrors } = this.state;
        if (field.required) {
            formErrors[field.name] = form[field.name] ? '' : 'this field is required';
        }
        const value = form[field.name]
        if (field.checkValidity && value !== '') {
            let formValue = field.checkValidity(value);
            //console.log("formValue:::", formValue)
            if (formValue === null) {
                formErrors[field.name] = field.errorMessage;
            }
        }
        return formErrors
    }

    validateForm() {
        let fieldErrors = {};
        const { formErrors } = this.state;
        TaskFields
            .forEach(field => {
                fieldErrors = {
                    ...formErrors,
                    ...this.validateField(field)
                }
            });
        this.setState({ formErrors: { ...fieldErrors } })
        if (Object.keys(formErrors).filter(x => formErrors[x]).length === 0) {
            return true
        }
    }

    findIndex(id) {
        const { list } = this.state;
        return list.findIndex(record => record.id === id);
    }

    onSave(e) {
        e.preventDefault();
        if (this.validateForm()) {
            this.setState(prevState => {
                const { list, form } = prevState;
                if (form.id) {
                    const index = this.findIndex(form.id);
                    if (index === -1) {
                        list.push({ ...form });
                    }
                    else {
                        list[index] = form
                    }
                    return { list }
                }
                else {
                    form.id = ++taskId;
                    list.push({ ...form });
                    return { list }
                }
            });
        }
        this.onReset()
    }

    onEdit(record) {
        this.setState({ form: { ...record } })
    }

    onDelete(index) {
        const { list } = this.state;
        list.splice(index, 1);
        this.setState({ list });
    }

    onReset() {
        this.setState({
            form: { ...initialForm }
        })
    }

    onSearch(e) {
        const { list } = this.state;
        let searchWord = e.target.value.toLowerCase();
        let updatedList = list.filter((record) => {
            return record.name.toLowerCase().search(searchWord) !== -1 || record.date.search(searchWord) !== -1 ||
                record.duration.search(searchWord) !== -1 || record.description.toLowerCase().search(searchWord) !== -1 ||
                record.status.toLowerCase().search(searchWord) !== -1;
        });
        this.setState({
            updatedList: updatedList,
            keyword: searchWord,
            //list: updatedList
        });
    }

    getFilteredList() {
        const { keyword, list, updatedList } = this.state;
        if (keyword === '') {
            return list;
        }
        else return updatedList
    }

    render() {
        const { form, formErrors, keyword } = this.state
        return (
            <div>
                {/* <FormErrors formErrors={formErrors} /> */}
                <FormComponent
                    form={form}
                    formErrors={formErrors}
                    handleInputChange={(e) => this.handleInputChange(e)}
                    onSave={(e) => this.onSave(e)}
                    onReset={() => this.onReset()} />

                <TableData
                    list={this.getFilteredList()}
                    onEdit={(e) => this.onEdit(e)}
                    onDelete={(index) => this.onDelete(index)}
                    onSearch={(e) => this.onSearch(e)}
                    keyword={keyword}
                />
            </div>
        );
    }
}

export default TaskApp;