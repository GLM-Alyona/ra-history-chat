export default function Typing(props) {
    const { from, time } = props;
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
                <span className="message-data-time">{time}</span>
            </div>
        </li>
    )
}