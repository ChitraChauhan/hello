import React, { Component } from 'react';
import TableData from './TableData';
import FormComponent from './FormComponent';
//import FormErrors from './FormErrors';

const taskfields = [
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

/**
 * 
 * handleChange(e) {
 *  const { name, value } = e.target; 
 *  const field = taskFields.filter();
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
 *  taskFields.forEach(field => {
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
            form: {
                name: '',
                date: '',
                description: '',
                duration: '',
                status: 'In Progress'
            },
            formErrors: getFormErrorsFields(taskfields),
            errors: [],
            list: [...initialState],
            updatedList: [...initialState]
        }
    }

    handleInputChange(e) {
        const { form } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        form[name] = value;
        this.setState(
            { form },
            () => { this.validateFieldForNull(name, value) }
        );
    }

    validateFieldForNull(name, value) {
        const { form, errors } = this.state;
        taskfields.filter(x => x.required)
            .forEach(x => {
                errors[x.name] = form[x.name] ? '' : 'this field is required';

            })
        if (name !== '') {
            taskfields.filter(x => x.checkValidity)
                .forEach(x => {
                    if (x.name === name) {
                        //when checkValidity return false, the formValue is null
                        let formValue = x.checkValidity(value);
                        //console.log("formValue:::", formValue)
                        if (formValue === null) {
                            errors[x.name] = x.errorMessage;
                        }
                    }
                })
        }
        this.setState({
            formErrors: { ...errors }
        })
    }

    findIndex(id) {
        const { list } = this.state;
        return list.findIndex(record => record.id === id);
    }

    onSave(e) {
        e.preventDefault();
        const { form } = this.state;
        if (form.name === '' || form.date === '' || form.duration === '') {
            this.validateFieldForNull()
        }
        this.setState(prevState => {
            const { formErrors, list, form } = prevState;
            if (formErrors.name === '' && formErrors.date === '' && formErrors.duration === '') {
                if (form.id) {
                    const index = this.findIndex(form.id);
                    list[index] = form
                    return { list }
                }
                else {
                    form.id = ++taskId;
                    list.push({ ...form });
                    return { list }
                }
            }
            return null;
        }
        );

        this.onReset()
    }

    //this.setState(list)
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
            form: {
                name: '',
                date: '',
                description: '',
                duration: '',
                status: 'In Progress'
            }
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
        this.setState({ updatedList: updatedList });
    }

    render() {
        const { form, formErrors, updatedList } = this.state
        let list = updatedList;
        //console.log("Form:::", list[list.findIndex(record => record.id) === 2]);
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
                    list={[...list]}
                    onEdit={(e) => this.onEdit(e)}
                    onDelete={(index) => this.onDelete(index)}
                    onSearch={(e) => this.onSearch(e)}
                />
            </div>
        );
    }
}

export default TaskApp;