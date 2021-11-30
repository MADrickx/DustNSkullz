import {useEffect, useState} from "react";
import {userRequest} from "../../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js";

export default function WidgetLg() {
    const [orders, setOrders] = useState([""]);

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getOrders();
    }, []);

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, index) => (
                        <tr className="widgetLgTr" key={index}>
                            <td className="widgetLgUser">
                                <span className="widgetLgName">
                                    {item.userId}
                                </span>
                            </td>
                            <td className="widgetLgDate">
                                {format(item.createdAt)}
                            </td>
                            <td className="widgetLgAmount">{item.amount}€</td>
                            <td className="widgetLgStatus">
                                <Button type={item.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
