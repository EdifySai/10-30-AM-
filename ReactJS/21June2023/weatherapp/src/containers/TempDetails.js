import { connect } from 'react-redux';
function TempDetails(props) {

    const renderData = () => {
        if (props.data.weatherData.length != 0) {
            var list = props.data.weatherData.data.timelines[0].intervals.map(
                temp => {
                    return <tr key={temp.startTime}> <td>{temp.startTime}</td> <td>{temp.values.temperature}</td></tr>
                }
            )
            return list;
        }
    }
    return (
        <div>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>

        </div>
    )
}
function mapStateToProps(appState) {
    console.log("appState", appState);
    return { data: appState }
}


export default connect(mapStateToProps, null)(TempDetails)
