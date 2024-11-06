import React from "react";

const RoleAtom = ({ role, onRoleChange }) => {
    const handleRoleChange = (e) => {
        onRoleChange(e.target.value);
    };

    return (
        <div className="radioGroup">
            <input
                type="radio"
                id="user"
                name="userRole"
                value="user"
                checked={role === "user"}
                onChange={handleRoleChange}
            />
            <label htmlFor="user">User</label>
            <input
                type="radio"
                id="admin"
                name="userRole"
                value="admin"
                checked={role === "admin"}
                onChange={handleRoleChange}
            />
            <label htmlFor="admin">Admin</label>
        </div>
    );
};

export default RoleAtom;
