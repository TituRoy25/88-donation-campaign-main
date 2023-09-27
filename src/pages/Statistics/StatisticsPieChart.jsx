import { PieChart, Pie, } from 'recharts';

const StatisticsPieChart = () => {
    const data02 = [
        {
            "name": "Group A",
            "value": 66.7
        },
        {
            "name": "Group B",
            "value": 33.3
        }
    ];
    return (
        <div className='justify-center text-center mb-5'>
            <h1>Donation(%)</h1>
            <div className='flex justify-center'>
                <PieChart width={320} height={250}>
                    {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#82ca9d" label />
                </PieChart>
            </div>

        </div>
    );
};

export default StatisticsPieChart;