import React from "react";
import n from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/User.webp'

let Users = (props) => {

    let getUsers = () => {


        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {

                props.setUsers(responce.data.items);
            });

        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={n.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;