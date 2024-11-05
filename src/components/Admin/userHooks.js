import { useState } from "react";

export const useAddUser = () => {
    const [error, setError] = useState(null);

    const addUser = async (user) => {
        setError(null);
        try {
            const res = await fetch("http://localhost:3003/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            if (!res.ok) {
                throw new Error("Failed to add user");
            }
            const data = await res.json();
            return data;
        } catch (err) {
            setError(err);
        }
    };

    return { addUser, error };
};
