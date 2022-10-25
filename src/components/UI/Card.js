import './Card.css'
import "../Expenses/Expenses.css";
export default function Card(props){
    const classes = props.className+' card';
    return(
        <div className = {classes}>{props.children}</div>
    )
}