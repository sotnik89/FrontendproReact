import React from "react";

class SmileStats extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>Результати голосування: </p>
                <p>Переможець: {}</p>
            </div>
        )
    }
}
export default SmileStats