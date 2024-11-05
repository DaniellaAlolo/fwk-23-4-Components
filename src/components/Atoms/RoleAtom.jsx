const RoleAtom = () => {
    return (
        <div className="radioGroup">
            <input type="radio" id="user" name="userRole" value="user" />
            <label htmlFor="user">User</label>

            <input type="radio" id="admin" name="userRole" value="admin" />
            <label htmlFor="admin">Admin</label>
        </div>
    );
};

export default RoleAtom;
