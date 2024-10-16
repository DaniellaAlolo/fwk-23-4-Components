import Btn from "../Btn/Btn"
import { FiDatabase } from "react-icons/fi";
import styles from "./DataRequest.module.css"
import React from "react";

const DataRequest = () => {

    const handleDataRequest = async () => {
        try {
            const response = await fetch("https://api-a6uj3err4a-ew.a.run.app/request-data", {
                method: "GET",
                headers: {
                    "Content-Type": "application/pdf",
                },
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "data.pdf";
                a.click();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    return ( 
        <div className={styles.dataRequest}>
            <h2>Request data copy</h2>
            <Btn icon={<FiDatabase />} text={"Download data"} onClick={handleDataRequest}/>
        </div>
     );
}
 
export default DataRequest;