// import React, { Component } from 'react';
// import TableData from './TableData';
// import FormComponent from './FormComponent';
// import FormErrors from './FormErrors';

// const TaskFields = [
//     { name: 'name', defaultValue: '', required: true, errorMessage: 'required' },
//     { name: 'date', defaultValue: '' },
//     { name: 'description', defaultValue: '' },
//     { name: 'duration', defaultValue: '', required: true, errorMessage: 'Invalid' },
//     { name: 'status', defaultValue: 'In Progress' },
// ];


// //return formErrors with name as null when required is true
// const getFormErrorsFields = (Fields) => {
//     const formErrors = {};
//     Fields.filter(x => x.required)
//         .forEach(x => {
//             formErrors[x.name] = null;
//         });  
//     return formErrors;
// }

// export class TaskApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             form: {
//                 name: '',
//                 date: '',
//                 description: '',
//                 duration: '',
//                 status: 'In Progress'
//             },
//             formErrors: getFormErrorsFields(TaskFields),
//             list: []
//         }
//     }

//     handleInputChange(e) {
//         const { form } = this.state;
//         let name = e.target.name;
//         let value = e.target.value;
//         form[name] = value;
        
//         this.setState(
//             { form },
//             () => {this.validateField(name, value)});
//     }

//     validateField(fieldName, value) {
//         // let form = this.state.form;
//         let formErrors = this.state.formErrors;
//         switch (fieldName) {
//             case 'name':
//                 formErrors.name = value ? '' : 'Name is required';
//                 break;
//             case 'duration':
//                 formErrors.duration = value <= 0 ? 'Invalid Duration' : '';
//                 break;
//             default:
//                 break;
//         }
//         this.setState({
//             formErrors: { ...formErrors }
//         })
//         //return { ...formErrors }
//     }

//     addData(e) {
//         e.preventDefault();
//         const { list, form } = this.state;
//         //console.log("formErrors: ", formErrors)
        
//         //this.validateField('name', form.name);
//         //this.validateField('duration', form.duration);

//         this.setState(prevState => {
//             const { formErrors } = prevState;
//             console.log("formErrors", formErrors)
//             if (formErrors ===  "") {
//                 list.push({ ...form });
//                 return { list };
//             }
//             return null;
//         });

//     }

//     render() {
//         const { form, formErrors, list } = this.state
//         return (
//             <div>
//                 {/* <FormErrors formErrors={formErrors} /> */}
//                 <FormComponent form={form} formErrors={formErrors} handleInputChange={(e) => this.handleInputChange(e)} addData={(e) => this.addData(e)} />
//                 <TableData list={[...list]} />
//             </div>
//         );
//     }
// }

// export default TaskApp;

import React from 'react';
import FormDetails from './Form';
import TableTask from './TableTask';
import moment from 'moment';
import {Card} from 'material-ui';

let id = 1;
const defaultData = {
    id:'',
    name:'',
    startDate:'',
    endDate:'',
    duration:''
}

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            formData: {...defaultData},
            data: new Array(10).fill({}).map((o, i) => ({
                    id: id++,
                    name: `Task ${i+1}`,
                    startDate: moment().add(i, 'day').format('YYYY-MM-DD'),
                    endDate: moment().add(i+12, 'day').format('YYYY-MM-DD'),
                    duration: 12,
            })),
            formErrors: { 
                id: '',
                name: '', 
                startDate: '', 
                endDate:'', 
                duration:''
            },
            searchValue:"",
        };
    }

    onChange (key, value){
        const {formData} = this.state;
        formData[key] = value;
        if(key === "endDate" || key === "startDate"){
            const endDate = formData.endDate;
            const startDate = formData.startDate;
            const durationText = this.calcDuration(startDate, endDate);
            formData.duration = durationText
        }
        this.setState({formData},
            ()=> { this.validateField(key, value) }
        );
    }

    onSearch(value){
        this.setState({searchValue: value})
    }

    findIndex(id) {
        const {data} = this.state;
        return data.findIndex(i => i.id === id);
    }
 
    onSave (e){
        e.preventDefault();
        const {data, formData} = this.state;
        if(formData.id){
            //edit
            const formIndex = this.findIndex(formData.id)
            data[formIndex] = formData;   
        }
        else{
            //add
            formData.id = id++;
            data.push(formData);
        }
        this.setState({ data: [...data], formData: {...defaultData} });
    }

    onDelete (id){
        const { data } = this.state;
        const formIndex = this.findIndex(id);
        data.splice(formIndex, 1);
        this.setState({ data: [...data] });
    }

    onEdit (id){
        const { data } = this.state;
        const findIndex = this.findIndex(id);
        this.setState({ formData: {...data[findIndex]} });     
    }

     // validateField(fieldName, value) {
    //     let formErrors = this.state.formErrors;
    //     let nameValid;

    //     switch (fieldName) {
    //         case 'name':
    //             nameValid = value.match(/^[a-zA-Z]+$/);
    //             formErrors.name = nameValid ? '' : 'Name is invalid';
    //             break;
    //         case 'duration':
    //             formErrors.duration = value <= 0 ? 'Duration is Negative' : '';
    //             break;
    //         case 'date':
    //             formErrors.date = value ? '' : 'date is required';
    //             break;
    //         default:
    //             break;
    //     }
    //     this.setState({
    //         formErrors: { ...formErrors }
    //     })
    // }

    
      calcDuration(startDate, endDate){
        let {Days} = this.state;
        const endDate1 = moment(endDate);
        const startDate1 = moment(startDate);
        Days = endDate1.diff(startDate1, 'days');
        return Days
    }

    render(){
        const {data, formErrors, formData, searchValue} = this.state;
        console.log('dataApp', data);
        
        return(
            <div style={{margin: '150px'}} >    
                {/* <h1 style={{paddingLeft: '700px'}} > My Application </h1> */}
                <br /> <br />
               
                <div style={{float:'left'}}>
                    <Card style={{padding:"50px"}}>
                        <FormDetails
                            formErrors={formErrors}
                            data={formData}     
                            onChange={(key, value)=>this.onChange(key, value)}
                            onSave={(e)=>this.onSave(e)}
                        />
                    </Card>
                </div>
                
                <div style={{float:'right'}}>
                    <Card style={{padding:"50px"}}>
                        <TableTask 
                            data={data}
                            onDelete={(id)=>this.onDelete(id)}
                            onEdit={(id)=>this.onEdit(id)}     
                            onSearch={(value)=>this.onSearch(value)} 
                            searchValue={searchValue}                     
                        />
                    </Card>
                </div>
            </div>
        )
    }
}
 // let fields = getFormErrorsFields(TaskFields)
        // Object.keys(fields).map((key, index) => {
        //     console.log("fields[key]", fields[key])
        //     return (this.validateField(key, fields[key]))
        // })
        
export default App;

// validateFieldForNull() {
//     const { form, errors } = this.state;
//     if (TaskFields.required) {
//         console.log("inside first if")
//         console.log("1.::::", TaskFields.required)
//         TaskFields.filter(x => x.required)
//             .forEach(x => {
//                 errors[x.name] = form[x.name] ? '' : "this field is required";
//             });
//     }
//     else if (TaskFields.checkValidity) {
//         console.log("inside else if")
//         console.log("2.::::", TaskFields.checkValidity)
//         TaskFields.filter(x => x.checkValidity)
//             .forEach(x => {
//                 errors[x.name] = form[x.name] ? '' : x.errorMessage;
//             });
//     }
//     else
//         //console.log("inside else if");
//         return null;
//     this.setState({
//         formErrors: { ...errors }
//     })
// }