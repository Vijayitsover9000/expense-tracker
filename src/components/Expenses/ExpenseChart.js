import Chart from "../Chart/Chart";
export default function ExpenseChart(props){
    const dataPoints = [
        {label: 'JAN' ,value :0},
        {label: 'FEB' ,value :0},
        {label: 'MAR' ,value :0},
        {label: 'APR' ,value :0},
        {label: 'MAY' ,value :0},
        {label: 'JUN' ,value :0},
        {label: 'JUL' ,value :0},
        {label: 'AUG' ,value :0},
        {label: 'SEP' ,value :0},
        {label: 'OCT' ,value :0},
        {label: 'NOV' ,value :0},
        {label: 'DEC' ,value :0}
    ];
    for(let dp of props.data)
    {   
        const em = dp.date.getMonth() 
        dataPoints[em].value += dp.amount; 
    }
    
    return (
        <Chart dataPoints = {dataPoints}/>
    );

}