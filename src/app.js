import { Select } from "./select/select";
import "./select/select.scss";

const select = new Select("#select", {
    placeholder: 'Please select element',
    selectedId: '4',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'React Native'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'Vue Native'},
        {id: '5', value: 'Angular'}
    ]
});

window.s = select;

// document.getElementById("app").innerHTML = `${select}`;
