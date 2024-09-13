const RadioBtnAtom = () => {
    return (
        <fieldset>
            <legend>Task status:</legend>

            <div>
                <input type="radio" id="statusToDo" name="taskStatus" value="taskStatus" />
                <label for="statusToDo">To-do</label>
            </div>

            <div>
                <input type="radio" id="statusDoing" name="taskStatus" value="taskStatus" />
                <label for="dewey">Doing</label>
            </div>

            <div>
                <input type="radio" id="statusDone" name="taskStatus" value="taskStatus"  />
                <label for="statusDone">Done</label>
            </div>
        </fieldset>
    );
}

export default RadioBtnAtom;