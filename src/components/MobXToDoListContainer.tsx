import React, { ChangeEvent, useState } from "react";
import MobXToDoList from "./MobXToDoList";
import indexStore from "../mobxstore/indexStore";

const MobXToDoListContainer = (): JSX.Element => {
    const { todolistStore } = indexStore();

    const [value, setValue] = useState<string>("");
    
    const onAddList = () => {
        todolistStore.addList(value);
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value);
    }

    return (
        <MobXToDoList value={value} store={todolistStore} onAddList={onAddList} onChange={onChange}/>
    )
}

export default MobXToDoListContainer;