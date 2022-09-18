import {useState} from "react";
import User from "./User";

function Infos() {

    const [info, setInfo] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setInfo(value.info);
        });

    return(
        <div>
            {
                Object.keys(info).map(value => <User count={value} />)

            }
        </div>
    );
}

export default Infos;
