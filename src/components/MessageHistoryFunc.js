import Message from "./MessageFunc";
import Response from "./ResponseFunc";
import Typing from "./TypingFunc";

export default function MessageHistory(props) {
    const { messages } = props;

    if (messages.length === 0) {
        return null;
    }

    return (
        <ul>
            {messages.map(item => {
                const {id, type, from, text, time} = item

                return (
                    type === 'message' ? <Message key={id} from={from} time={time} message={text}/> : 
                    type === 'response' ? <Response key={id} from={from} time={time} message={text}/> :
                    <Typing key={id} from={from} time={time}/>
                )
            })}
        </ul>
    )
}