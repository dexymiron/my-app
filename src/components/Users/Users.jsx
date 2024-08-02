import React from "react";
import n from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [

                {
                    id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlTvlfGD_6BhEo54FywLVrhwu0yDneo5k9IE9SVnByZSwToGikL87_Na-_CAVCoQBlSE&usqp=CAU',
                    followed: false, fullname: 'Dmitriy', status: 'I like basketball', location: { city: 'Kiev', country: 'Ukraine' }
                },
                {
                    id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlTvlfGD_6BhEo54FywLVrhwu0yDneo5k9IE9SVnByZSwToGikL87_Na-_CAVCoQBlSE&usqp=CAU',
                    followed: true, fullname: 'Max', status: 'I like play the guitar', location: { city: 'LosAngeles', country: 'USA' }
                },
                {
                    id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlTvlfGD_6BhEo54FywLVrhwu0yDneo5k9IE9SVnByZSwToGikL87_Na-_CAVCoQBlSE&usqp=CAU',
                    followed: false, fullname: 'Misha', status: 'I like travel', location: { city: 'Oslo', country: 'Norway' }
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={n.userPhoto} />
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;