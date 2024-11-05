import { AccountDeletion } from "../DataDeletion";
import { DataRequest } from "../DataRequest"

const SettingsPanel = () => {
    return (
        <div className="settingsWrapper">
            <h2>Settings</h2>
            <div className="settingsManangement">
                <AccountDeletion />
                <DataRequest />
            </div>
        </div>
    );
}

export default SettingsPanel;