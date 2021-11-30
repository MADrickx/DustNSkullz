import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {userRequest} from "../../requestMethods";

export default function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img
                            src={
                                users.img ||
                                // eslint-disable-next-line no-template-curly-in-string
                                `https://robohash.org/${user.username}`
                            }
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">
                                {user.username}
                            </span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
